import * as React from "react";
import { SVGProps } from "react";
const TrendIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#133CBA"
      d="M13.75 9a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 .75.75v3.5a.75.75 0 1 1-1.5 0v-1.69l-4.72 4.72a.75.75 0 0 1-1.06 0L9 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19H14.5a.75.75 0 0 1-.75-.75Z"
    />
  </svg>
);
export default TrendIcon;
