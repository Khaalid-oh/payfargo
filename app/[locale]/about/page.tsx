import { AboutBody, AboutHero } from "@/app/components/about-page-content";
import { HeroSiteHeader } from "@/app/components/hero-site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage" });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div
        className="relative min-h-0 overflow-hidden text-white"
        style={{
          background: "#133CBA",
        }}
      >
        <HeroSiteHeader />
        <AboutHero />
      </div>
      <AboutBody />
      <SiteFooter />
    </>
  );
}
