import * as React from "react";
import { SVGProps } from "react";

export type WalletIconProps = SVGProps<SVGSVGElement> & {
  /**
   * Square edge length in CSS pixels; sets `width` and `height` when those props are omitted.
   * @default 36
   */
  size?: number;
};

const WalletIcon = ({
  size = 36,
  width,
  height,
  className,
  ...props
}: WalletIconProps) => {
  const w = width ?? size;
  const h = height ?? size;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      width={w}
      height={h}
      fill="none"
      className={className}
      {...props}
    >
      <rect
        width={34.2}
        height={34.2}
        x={0.9}
        y={0.9}
        stroke="#133CBA"
        strokeWidth={1.8}
        rx={17.1}
      />
      <path
        stroke="#133CBA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M27 18a2.25 2.25 0 0 0-2.25-2.25H21a3 3 0 0 1-6 0h-3.75A2.25 2.25 0 0 0 9 18m18 0v6a2.25 2.25 0 0 1-2.25 2.25h-13.5A2.25 2.25 0 0 1 9 24v-6m18 0v-3M9 18v-3m18 0a2.25 2.25 0 0 0-2.25-2.25h-13.5A2.25 2.25 0 0 0 9 15m18 0v-3a2.25 2.25 0 0 0-2.25-2.25h-13.5A2.25 2.25 0 0 0 9 12v3"
      />
    </svg>
  );
};

export default WalletIcon;
