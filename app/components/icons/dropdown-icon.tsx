import * as React from "react";
import { SVGProps } from "react";
const DropdownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="m5 7.5 5 5 5-5"
    />
  </svg>
);
export default DropdownIcon;
