import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { DontMissOutSection } from "../components/dont-miss-out-section";
import { DownloadCtaBanner } from "../components/download-cta-banner";
import { FaqSection } from "../components/faq-section";
import AppstoreBlueIcon from "../components/icons/appstore-blue";
import { MapbaseSvg } from "../components/icons/map-svg";
import PlaystoreBlueIcon from "../components/icons/playstore-blue";
import { HeroCurrencyConverter } from "../components/hero-currency-converter";
import { HeroSiteHeader } from "../components/hero-site-header";
import { SeamlessTransfersSection } from "../components/seamless-transfers-section";
import { SiteFooter } from "../components/site-footer";
import { WhyChoosePayfargoSection } from "../components/why-choose-payfargo-section";
import BankIcon from "../components/bank-icon";
import WalletIcon from "../components/wallet-icon";

const FLAG_EMOJI = ["EU", "AU", "GB", "US", "SA", "JM", "ME", "UA"] as const;

function FlagStack() {
  const flags: Record<(typeof FLAG_EMOJI)[number], string> = {
    EU: "/images/eu_flag.png",
    AU: "/images/aus_flag.png",
    GB: "/images/uk_flag.png",
    US: "/images/us_flag.png",
    SA: "/images/sa_flag.png",
    JM: "/images/jmc_flag.png",
    ME: "/images/mx_flag.png",
    UA: "/images/uae_flag.png",
  };
  return (
    <div className="flex items-center -space-x-3 sm:-space-x-4">
      {FLAG_EMOJI.map((code) => (
        <Image
          src={flags[code]}
          alt={code}
          width={44}
          height={44}
          key={code}
          className="relative z-0 flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11"
          title={code}
          loading="eager"
          priority
          quality={100}
        />
      ))}
      <span className="relative z-10 ml-0.5 flex h-9 min-w-9 items-center justify-center rounded-full bg-white text-lg font-medium text-blue-600 sm:ml-1 sm:h-11 sm:min-w-11 sm:text-[22px]">
        +5
      </span>
    </div>
  );
}

