import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const SECTION_BLUE = "#133CBA";

export async function SeamlessTransfersSection() {
  const t = await getTranslations("seamless");

  return (
    <section
      aria-labelledby="seamless-transfers-heading"
      className="w-full lg:py-24"
    >
      <div className="grid min-h-0 grid-cols-1 md:grid-cols-2 md:min-h-[min(85vh,40rem)] lg:min-h-[min(90vh,44rem)]">
        <div className="relative min-h-80 w-full md:min-h-full">
          <Image
            src="/images/man_using_payfargo.jpg"
            alt={t("imageAlt")}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            quality={100}
          />
        </div>

        <div
          className="flex flex-col items-center justify-center px-8 py-14 text-white md:px-12 md:py-16 lg:px-16 lg:py-20"
          style={{ backgroundColor: SECTION_BLUE }}
        >
          <div>
            <h2
              id="seamless-transfers-heading"
              className="max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[56px] lg:leading-tight"
            >
              {t("title")}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
              {t("body")}
            </p>
            <Link
              href="/#get-started"
              className="mt-8 inline-flex w-fit rounded-full bg-white px-8 py-3.5 text-base font-semibold shadow-sm transition hover:bg-white/95"
              style={{ color: SECTION_BLUE }}
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
