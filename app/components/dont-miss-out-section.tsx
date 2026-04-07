import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { ReactNode } from "react";
import TransactionArrowIcon from "./transaction-arrow";

function AvatarRing({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`relative z-0 inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full ring-2 ring-white sm:h-14 sm:w-14 lg:h-15 lg:w-15 ${className ?? ""}`}
    >
      {children}
    </span>
  );
}

function OverlapMockCard({
  title,
  amount,
  status,
  children,
}: {
  title: string;
  amount: string;
  status: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full max-w-[440px] min-h-[220px] rounded-3xl bg-white px-5 py-4 text-center shadow-[0_12px_40px_-12px_rgba(15,23,42,0.18)] sm:min-h-[286px] sm:px-12 sm:py-8 lg:min-h-[260px] lg:px-16 lg:py-10">
      <p className="text-2xl font-medium text-gray-800">{title}</p>
      <div className="mt-4 flex items-center justify-center gap-0 pl-1">
        {children}
      </div>
      <p className="mt-4 text-[32px] font-semibold tracking-tight text-gray-800 tabular-nums">
        {amount}
      </p>
      <p className="mt-2 text-base text-gray-500">{status}</p>
    </div>
  );
}

export async function DontMissOutSection() {
  const t = await getTranslations("dontMissOut");

  return (
    <section
      id="about"
      aria-labelledby="dont-miss-out-heading"
      className="bg-white px-4 pb-44 pt-16 text-neutral-900 sm:pt-20 lg:px-8 lg:pt-24"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-neutral-500">{t("eyebrow")}</p>
          <h2
            id="dont-miss-out-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight"
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            {t("subtitle")}
          </p>
        </header>

        <div className="mt-14 grid gap-12 max-sm:gap-24 lg:mt-20 lg:grid-cols-2 lg:gap-10">
          <article className="relative overflow-visible rounded-3xl bg-[#E5EEFF] px-8 pb-40 pt-10 max-sm:pb-44 lg:px-10 lg:pb-60 lg:pt-12">
            <div className="relative z-10">
              <h3 className="text-xl font-medium leading-tight tracking-tight text-gray-800 sm:text-4xl lg:text-[56px]">
                {t("card1Title")}
              </h3>
              <p className="mt-3 max-w-full text-sm leading-relaxed text-neutral-600 sm:text-xl">
                {t("card1Body")}
              </p>
            </div>
            <div className="absolute bottom-0 left-1/2 z-20 flex w-[calc(100%-1.5rem)] max-w-[440px] -translate-x-1/2 translate-y-[32%] justify-center sm:w-[calc(100%-2.5rem)] sm:translate-y-1/2">
              <OverlapMockCard
                title={t("transfer")}
                amount="£380.50"
                status={t("sentStatus")}
              >
                <div className="flex items-center -space-x-1.5 sm:-space-x-2">
                  <AvatarRing className="z-5 bg-white">
                    <Image
                      src="/images/us_flag.png"
                      alt=""
                      width={60}
                      height={60}
                      className="h-full w-full object-cover"
                      quality={100}
                    />
                  </AvatarRing>
                  <AvatarRing className="z-4">
                    <Image
                      src="/images/person_1.png"
                      alt=""
                      width={60}
                      height={60}
                      className="h-full w-full object-cover"
                      quality={100}
                    />
                  </AvatarRing>
                  <AvatarRing className="z-3">
                    <Image
                      src="/images/person_2.png"
                      alt=""
                      width={60}
                      height={60}
                      className="h-full w-full object-cover"
                      quality={100}
                    />
                  </AvatarRing>
                  <AvatarRing className="z-2">
                    <Image
                      src="/images/person_3.png"
                      alt=""
                      width={60}
                      height={60}
                      className="h-full w-full object-cover"
                      quality={100}
                    />
                  </AvatarRing>
                  <AvatarRing className="z-1">
                    <Image
                      src="/images/person_4.png"
                      alt=""
                      width={60}
                      height={60}
                      className="h-full w-full object-cover"
                      quality={100}
                    />
                  </AvatarRing>
                  <span className="z-6 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8EEFC] text-[#133DBF] ring-2 ring-white sm:h-14 sm:w-14 lg:h-15 lg:w-15">
                    <TransactionArrowIcon />
                  </span>
                </div>
              </OverlapMockCard>
            </div>
          </article>

          <article className="relative overflow-visible rounded-3xl bg-[#0BA5EC] px-8 pb-44 pt-10 text-white max-sm:pb-48 lg:px-10 lg:pb-60 lg:pt-12 translate-y-[6%] sm:translate-y-0">
            <div
              className="pointer-events-none absolute inset-0 top-28 rounded-3xl bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(/images/topographic_pattern.svg)",
              }}
              aria-hidden
            />
            <div className="relative z-10">
              <h3 className="text-xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-[56px]">
                {t("card2Title")}
              </h3>
              <p className="mt-3 max-w-full text-sm leading-relaxed text-white sm:text-xl">
                {t("card2Body")}
              </p>
            </div>
            <div className="absolute bottom-0 left-1/2 z-20 flex w-[calc(100%-1.5rem)] max-w-[440px] -translate-x-1/2 translate-y-[32%] justify-center sm:w-[calc(100%-2.5rem)] sm:translate-y-1/2">
              <OverlapMockCard
                title={t("received")}
                amount="$1250.00"
                status={t("receivedStatus")}
              >
                <div className="flex items-center -space-x-1.5 sm:-space-x-2">
                  <AvatarRing className="z-3 bg-white">
                    <Image
                      src="/images/eu_flag.png"
                      alt=""
                      width={60}
                      height={60}
                      className="h-full w-full object-cover"
                      quality={100}
                    />
                  </AvatarRing>
                  <AvatarRing className="z-2">
                    <Image
                      src="/images/person_5.png"
                      alt=""
                      width={60}
                      height={60}
                      className="h-full w-full object-cover"
                      quality={100}
                    />
                  </AvatarRing>
                  <span className="z-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8EEFC] text-[#133DBF] ring-2 ring-white sm:h-14 sm:w-14 lg:h-15 lg:w-15">
                    <TransactionArrowIcon />
                  </span>
                </div>
              </OverlapMockCard>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
