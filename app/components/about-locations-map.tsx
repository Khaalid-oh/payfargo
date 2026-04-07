"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useId, useState } from "react";

const BRAND = "#133CBA";

const MAP_SRC = "/images/world-map.svg";
const MAP_VIEWBOX_W = 1025;
const MAP_VIEWBOX_H = 483;

type MapPin = {
  id: string;
  leftPct: number;
  topPct: number;
  tooltip?: boolean;
};

const MAP_PINS: MapPin[] = [
  { id: "nyc", leftPct: 27, topPct: 35 },
  { id: "la", leftPct: 18, topPct: 39 },
  { id: "sao", leftPct: 32, topPct: 73 },
  { id: "london", leftPct: 48, topPct: 31 },
  { id: "frankfurt", leftPct: 50, topPct: 32 },
  { id: "lagos", leftPct: 49, topPct: 56 },
  { id: "nairobi", leftPct: 53, topPct: 52 },
  { id: "mumbai", leftPct: 63, topPct: 46 },
  { id: "singapore", leftPct: 72, topPct: 54 },
  { id: "melbourne", leftPct: 84, topPct: 82, tooltip: true },
];

export function AboutLocationsMap() {
  const t = useTranslations("aboutPage");
  const mapLabelId = useId();
  const [activeId, setActiveId] = useState<string | null>(null);

  const showTooltip = useCallback((id: string, hasTooltip: boolean) => {
    if (hasTooltip) setActiveId(id);
  }, []);

  const hideTooltip = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <div className="w-full">
      <div
        className="relative mx-auto w-full max-w-[1025px] overflow-x-auto overflow-y-visible pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-labelledby={mapLabelId}
      >
        <span id={mapLabelId} className="sr-only">
          {t("locationsTitle")}
        </span>
        <div
          className="relative w-full min-w-[min(100%,280px)] shrink-0"
          style={{
            aspectRatio: `${MAP_VIEWBOX_W} / ${MAP_VIEWBOX_H}`,
          }}
        >
          <Image
            src={MAP_SRC}
            alt=""
            fill
            className="pointer-events-none object-contain object-center select-none"
            sizes="(max-width: 768px) calc(100vw - 2rem), (max-width: 1280px) 90vw, 1025px"
            priority={false}
          />
          {MAP_PINS.map((pin) => {
            const isActive = activeId === pin.id && pin.tooltip;
            return (
              <div
                key={pin.id}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${pin.leftPct}%`, top: `${pin.topPct}%` }}
              >
                {pin.tooltip && isActive ? (
                  <div
                    className="absolute bottom-[calc(100%+0.75rem)] left-1/2 z-20 w-[min(calc(100vw-2rem),7rem)] overflow-visible sm:w-[min(calc(100vw-2rem),14rem)] -translate-x-1/2 rounded-md bg-white px-2 pb-3 pt-2 text-center shadow-[0_12px_40px_-12px_rgba(15,23,42,0.25)] ring-1 ring-black/5 sm:px-4 sm:pb-5 sm:pt-4"
                    onMouseEnter={() => showTooltip(pin.id, !!pin.tooltip)}
                    onMouseLeave={hideTooltip}
                  >
                    <Image
                      src="/images/aus_flag.png"
                      alt=""
                      width={32}
                      height={32}
                      className="mx-auto h-4 sm:h-8 w-4 sm:w-8 rounded-full"
                      quality={100}
                    />
                    <p className="mt-3 text-[8px] font-semibold text-neutral-900 sm:text-sm">
                      {t("tooltipCity")}
                    </p>
                    <p className="mt-1 text-[8px] leading-relaxed text-neutral-500 sm:text-sm">
                      {t("tooltipLine1")}
                    </p>
                    <p className="text-[8px] leading-relaxed text-neutral-500 sm:text-sm">
                      {t("tooltipLine2")}
                    </p>
                    <span
                      className="pointer-events-none absolute left-1/2 top-full z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-r border-b border-black/[0.08] bg-white shadow-[0_2px_4px_-2px_rgba(15,23,42,0.12)] sm:h-3 sm:w-3"
                      aria-hidden
                    />
                  </div>
                ) : null}
                <button
                  type="button"
                  className="relative flex h-3 w-3 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#133CBA] focus-visible:ring-offset-1 focus-visible:ring-offset-white sm:h-5 sm:w-5 md:h-8 md:w-8 md:focus-visible:ring-offset-2"
                  aria-label={
                    pin.tooltip ? t("tooltipPinLabel") : t("mapPinLabel")
                  }
                  {...(pin.tooltip ? { "aria-expanded": isActive } : {})}
                  onMouseEnter={() => showTooltip(pin.id, !!pin.tooltip)}
                  onMouseLeave={hideTooltip}
                  onFocus={() => showTooltip(pin.id, !!pin.tooltip)}
                  onBlur={hideTooltip}
                >
                  <span
                    className="absolute inline-flex h-3 w-3 animate-ping rounded-full opacity-70 md:h-5 md:w-5"
                    style={{ backgroundColor: `${BRAND}55` }}
                    aria-hidden
                  />
                  <span
                    className="relative z-1 h-1.5 w-1.5 rounded-full shadow-[0_0_0_2px_rgba(19,60,186,0.28)] md:h-2 md:w-2 md:shadow-[0_0_0_4px_rgba(19,60,186,0.28)]"
                    style={{ backgroundColor: BRAND }}
                    aria-hidden
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
