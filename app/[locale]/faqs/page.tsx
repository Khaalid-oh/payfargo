import { FaqPageBody, FaqPageHero } from "@/app/components/faq-page-content";
import { HeroSiteHeader } from "@/app/components/hero-site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { getTranslations, setRequestLocale } from "next-intl/server";

const BRAND_SOLID = "#133CBA";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faqsPage" });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function FaqsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div
        className="relative min-h-0 overflow-hidden text-white"
        style={{ background: BRAND_SOLID }}
      >
        <HeroSiteHeader />
        <FaqPageHero />
      </div>
      <FaqPageBody />
      <SiteFooter />
    </>
  );
}
