"use client";

import Image, { type ImageProps } from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import TrendIcon from "./icons/trend-icon";
import TransactionIcon from "./icons/transaction_icon";
import DropdownGrayIcon from "./icons/dropdown-gray";

/** Fixed EUR/USD until live rates are wired in. */
export const EUR_USD_RATE = 1.15;

type FromCurrency = "EUR" | "USD";

const NUMBER_LOCALES: Record<string, string> = {
  en: "en-US",
  es: "es-ES",
  fr: "fr-FR",
};

function formatMoney(n: number, locale: string): string {
  const intlLocale = NUMBER_LOCALES[locale] ?? "en-US";
  return n.toLocaleString(intlLocale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function parseMoneyInput(raw: string): number | undefined {
  const t = raw.replace(/,/g, "").trim();
  if (t === "" || t === "-" || t === "." || t === "-.") return undefined;
  const n = Number.parseFloat(t);
  return Number.isFinite(n) ? n : undefined;
}

function toDisplayCurrency(from: FromCurrency, amountFrom: number): number {
  return from === "EUR" ? amountFrom * EUR_USD_RATE : amountFrom / EUR_USD_RATE;
}

function fromDisplayCurrency(from: FromCurrency, amountTo: number): number {
  return from === "EUR" ? amountTo / EUR_USD_RATE : amountTo * EUR_USD_RATE;
}

function placeCaretAtEnd(el: HTMLInputElement) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const len = el.value.length;
      el.setSelectionRange(len, len);
    });
  });
}

function CurrencyRow({
  label,
  value,
  onChange,
  code,
  flag,
  inputRef,
  inputId,
  inputAriaLabel,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  code: string;
  flag: ImageProps["src"];
  inputRef?: RefObject<HTMLInputElement | null>;
  inputId: string;
  inputAriaLabel: string;
}) {
  return (
    <div className="relative rounded-lg border border-neutral-200 bg-white px-3 pb-3 pt-2.5 shadow-xs sm:px-4 sm:pb-4 sm:pt-3">
      <span className="text-xs font-medium text-neutral-500">{label}</span>
      <div className="mt-2 flex min-w-0 items-center justify-between gap-2 sm:gap-3">
        <input
          ref={inputRef}
          id={inputId}
          placeholder="0.00"
          type="text"
          inputMode="decimal"
          autoComplete="off"
          aria-label={inputAriaLabel}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="min-w-0 flex-1 bg-transparent text-lg font-medium tracking-tight text-gray-800 tabular-nums outline-none placeholder:text-neutral-400 focus:ring-0 focus:ring-[#133DBF]/25 focus:ring-offset-0 rounded-sm sm:text-2xl"
        />
        <button
          type="button"
          className="flex shrink-0 items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-2 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100 sm:gap-2 sm:px-4 sm:py-3"
        >
          <Image src={flag} alt={code} width={24} height={16} />
          <span className="text-sm font-medium text-neutral-900">{code}</span>
          <DropdownGrayIcon />
        </button>
      </div>
    </div>
  );
}

const DEFAULT_FROM: FromCurrency = "EUR";
const DEFAULT_AMOUNT = 1000;

export function HeroCurrencyConverter() {
  const t = useTranslations("converter");
  const locale = useLocale();
  const [fromCurrency, setFromCurrency] = useState<FromCurrency>(DEFAULT_FROM);
  const [fromStr, setFromStr] = useState(() =>
    formatMoney(DEFAULT_AMOUNT, locale),
  );
  const [toStr, setToStr] = useState(() =>
    formatMoney(toDisplayCurrency(DEFAULT_FROM, DEFAULT_AMOUNT), locale),
  );

  const fromInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = fromInputRef.current;
    if (!el) return;
    el.focus();
    placeCaretAtEnd(el);
  }, []);

  const syncToFrom = useCallback(
    (nextFrom: string, currency: FromCurrency) => {
      setFromStr(nextFrom);
      const n = parseMoneyInput(nextFrom);
      if (n === undefined) return;
      setToStr(formatMoney(toDisplayCurrency(currency, n), locale));
    },
    [locale],
  );

  const syncFromTo = useCallback(
    (nextTo: string, currency: FromCurrency) => {
      setToStr(nextTo);
      const n = parseMoneyInput(nextTo);
      if (n === undefined) return;
      setFromStr(formatMoney(fromDisplayCurrency(currency, n), locale));
    },
    [locale],
  );

  const handleSwap = () => {
    const fromN = parseMoneyInput(fromStr);
    const toN = parseMoneyInput(toStr);
    const nextFrom: FromCurrency = fromCurrency === "EUR" ? "USD" : "EUR";
    if (fromN !== undefined && toN !== undefined) {
      setFromCurrency(nextFrom);
      setFromStr(formatMoney(toN, locale));
      setToStr(formatMoney(fromN, locale));
    } else {
      setFromCurrency(nextFrom);
      setFromStr(toStr);
      setToStr(fromStr);
    }
    queueMicrotask(() => {
      const el = fromInputRef.current;
      el?.focus();
      if (el) placeCaretAtEnd(el);
    });
  };

  const rateLabel =
    fromCurrency === "EUR"
      ? `1 EUR = USD ${EUR_USD_RATE.toFixed(2)}`
      : `1 USD = EUR ${(1 / EUR_USD_RATE).toFixed(2)}`;

  const fromFlag =
    fromCurrency === "EUR" ? "/images/eu_ex.png" : "/images/us_ex.png";
  const toFlag =
    fromCurrency === "EUR" ? "/images/us_ex.png" : "/images/eu_ex.png";

  return (
    <div
      className="relative w-full max-w-full bg-white p-5 text-neutral-900 sm:p-6 md:p-8"
      style={{
        borderTopLeftRadius: "2.5rem",
        borderBottomRightRadius: "2.5rem",
      }}
    >
      <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#E8EEFC] py-1.5 text-xs font-medium text-[#133DBF] sm:mb-4 sm:w-auto px-4 pr-5">
        <TrendIcon />
        <span className="text-xs font-medium text-[#133DBF] sm:text-sm">
          {rateLabel}
        </span>
      </div>

      <div className="relative flex flex-col gap-5 sm:gap-6">
        <CurrencyRow
          label={t("from")}
          value={fromStr}
          onChange={(v) => syncToFrom(v, fromCurrency)}
          code={fromCurrency}
          flag={fromFlag}
          inputRef={fromInputRef}
          inputId="converter-from-amount"
          inputAriaLabel={t("amountIn", { currency: fromCurrency })}
        />

        <div className="absolute left-1/2 top-[calc(50%-0.125rem)] z-10 flex -translate-x-1/2 -translate-y-1/2 sm:top-[calc(50%-0.25rem)]">
          <button
            type="button"
            onClick={handleSwap}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#133DBF] text-white shadow-md ring-4 ring-white transition hover:bg-[#0f33a8] sm:h-11 sm:w-11"
            aria-label={t("swap")}
          >
            <TransactionIcon />
          </button>
        </div>

        <CurrencyRow
          label={t("to")}
          value={toStr}
          onChange={(v) => syncFromTo(v, fromCurrency)}
          code={fromCurrency === "EUR" ? "USD" : "EUR"}
          flag={toFlag}
          inputId="converter-to-amount"
          inputAriaLabel={t("amountIn", {
            currency: fromCurrency === "EUR" ? "USD" : "EUR",
          })}
        />
      </div>
    </div>
  );
}
