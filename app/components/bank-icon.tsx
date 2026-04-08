import * as React from "react";
import { SVGProps } from "react";

export type BankIconProps = SVGProps<SVGSVGElement> & {
  /**
   * Square edge length in CSS pixels; sets `width` and `height` when those props are omitted.
   * @default 36
   */
  size?: number;
};

const BankIcon = ({
  size = 36,
  width,
  height,
  className,
  ...props
}: BankIconProps) => {
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
        fill="#133CBA"
        d="M11 22v-5c0-.283.096-.52.288-.712A.973.973 0 0 1 12 16c.283 0 .52.095.713.288A.96.96 0 0 1 13 17v5a.968.968 0 0 1-.288.713A.964.964 0 0 1 12 23a.973.973 0 0 1-.712-.288A.965.965 0 0 1 11 22Zm6 0v-5c0-.283.096-.52.288-.712A.973.973 0 0 1 18 16c.283 0 .52.095.713.288A.96.96 0 0 1 19 17v5a.968.968 0 0 1-.288.713A.964.964 0 0 1 18 23a.973.973 0 0 1-.712-.288A.965.965 0 0 1 17 22Zm-8 5a.965.965 0 0 1-.712-.288A.972.972 0 0 1 8 26c0-.283.095-.52.288-.712A.97.97 0 0 1 9 25h18c.283 0 .521.096.713.288.192.192.288.43.287.712 0 .283-.097.52-.288.713A.957.957 0 0 1 27 27H9Zm14-5v-5c0-.283.096-.52.288-.712A.973.973 0 0 1 24 16c.283 0 .52.095.713.288A.96.96 0 0 1 25 17v5a.968.968 0 0 1-.288.713A.964.964 0 0 1 24 23a.973.973 0 0 1-.712-.288A.965.965 0 0 1 23 22Zm4-8H8.9a.87.87 0 0 1-.638-.262A.863.863 0 0 1 8 13.1v-.55c0-.183.046-.342.138-.475.092-.133.213-.242.362-.325l8.6-4.3c.283-.133.583-.2.9-.2.317 0 .617.067.9.2l8.55 4.275a.865.865 0 0 1 .413.375c.092.167.138.342.137.525V13a.97.97 0 0 1-.287.713A.963.963 0 0 1 27 14Zm-14.55-2h11.1L18 9.25 12.45 12Z"
      />
    </svg>
  );
};

export default BankIcon;
