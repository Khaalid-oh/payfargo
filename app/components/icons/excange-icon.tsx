import * as React from "react";
import { SVGProps } from "react";
const ExchangeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#133CBA"
      strokeLinecap="round"
      strokeWidth={1.333}
      d="M23.676 9.59a10 10 0 0 0-17.477 8.405m19.534-4.296a10 10 0 0 1-17.581 8.5"
    />
    <path
      stroke="#133CBA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M24.167 7.333V10H21.5m-11 12H7.833v2.667"
    />
    <path
      stroke="#133CBA"
      strokeLinecap="round"
      strokeWidth={1.333}
      d="M16 10.667v10.666"
    />
    <path
      stroke="#133CBA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M18.413 13.536c-.16-.707-1.07-1.493-2.405-1.493-1.335 0-2.36.866-2.36 1.96 0 2.485 4.948 1.208 4.948 4.093 0 1.041-1.253 1.925-2.587 1.925-1.333 0-2.258-.82-2.532-1.698"
    />
  </svg>
);
export default ExchangeIcon;
