import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { AboutLocationsMap } from "./about-locations-map";

const BRAND = "#133CBA";

export async function AboutHero() {
  const t = await getTranslations("aboutPage");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
    { value: t("stat4Value"), label: t("stat4Label") },
  ] as const;

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-6 sm:pb-20 sm:pt-8 md:px-6 lg:px-0">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="max-w-7xl flex flex-col items-start justify-start">
          <p className="text-left text-sm font-medium text-white/90 sm:text-base">
            {t("heroEyebrow")}
          </p>
          <h1 className="mt-4 max-w-2xl text-left text-3xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
            {t("heroTitle")}
          </h1>
        </div>
        <p className="mt-4 sm:mt-0 max-w-xl text-left text-base leading-relaxed text-white/85 sm:text-lg">
          {t("heroLead")}
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-8 sm:mt-16 sm:grid-cols-4 sm:gap-6">
        {stats.map((row) => (
          <div key={row.label} className="text-left">
            <p className="text-2xl font-semibold text-white sm:text-3xl md:text-6xl">
              {row.value}
            </p>
            <p className="mt-1 text-sm text-white/80 sm:text-base">
              {row.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function AboutBody() {
  const t = await getTranslations("aboutPage");

  return (
    <>
      <section
        className="bg-white py-16 sm:py-20 md:py-24"
        aria-labelledby="about-why-heading"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-0">
          <h2
            id="about-why-heading"
            className="text-center text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl"
          >
            {t("whyTitle")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-neutral-600 sm:text-base">
            {t("whySubtitle")}
          </p>
          <div className="relative mx-auto mt-10 max-w-[1280px] overflow-hidden bg-neutral-100 shadow-sm ring-1 ring-black/5 sm:mt-12">
            <Image
              src="/images/about_girl.jpg"
              alt={t("aboutImageAlt")}
              width={1280}
              height={854}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
              quality={100}
            />
          </div>
          <div className="mx-auto mt-12 grid max-w-[1280px] gap-10 sm:mt-14 sm:grid-cols-3 sm:gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {t("pillar1Title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
                {t("pillar1Body")}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {t("pillar2Title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
                {t("pillar2Body")}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {t("pillar3Title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
                {t("pillar3Body")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 text-white sm:py-20 md:py-24"
        style={{
          background: `${BRAND}`,
        }}
        aria-labelledby="about-mission-heading"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6 lg:px-0">
          <div>
            <h2 id="about-mission-heading" className="sr-only">
              {t("missionHeadingSr")}
            </h2>
            <p className="text-sm font-medium text-white/90 sm:text-base">
              {t("missionFounded")}
            </p>
            <p className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">
              {t("missionTagline")}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-white/90 sm:text-base">
            {t("missionBody")}
          </p>
        </div>
      </section>

      <section
        className="bg-white py-16 sm:py-20 md:py-24"
        aria-labelledby="about-locations-heading"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-0">
          <h2
            id="about-locations-heading"
            className="text-center text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl"
          >
            {t("locationsTitle")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-neutral-600 sm:text-base">
            {t("locationsSubtitle")}
          </p>
          <div className="mt-12 sm:mt-14">
            <AboutLocationsMap />
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl gap-10 sm:mt-16 sm:grid-cols-3 sm:gap-8">
            <div className="text-center sm:text-left">
              <h3 className="text-base font-semibold text-neutral-900">
                {t("contactSupportTitle")}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {t("contactSupportDesc")}
              </p>
              <a
                href={`mailto:${t("contactSupportEmail")}`}
                className="mt-2 inline-block text-sm text-neutral-600 transition hover:text-[#133CBA]"
              >
                {t("contactSupportEmail")}
              </a>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-base font-semibold text-neutral-900">
                {t("contactSalesTitle")}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {t("contactSalesDesc")}
              </p>
              <a
                href={`mailto:${t("contactSalesEmail")}`}
                className="mt-2 inline-block text-sm text-neutral-600 transition hover:text-[#133CBA]"
              >
                {t("contactSalesEmail")}
              </a>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-base font-semibold text-neutral-900">
                {t("contactPhoneTitle")}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {t("contactPhoneHours")}
              </p>
              <a
                href={`tel:${t("contactPhoneTel")}`}
                className="mt-2 inline-block text-sm text-neutral-600 transition hover:text-[#133CBA]"
              >
                {t("contactPhoneDisplay")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
