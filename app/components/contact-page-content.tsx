import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "./contact-form";

export async function ContactPageHero() {
  const t = await getTranslations("contactPage");

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
        </div>
        <p className="max-w-md text-base leading-relaxed text-white/90 lg:pt-8 lg:text-left lg:text-lg">
          {t("heroLead")}
        </p>
      </div>
    </div>
  );
}

export async function ContactPageBody() {
  const t = await getTranslations("contactPage");

  return (
    <section
      className="bg-white py-16 sm:py-20 md:py-24"
      aria-labelledby="contact-form-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="contact-form-heading"
              className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl"
            >
              {t("formTitle")}
            </h2>
            <p className="mt-2 text-sm text-neutral-600 sm:text-base">
              {t("formSubtitle")}
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <div className="relative aspect-4/5 w-full overflow-hidden bg-neutral-100 shadow-sm ring-1 ring-black/5 lg:aspect-3/4 lg:max-h-[min(720px,85vh)] lg:min-h-[420px]">
            <Image
              src="/images/contact_pics.png"
              alt={t("contactImageAlt")}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
