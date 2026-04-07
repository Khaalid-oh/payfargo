"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import AppleLogoIcon from "./icons/apple-logo-icon";
import PlaystoreIcon from "./icons/playstore-icon";

const PAYFARGO_ACCENT = "#B8EC71";

export function DownloadCtaBanner() {
  const t = useTranslations("downloadCta");

  return (
    <section
      aria-labelledby="download-cta-heading"
      className="bg-white px-4 py-6 pt-12 sm:py-16 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative min-h-80 w-full overflow-hidden rounded-2xl sm:min-h-80 sm:rounded-3xl md:min-h-96 md:rounded-4xl lg:min-h-120">
          <Image
            src="/images/headset_girl.jpg"
            alt=""
            fill
            className="object-cover object-[center_30%]"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1280px"
            priority={false}
            quality={100}
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-black/75 via-black/55 to-black/35"
            aria-hidden
          />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 py-8 text-center sm:items-start sm:px-8 sm:py-10 sm:text-left md:px-14 md:py-14 lg:px-16">
            <Link
              href="#"
              className="order-3 mx-auto mt-6 inline-flex w-fit max-w-full shrink-0 flex-wrap items-center justify-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-white/95 sm:order-0 sm:mx-0 sm:mt-0 sm:gap-2.5 sm:px-4 sm:py-2.5"
              aria-label={t("downloadAria")}
              onClick={(e) => e.preventDefault()}
            >
              <span className="text-sm font-medium sm:text-base">
                {t("download")}
              </span>
              <span
                className="flex shrink-0 items-center gap-1.5 sm:gap-2"
                aria-hidden
              >
                <PlaystoreIcon />
                <AppleLogoIcon />
              </span>
            </Link>

            <h2
              id="download-cta-heading"
              className="order-1 mt-0 w-full max-w-[min(100%,24rem)] scroll-mt-24 text-balance text-2xl font-semibold leading-[1.12] tracking-tight text-white sm:order-0 sm:mt-8 sm:max-w-2xl sm:text-4xl sm:leading-tight md:max-w-3xl md:text-5xl md:leading-snug lg:text-[56px]"
            >
              {t("titleBefore")}{" "}
              <span style={{ color: PAYFARGO_ACCENT }}>PayFarGO</span>
            </h2>
            <p className="order-2 mt-3 w-full max-w-md text-sm leading-relaxed text-white/90 sm:order-0 sm:mt-4 sm:max-w-lg sm:text-base md:text-lg">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