function PartnerLogoStrip({ ariaLabel }: { ariaLabel: string }) {
  const cell =
    "flex min-h-[4.5rem] flex-1 items-center justify-center px-4 py-5 sm:min-h-[5rem]";
  return (
    <section aria-label={ariaLabel} className="w-full bg-[#0BA5EC] text-white">
      <div className="mx-auto flex max-w-7xl items-center px-4 md:px-6 lg:px-0">
        <div className={cell}>
          <Image
            src="/images/reloadly.png"
            alt="Reloadly"
            width={200}
            height={52}
            loading="eager"
            priority
            quality={100}
            className="h-10 w-auto max-h-12 max-w-[min(100%,200px)] object-contain object-center sm:h-12"
          />
        </div>
        <div
          className="flex shrink-0 items-center justify-center self-center py-2"
          aria-hidden
        >
          <span className="block h-11 w-px bg-white/45 sm:h-12" />
        </div>
        <div className={cell}>
          <Image
            src="/images/cybrid.png"
            alt="Cybrid"
            width={200}
            height={52}
            loading="eager"
            priority
            quality={100}
            className="h-10 w-auto max-h-12 max-w-[min(100%,200px)] object-contain object-center sm:h-12"
          />
        </div>
        <div
          className="flex shrink-0 items-center justify-center self-center py-2"
          aria-hidden
        >
          <span className="block h-11 w-px bg-white/45 sm:h-12" />
        </div>
        <div className={cell}>
          <Image
            src="/images/coinflow.png"
            alt="Coinflow"
            width={220}
            height={56}
            loading="eager"
            priority
            quality={100}
            className="h-10 w-auto max-h-12 max-w-[min(100%,220px)] object-contain object-center sm:h-12"
          />
        </div>
      </div>
    </section>
  );
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("hero");

  return (
    <>
      <div
        id="home"
        className="relative min-h-screen overflow-hidden text-white max-md:pb-14 md:pb-0"
        style={{
          background: "linear-gradient(0deg, #091C59 0%, #133DBF 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[374px] w-full max-w-[1152px] -translate-x-1/2 overflow-hidden"
          aria-hidden
        >
          <MapbaseSvg className="block" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-1 opacity-[0.22]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.55) 0.6px, transparent 0.7px)",
            backgroundSize: "14px 14px",
            maskImage:
              "radial-gradient(ellipse 85% 70% at 50% 45%, black 20%, transparent 70%)",
          }}
          aria-hidden
        />

        <HeroSiteHeader />

        <main className="relative z-10 mx-auto mt-16 flex w-full max-w-7xl flex-1 flex-col items-stretch gap-10 px-4 sm:mt-10 sm:gap-12 md:mt-24 md:flex-row md:items-center md:justify-center md:gap-15 md:px-6 lg:mt-40 lg:px-0 xl:mt-44">
          <section
            id="get-started"
            className="w-full max-w-2xl scroll-mt-24 max-md:text-center md:shrink-0 md:text-left"
          >
            <div className="mb-3 flex w-fit max-w-full items-center gap-2 rounded-full bg-white/30 px-2.5 py-1.5 max-md:mx-auto sm:mb-6 sm:gap-3 sm:px-3 sm:py-2 md:mx-0">
              <FlagStack />
            </div>

            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[56px]">
              {t("headline")}
            </h1>

            <p className="mt-3 text-base leading-relaxed text-white/85 sm:mt-5 sm:text-lg">
              {t("bodyLead")}{" "}
              <strong className="font-semibold text-white">
                {t("bodyAfrica")}
              </strong>{" "}
              {t("bodyAnd")}{" "}
              <strong className="font-semibold text-white">
                {t("bodyCaribbean")}
              </strong>{" "}
              {t("bodyFrom")}{" "}
              <strong className="font-semibold text-white">
                {t("bodyRegions")}
              </strong>{" "}
              {t("bodyAnd2")}{" "}
              <strong className="font-semibold text-white">
                {t("bodyAustralia")}
              </strong>
            </p>

            <div className="mx-auto mt-8 w-full max-w-fit md:mx-0 md:w-auto md:max-w-none">
              <a
                href="#download-cta-heading"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-white px-10 py-3.5 text-center text-base font-semibold text-[#133DBF] shadow-lg shadow-black/10 transition hover:bg-white/95 sm:hidden"
                aria-label={t("downloadAppAria")}
              >
                <span>{t("downloadApp")}</span>
                <span className="flex shrink-0 items-center gap-2" aria-hidden>
                  <PlaystoreBlueIcon width={22} height={22} />
                  <AppstoreBlueIcon width={22} height={22} />
                </span>
              </a>
              <a
                href="#get-started"
                className="hidden rounded-full bg-white px-8 py-3.5 text-center text-base font-semibold text-[#133DBF] shadow-lg shadow-black/10 transition hover:bg-white/95 sm:inline-flex sm:w-auto"
              >
                {t("getStarted")}
              </a>
            </div>
          </section>

          <section
            id="international-money-transfer"
            className="relative flex w-full scroll-mt-24 flex-col gap-6 md:w-1/2 md:max-w-none"
          >
            <HeroCurrencyConverter />

            <div
              id="bill-payments"
              className="scroll-mt-24 bg-white p-5 sm:p-6 md:p-8"
              style={{
                borderTopLeftRadius: "2.5rem",
                borderBottomRightRadius: "2.5rem",
              }}
            >
              <p className="text-sm sm:text-base font-medium text-[#133DBF]">
                {t("paymentChannel")}
              </p>
              <div className="mt-3 flex w-full min-w-0 items-stretch rounded-md border border-[#133DBF] px-2 py-2.5 sm:px-4 sm:py-3">
                <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 sm:gap-2.5">
                  <BankIcon
                    size={28}
                    className="shrink-0 sm:hidden"
                    aria-hidden
                  />
                  <BankIcon
                    size={36}
                    className="hidden shrink-0 sm:block"
                    aria-hidden
                  />
                  <span className="whitespace-nowrap text-sm font-medium text-[#133DBF] sm:text-base">
                    {t("bankAccount")}
                  </span>
                </div>
                <div
                  className="flex shrink-0 items-center px-1.5 sm:px-3"
                  aria-hidden
                >
                  <span className="h-7 w-px self-center bg-[#133DBF] sm:h-8" />
                </div>
                <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 sm:gap-2.5">
                  <WalletIcon
                    size={28}
                    className="shrink-0 sm:hidden"
                    aria-hidden
                  />
                  <WalletIcon
                    size={36}
                    className="hidden shrink-0 sm:block"
                    aria-hidden
                  />
                  <span className="whitespace-nowrap text-sm font-medium text-[#133DBF] sm:text-base sm:hidden">
                    {t("mobileWallet")}
                  </span>
                  <span className="hidden whitespace-nowrap font-medium text-[#133DBF] sm:inline sm:text-base">
                    {t("mobileWallet")}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <PartnerLogoStrip ariaLabel={t("partnersAria")} />
      <DontMissOutSection />
      <SeamlessTransfersSection />
      <WhyChoosePayfargoSection />
      <FaqSection />
      <DownloadCtaBanner />
      <SiteFooter />
    </>
  );
}
