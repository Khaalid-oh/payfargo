import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const BRAND = "#133CBA";

function IconBox({ children }: { children: ReactNode }) {
  return (
    <div
      className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border-2 text-[#133CBA]"
      style={{ borderColor: BRAND, color: BRAND }}
    >
      {children}
    </div>
  );
}

function IconHeart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2Z" />
    </svg>
  );
}

function IconRefresh({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  );
}

function IconBan({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m4.93 4.93 14.14 14.14" />
    </svg>
  );
}

function IconPlusCircle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

function IconCreditCard({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const FAQ_CARD_ICONS = [
  IconHeart,
  IconRefresh,
  IconBan,
  IconPlusCircle,
  IconCreditCard,
  IconMail,
] as const;

export async function FaqPageHero() {
  const t = await getTranslations("faqsPage");

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-6 sm:pb-20 sm:pt-8 md:px-6 lg:px-0">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-white/90 sm:text-base">
            {t("heroEyebrow")}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            {t("heroTitle")}
          </h1>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#133CBA] shadow-sm transition hover:bg-white/95 sm:px-8 sm:py-3.5 sm:text-base"
          >
            {t("chatCta")}
          </Link>
        </div>
        <p className="max-w-md text-base leading-relaxed text-white/90 lg:pt-8 lg:text-right lg:text-lg">
          {t("heroLead")}
        </p>
      </div>
    </div>
  );
}

export async function FaqPageBody() {
  const t = await getTranslations("faqsPage");

  const indices = [0, 1, 2, 3, 4, 5] as const;

  return (
    <>
      <section
        className="bg-white py-16 sm:py-20 md:py-24"
        aria-labelledby="faq-page-grid-heading"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-0">
          <h2 id="faq-page-grid-heading" className="sr-only">
            {t("gridHeadingSr")}
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {indices.map((i) => {
              const Icon = FAQ_CARD_ICONS[i];
              return (
                <article key={i}>
                  <IconBox>
                    <Icon />
                  </IconBox>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {t(`card${i}Title` as const)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {t(`card${i}Body` as const)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="border-t border-neutral-200 bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-6 lg:px-0"
        aria-labelledby="faq-page-still-heading"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <div className="max-w-xl">
            <h2
              id="faq-page-still-heading"
              className="text-xl font-semibold text-neutral-900 sm:text-2xl"
            >
              {t("stillTitle")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
              {t("stillBody")}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full px-8 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-95 sm:text-base"
            style={{ backgroundColor: BRAND }}
          >
            {t("getInTouch")}
          </Link>
        </div>
      </section>
    </>
  );
}
