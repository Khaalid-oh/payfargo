"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useCallback, useId, useState } from "react";

const FAQ_CYAN = "#0BA5EC";

const FAQ_INDICES = [0, 1, 2, 3, 4, 5] as const;

function ChevronIcon({
  open,
  className,
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <svg
      className={`shrink-0 transition-transform duration-200 ${open ? "-rotate-180" : ""} ${className ?? ""}`}
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function TeamAvatarStack() {
  const people = [
    { src: "/images/person_5.png", alt: "" },
    { src: "/images/person_1.png", alt: "" },
    { src: "/images/person_2.png", alt: "" },
  ] as const;
  return (
    <div className="flex justify-center -space-x-3" aria-hidden>
      {people.map((person) => (
        <span
          key={person.src}
          className={`relative inline-block h-12 w-12 shrink-0 ${person.src === "/images/person_1.png" ? "-translate-y-1/8 z-20" : "translate-y-0 z-10"} overflow-hidden rounded-full ring-2 ring-white`}
        >
          <Image
            src={person.src}
            alt={person.alt}
            width={48}
            height={48}
            className="h-full w-full object-cover"
            sizes="48px"
            quality={100}
          />
        </span>
      ))}
    </div>
  );
}

export function FaqSection() {
  const t = useTranslations("faq");
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }, []);

  const faqs = FAQ_INDICES.map((i) => ({
    question: t(`q${i}`),
    answer: t(`a${i}`),
  }));

  return (
    <section
      id="faqs"
      aria-labelledby={`${baseId}-faq-title`}
      className="bg-white px-4 py-16 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id={`${baseId}-faq-title`}
          className="text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-[56px] lg:leading-tight"
        >
          {t("title")}
        </h2>

        <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            const triggerClass =
              "flex w-full items-center justify-between gap-4 py-5 text-left transition hover:text-gray-700";
            const triggerLabel = (
              <>
                <span className="pr-2 sm:text-3xl">{item.question}</span>
                <ChevronIcon open={open} className="text-gray-500" />
              </>
            );
            return (
              <div key={index} className="py-1">
                <h3 className="text-base font-medium text-gray-800 sm:text-lg">
                  {open ? (
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded="true"
                      aria-controls={panelId}
                      className={triggerClass}
                      onClick={() => toggle(index)}
                    >
                      {triggerLabel}
                    </button>
                  ) : (
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded="false"
                      aria-controls={panelId}
                      className={triggerClass}
                      onClick={() => toggle(index)}
                    >
                      {triggerLabel}
                    </button>
                  )}
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="pb-5 pr-10 text-sm leading-relaxed text-neutral-600 sm:text-base sm:pr-12">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div id="contact" className="mt-16 scroll-mt-24 text-center sm:mt-20">
          <TeamAvatarStack />
          <h3 className="mt-6 text-xl font-medium text-gray-800 sm:text-2xl">
            {t("stillTitle")}
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
            {t("stillBody")}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 sm:text-base"
            style={{ backgroundColor: FAQ_CYAN }}
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
