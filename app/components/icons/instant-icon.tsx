import * as React from "react";
import { SVGProps } from "react";
const InstantIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#133CBA"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="m8 18.667 9.333-16v10.666H24l-9.333 16V18.667H8Z"
    />
  </svg>
);
export default InstantIcon;
