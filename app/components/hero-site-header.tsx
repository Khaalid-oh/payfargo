"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import DropdownIcon from "./icons/dropdown-icon";

type AppLocale = (typeof routing.locales)[number];

const LOCALE_UI: Record<
  AppLocale,
  { flag: string; labelKey: "langEn" | "langEs" | "langFr" }
> = {
  en: { flag: "/images/navbar_us.png", labelKey: "langEn" },
  es: { flag: "/images/esp_navbar.png", labelKey: "langEs" },
  fr: { flag: "/images/fre_flag.png", labelKey: "langFr" },
};

const localeTriggerClassName =
  "inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium text-white transition hover:bg-white/10 hover:text-white/90 sm:gap-2 sm:px-3 sm:py-2 sm:text-sm";

function LocaleDropdownTrigger({
  open,
  localeMenuId,
  ariaLabel,
  onClick,
  flagSrc,
  labelText,
}: {
  open: boolean;
  localeMenuId: string;
  ariaLabel: string;
  onClick: () => void;
  flagSrc: string;
  labelText: string;
}) {
  const chevron = (
    <span
      className={`inline-flex shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <DropdownIcon />
    </span>
  );
  const flag = (
    <Image
      src={flagSrc}
      alt=""
      width={24}
      height={16}
      className="h-3.5 w-auto sm:h-4"
    />
  );
  if (open) {
    return (
      <button
        type="button"
        className={localeTriggerClassName}
        aria-expanded="true"
        aria-haspopup="listbox"
        aria-controls={localeMenuId}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {flag}
        {labelText}
        {chevron}
      </button>
    );
  }
  return (
    <button
      type="button"
      className={localeTriggerClassName}
      aria-expanded="false"
      aria-haspopup="listbox"
      aria-controls={localeMenuId}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {flag}
      {labelText}
      {chevron}
    </button>
  );
}

function isActiveNavPath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/" || pathname === "";
  }
  if (pathname === href) return true;
  return pathname.startsWith(`${href}/`);
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3 w-5" aria-hidden>
      <span
        className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ease-out ${open ? "translate-y-[5px] rotate-45" : ""}`}
      />
      <span
        className={`absolute left-0 top-[5px] block h-0.5 w-5 rounded-full bg-white transition-opacity duration-200 ease-out ${open ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`absolute left-0 top-[10px] block h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ease-out ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
      />
    </span>
  );
}

export function HeroSiteHeader() {
  const t = useTranslations("nav");
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const menuId = useId();
  const localeMenuId = useId();
  const servicesMenuId = useId();
  const servicesTriggerId = useId();
  const localeWrapRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesBtnRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const closeLocaleMenu = useCallback(() => setLocaleOpen(false), []);

  const closeServicesMenu = useCallback(() => setServicesOpen(false), []);

  const handleServicesBlurCapture = useCallback(() => {
    requestAnimationFrame(() => {
      const root = servicesRef.current;
      if (!root?.contains(document.activeElement)) setServicesOpen(false);
    });
  }, []);

  useLayoutEffect(() => {
    const btn = servicesBtnRef.current;
    if (!btn) return;
    btn.setAttribute("aria-expanded", servicesOpen ? "true" : "false");
  }, [servicesOpen]);

  const currentUi = LOCALE_UI[locale];
  const locales = routing.locales;

  useEffect(() => {
    if (!localeOpen) return;
    const onPointer = (e: PointerEvent) => {
      const el = localeWrapRef.current;
      if (el && !el.contains(e.target as Node)) setLocaleOpen(false);
    };
    document.addEventListener("pointerdown", onPointer, true);
    return () => document.removeEventListener("pointerdown", onPointer, true);
  }, [localeOpen]);

  useEffect(() => {
    if (!localeOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLocaleOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [localeOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const html = document.documentElement;
    const body = document.body;
    const scrollbarGap = window.innerWidth - html.clientWidth;

    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPaddingRight: body.style.paddingRight,
    };

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    if (scrollbarGap > 0) {
      body.style.paddingRight = `${scrollbarGap}px`;
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      html.style.overflow = prev.htmlOverflow;
      body.style.overflow = prev.bodyOverflow;
      body.style.paddingRight = prev.bodyPaddingRight;
    };
  }, [menuOpen, closeMenu]);

  const path = pathname ?? "";

  const navLinkClass = (href: string) =>
    `transition hover:text-white/90 ${
      isActiveNavPath(path, href) ? "font-bold" : "font-medium"
    }`;

  const mobileNavLinkClass = (href: string) =>
    `w-full rounded-lg px-4 py-3 text-center text-base text-white transition hover:bg-white/10 ${
      isActiveNavPath(path, href) ? "font-semibold" : "font-medium"
    }`;

  return (
    <>
      <header
        className={`relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 md:px-6 md:py-6 lg:px-0 ${menuOpen ? "z-40" : "z-50"}`}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center justify-self-start font-semibold tracking-tight"
        >
          <Image
            src="/images/payfargo_logo.png"
            alt="PayFarGo"
            width={110}
            height={20}
            loading="eager"
            priority
            quality={100}
            className="h-6 w-auto sm:h-5"
          />
        </Link>

        <nav
          className="hidden min-w-0 items-center justify-center gap-7 text-[15px] font-medium text-white lg:gap-9 lg:text-base md:flex"
          aria-label={t("mainNav")}
        >
          <Link
            href="/"
            className={navLinkClass("/")}
            aria-current={isActiveNavPath(path, "/") ? "page" : undefined}
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className={navLinkClass("/about")}
            aria-current={isActiveNavPath(path, "/about") ? "page" : undefined}
          >
            {t("about")}
          </Link>
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={closeServicesMenu}
            onFocusCapture={() => setServicesOpen(true)}
            onBlurCapture={handleServicesBlurCapture}
          >
            <button
              ref={servicesBtnRef}
              type="button"
              id={servicesTriggerId}
              className="inline-flex items-center gap-1 py-1 font-medium transition hover:text-white/90"
              aria-haspopup="true"
              aria-controls={servicesMenuId}
              aria-expanded="false"
            >
              {t("services")}
              <DropdownIcon />
            </button>
            <div
              className={`absolute left-1/2 top-full z-60 w-max min-w-56 -translate-x-1/2 pt-2 transition-[opacity,visibility] duration-150 ease-out ${
                servicesOpen
                  ? "pointer-events-auto visible opacity-100"
                  : "pointer-events-none invisible opacity-0"
              }`}
            >
              <div
                id={servicesMenuId}
                aria-label={t("servicesMenu")}
                className="rounded-lg border border-white/20 bg-[#091C59] py-1.5 shadow-xl ring-1 ring-black/20"
              >
                <Link
                  href="/#international-money-transfer"
                  tabIndex={servicesOpen ? 0 : -1}
                  className="block px-4 py-2.5 text-left text-sm text-white transition hover:bg-white/10"
                >
                  {t("serviceMoneyTransfer")}
                </Link>
                <Link
                  href="/#bill-payments"
                  tabIndex={servicesOpen ? 0 : -1}
                  className="block px-4 py-2.5 text-left text-sm text-white transition hover:bg-white/10"
                >
                  {t("serviceBillPayments")}
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/faqs"
            className={navLinkClass("/faqs")}
            aria-current={isActiveNavPath(path, "/faqs") ? "page" : undefined}
          >
            {t("faqs")}
          </Link>
          <Link
            href="/contact"
            className={navLinkClass("/contact")}
            aria-current={
              isActiveNavPath(path, "/contact") ? "page" : undefined
            }
          >
            {t("contact")}
          </Link>
        </nav>

        <div className="flex items-center justify-end justify-self-end gap-3 sm:gap-6 md:gap-8">
          <div className="relative shrink-0" ref={localeWrapRef}>
            <LocaleDropdownTrigger
              open={localeOpen}
              localeMenuId={localeMenuId}
              ariaLabel={`${t("language")}: ${t(currentUi.labelKey)}`}
              onClick={() => setLocaleOpen((o) => !o)}
              flagSrc={currentUi.flag}
              labelText={t(currentUi.labelKey)}
            />
            {localeOpen ? (
              <ul
                id={localeMenuId}
                role="listbox"
                aria-label={t("language")}
                className="absolute right-0 top-full z-60 mt-2 min-w-44 rounded-lg border border-white/20 bg-[#091C59] py-1 shadow-xl ring-1 ring-black/20"
              >
                {locales.map((loc) => {
                  const ui = LOCALE_UI[loc];
                  const selected = loc === locale;
                  const row = (
                    <Link
                      href={pathname}
                      locale={loc}
                      className={`flex items-center gap-2.5 px-3 py-2.5 text-sm text-white transition hover:bg-white/10 ${selected ? "bg-white/15 font-semibold" : ""}`}
                      onClick={closeLocaleMenu}
                    >
                      <Image
                        src={ui.flag}
                        alt=""
                        width={24}
                        height={16}
                        className="h-3.5 w-auto"
                      />
                      {t(ui.labelKey)}
                    </Link>
                  );
                  if (selected) {
                    return (
                      <li key={loc} role="option" aria-selected="true">
                        {row}
                      </li>
                    );
                  }
                  return (
                    <li key={loc} role="option" aria-selected="false">
                      {row}
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
          <button
            type="button"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#133CBA] shadow-sm transition hover:bg-white/95 md:inline-flex"
          >
            {t("signUp")}
          </button>
          {menuOpen ? (
            <span className="h-9 w-9 shrink-0 md:hidden" aria-hidden />
          ) : (
            <button
              type="button"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/20 bg-white/10 p-1 text-white backdrop-blur-sm transition hover:bg-white/15 md:hidden"
              aria-expanded="false"
              aria-controls={menuId}
              aria-label={t("openMenu")}
              onClick={() => {
                setLocaleOpen(false);
                setMenuOpen(true);
              }}
            >
              <HamburgerIcon open={false} />
            </button>
          )}
        </div>
      </header>

      <div
        className={`fixed inset-0 md:hidden ${menuOpen ? "pointer-events-auto z-100" : "pointer-events-none z-40"}`}
        inert={!menuOpen ? true : undefined}
      >
        <nav
          id={menuId}
          className={`absolute inset-0 flex min-h-0 flex-col bg-linear-to-b from-[#133CBA] to-[#091C59] transition-transform duration-300 ease-out ${menuOpen ? "translate-y-0" : "translate-y-full"}`}
          aria-label={t("mobileNav")}
        >
          <div className="flex shrink-0 justify-end px-4 pb-1 pt-[max(0.75rem,env(safe-area-inset-top))]">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-white/10 p-1 text-white backdrop-blur-sm transition hover:bg-white/15"
              aria-label={t("closeMenu")}
              onClick={closeMenu}
            >
              <HamburgerIcon open />
            </button>
          </div>
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 pb-12 pt-2">
            <div className="flex w-full flex-col items-center gap-1">
              <div className="flex w-full max-w-xs flex-col items-stretch gap-1">
                <Link
                  href="/"
                  className={mobileNavLinkClass("/")}
                  aria-current={isActiveNavPath(path, "/") ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {t("home")}
                </Link>
                <Link
                  href="/about"
                  className={mobileNavLinkClass("/about")}
                  aria-current={
                    isActiveNavPath(path, "/about") ? "page" : undefined
                  }
                  onClick={closeMenu}
                >
                  {t("about")}
                </Link>
                <Link
                  href="/#international-money-transfer"
                  className="w-full rounded-lg px-4 py-3 text-center text-base font-medium text-white transition hover:bg-white/10"
                  onClick={closeMenu}
                >
                  {t("serviceMoneyTransfer")}
                </Link>
                <Link
                  href="/#bill-payments"
                  className="w-full rounded-lg px-4 py-3 text-center text-base font-medium text-white transition hover:bg-white/10"
                  onClick={closeMenu}
                >
                  {t("serviceBillPayments")}
                </Link>
                <Link
                  href="/faqs"
                  className={mobileNavLinkClass("/faqs")}
                  aria-current={
                    isActiveNavPath(path, "/faqs") ? "page" : undefined
                  }
                  onClick={closeMenu}
                >
                  {t("faqs")}
                </Link>
                <Link
                  href="/contact"
                  className={mobileNavLinkClass("/contact")}
                  aria-current={
                    isActiveNavPath(path, "/contact") ? "page" : undefined
                  }
                  onClick={closeMenu}
                >
                  {t("contact")}
                </Link>
                <div className="mt-6 w-full border-t border-white/10 pt-6">
                  <button
                    type="button"
                    className="w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-[#133CBA] shadow-sm transition hover:bg-white/95"
                    onClick={closeMenu}
                  >
                    {t("signUp")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
