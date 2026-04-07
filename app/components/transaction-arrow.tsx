import * as React from "react";
import { SVGProps } from "react";
const TransactionArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#133CBA"
      d="m6.288 4.293-3.995 4-.084.095a1 1 0 0 0 .084 1.32l.095.083a1 1 0 0 0 1.32-.084L6 7.41V19l.007.117A1 1 0 0 0 7 20l.117-.007A1 1 0 0 0 8 19V7.417l2.293 2.29.095.084a1 1 0 0 0 1.32-1.5l-4.007-4-.094-.082a1 1 0 0 0-1.319.084ZM17 4.003l-.117.007a1 1 0 0 0-.883.993v11.58l-2.293-2.29-.095-.084a1 1 0 0 0-1.319 1.498l4.004 4 .094.084a1 1 0 0 0 1.32-.084l3.996-4 .084-.095a1 1 0 0 0-.084-1.32l-.095-.083a1 1 0 0 0-1.32.084L18 16.587V5.003l-.007-.116A1 1 0 0 0 17 4.003Z"
    />
  </svg>
);
export default TransactionArrowIcon;
