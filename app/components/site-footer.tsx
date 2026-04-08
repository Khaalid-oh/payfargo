"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FormEvent, useMemo, useState } from "react";

const LIME_CTA = "#B8EC71";

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M21.924 2.292a1 1 0 0 0-1.051-.108l-19 8a1 1 0 0 0 .108 1.887l5.05 1.56L17.293 4.02 9.5 13.5v4.57a1 1 0 0 0 1.8.6l2.7-3.6 5.59 4.24a1 1 0 0 0 1.565-.6l4-19a1 1 0 0 0-.33-.922Z" />
    </svg>
  );
}

function NewsletterForm({
  emailLabel,
  emailPlaceholder,
  subscribe,
}: {
  emailLabel: string;
  emailPlaceholder: string;
  subscribe: string;
}) {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <label htmlFor="footer-newsletter-email" className="sr-only">
        {emailLabel}
      </label>
      <input
        id="footer-newsletter-email"
        type="email"
        name="email"
        autoComplete="email"
        placeholder={emailPlaceholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border-0 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:opacity-95"
          style={{ backgroundColor: LIME_CTA }}
        >
          {subscribe}
        </button>
      </div>
    </form>
  );
}

type SiteFooterProps = {
  /** Override default mt-24 (e.g. tighter gap above footer on mobile contact page) */
  topSpacingClassName?: string;
};

export function SiteFooter({
  topSpacingClassName = "mt-24",
}: SiteFooterProps = {}) {
  const t = useTranslations("footer");

  const companyLinks = useMemo(
    () =>
      [
        { labelKey: "aboutUs" as const, href: "/about" },
        { labelKey: "referralPolicy" as const, href: "#" },
        { labelKey: "privacyPolicyLink" as const, href: "#" },
        { labelKey: "termsOfUse" as const, href: "#" },
        { labelKey: "blog" as const, href: "#" },
        { labelKey: "faq" as const, href: "/faqs" },
      ] as const,
    [],
  );

  const year = new Date().getFullYear();

  return (
    <footer className={`${topSpacingClassName} bg-black text-white`}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/images/payfargo_logo.png"
                alt="PayFarGo"
                width={140}
                height={36}
                className="h-8 w-auto brightness-0 invert"
                style={{ width: "auto" }}
              />
            </Link>
            <p className="mt-6 text-sm text-neutral-400">
              PayFarGo &copy; {year}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              {t("company")}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              {companyLinks.map(({ labelKey, href }) => (
                <li key={labelKey}>
                  {href.startsWith("/") ? (
                    <Link
                      href={href}
                      className="transition hover:text-white hover:underline"
                    >
                      {t(labelKey)}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className="transition hover:text-white hover:underline"
                    >
                      {t(labelKey)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white">
                {t("needHelp")}
              </p>
              <a
                href="mailto:info@payfargo.com"
                className="mt-4 inline-block text-sm text-white/90 underline-offset-2 transition hover:text-white hover:underline"
              >
                Info@payfargo.com
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white">
                {t("socials")}
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 text-sm text-white/90 transition hover:text-white"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                      <TwitterIcon />
                    </span>
                    {t("twitter")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/payfargo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-white/90 transition hover:text-white"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                      <InstagramIcon />
                    </span>
                    {t("instagram")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 text-sm text-white/90 transition hover:text-white"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                      <TelegramIcon />
                    </span>
                    {t("telegram")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              {t("newsletterTitle")}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              {t("newsletterBody")}
            </p>
            <NewsletterForm
              emailLabel={t("emailLabel")}
              emailPlaceholder={t("emailPlaceholder")}
              subscribe={t("subscribe")}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/15 pt-8 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label={t("legalAria")}
          >
            <Link href="#" className="transition hover:text-white">
              {t("termsConditions")}
            </Link>
            <Link href="#" className="transition hover:text-white">
              {t("privacyPolicy")}
            </Link>
            <Link href="#" className="transition hover:text-white">
              {t("cookiePolicy")}
            </Link>
          </nav>
          <p className="text-neutral-500 sm:text-right">
            {t("rights", { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
