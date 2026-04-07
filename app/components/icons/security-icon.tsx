import * as React from "react";
import { SVGProps } from "react";
const SecurityIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#133CBA"
      d="M16 27.95c-2.679-.796-4.904-2.419-6.676-4.869-1.771-2.45-2.657-5.21-2.657-8.281V7.59L16 4.102l9.333 3.486v7.21c0 3.071-.885 5.831-2.657 8.28-1.771 2.45-3.997 4.073-6.676 4.87Zm0-1.415c2.311-.734 4.222-2.2 5.733-4.4C23.244 19.934 24 17.49 24 14.8V8.5l-8-2.973L8 8.5v6.3c0 2.689.756 5.133 2.267 7.333 1.51 2.2 3.422 3.668 5.733 4.402Z"
    />
  </svg>
);
export default SecurityIcon;
