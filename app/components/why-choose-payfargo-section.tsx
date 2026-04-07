import { getTranslations } from "next-intl/server";
import ExchangeIcon from "./icons/excange-icon";
import InstantIcon from "./icons/instant-icon";
import SecurityIcon from "./icons/security-icon";

const ICON_WRAP =
  "mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF2FF] text-[#3730A3]";

export async function WhyChoosePayfargoSection() {
  const t = await getTranslations("why");

  const features = [
    {
      titleKey: "f1Title" as const,
      descKey: "f1Desc" as const,
      icon: <InstantIcon />,
    },
    {
      titleKey: "f2Title" as const,
      descKey: "f2Desc" as const,
      icon: <ExchangeIcon />,
    },
    {
      titleKey: "f3Title" as const,
      descKey: "f3Desc" as const,
      icon: <SecurityIcon />,
    },
  ];

  return (
    <section
      id="why-payfargo"
      aria-labelledby="why-payfargo-heading"
      className="bg-white px-4 py-16 sm:py-20 lg:px-24 lg:py-8 xl:px-48"
    >
      <div className="mx-auto max-w-8xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="why-payfargo-heading"
            className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-[56px] lg:leading-tight"
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            {t("subtitle")}
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-10 border-gray-100 pt-0 md:mt-16 md:grid-cols-3 md:gap-0 md:border-t-0 md:pt-0 md:divide-x md:divide-gray-200">
          {features.map(({ titleKey, descKey, icon }) => (
            <div
              key={titleKey}
              className="flex flex-col items-center text-center max-md:max-w-md max-md:mx-auto md:items-start md:text-left md:px-6 lg:px-10 first:md:pl-0 last:md:pr-0"
            >
              <div className={ICON_WRAP}>{icon}</div>
              <h3 className="text-lg font-medium tracking-tight text-gray-800 sm:text-2xl">
                {t(titleKey)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                {t(descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
