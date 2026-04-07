"use client";

import { FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const BRAND = "#133CBA";

const fieldClass =
  "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#133CBA] focus:outline-none focus:ring-2 focus:ring-[#133CBA]/20";

export function ContactForm() {
  const t = useTranslations("contactPage");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5  m,  £42">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-first-name"
            className="mb-1.5 block text-sm font-medium text-neutral-800"
          >
            {t("firstName")}
          </label>
          <input
            id="contact-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            className={fieldClass}
            required
          />
        </div>
        <div>
          <label
            htmlFor="contact-last-name"
            className="mb-1.5 block text-sm font-medium text-neutral-800"
          >
            {t("lastName")}
          </label>
          <input
            id="contact-last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            className={fieldClass}
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="mb-1.5 block text-sm font-medium text-neutral-800"
        >
          {t("email")}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          required
        />
      </div>
      <div>
        <span
          id="contact-phone-label"
          className="mb-1.5 block text-sm font-medium text-neutral-800"
        >
          {t("phone")}
        </span>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <label htmlFor="contact-country-code" className="sr-only">
            {t("phoneCountryLabel")}
          </label>
          <select
            id="contact-country-code"
            name="countryCode"
            className={`${fieldClass} sm:w-[min(11rem,42%)] sm:shrink-0`}
            defaultValue="+1"
          >
            <option value="+1">{t("phoneOptionUs")}</option>
            <option value="+44">{t("phoneOptionGb")}</option>
            <option value="+61">{t("phoneOptionAu")}</option>
            <option value="+234">{t("phoneOptionNg")}</option>
            <option value="+52">{t("phoneOptionMx")}</option>
          </select>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel-national"
            className={fieldClass}
            aria-labelledby="contact-phone-label"
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-medium text-neutral-800"
        >
          {t("message")}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className={`${fieldClass} min-h-32 resize-y`}
          required
        />
      </div>
      <label className="flex cursor-pointer items-start gap-3 text-sm text-neutral-600">
        <input
          type="checkbox"
          name="privacyAccepted"
          className="mt-1 h-4 w-4 shrink-0 rounded border-neutral-300 text-[#133CBA] focus:ring-[#133CBA]"
          required
        />
        <span className="leading-relaxed">
          {t.rich("privacyRich", {
            policy: (chunks) => (
              <Link
                href="#"
                className="font-medium underline underline-offset-2"
                style={{ color: BRAND }}
              >
                {chunks}
              </Link>
            ),
          })}
        </span>
      </label>
      <button
        type="submit"
        className="w-full rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 sm:text-base"
        style={{ backgroundColor: BRAND }}
        aria-label={t("sendMessageAria")}
      >
        {t("sendMessage")}
      </button>
    </form>
  );
}
