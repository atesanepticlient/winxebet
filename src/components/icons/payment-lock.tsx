import * as React from "react";

const PaymentLock = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
  >
    {/* Define the gradient */}
    <defs>
      <linearGradient id="tailwind-gradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>

    {/* Apply the gradient fill */}
    <path
      d="M28,11v-1c0-1.7-1.3-3-3-3H3c-1.7,0-3,1.3-3,3v1H28z"
      fill="url(#tailwind-gradient)"
    />
    <path
      d="M30,22.2V19c0-2.8-2.2-5-5-5s-5,2.2-5,5v3.2c-1.2,0.4-2,1.5-2,2.8v4c0,1.7,1.3,3,3,3h8c1.7,0,3-1.3,3-3v-4 C32,23.7,31.2,22.6,30,22.2z M22,19c0-1.7,1.3-3,3-3s3,1.3,3,3v3h-6V19z M26,28c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2c0-0.6,0.4-1,1-1 s1,0.4,1,1V28z"
      fill="url(#tailwind-gradient)"
    />
    <g>
      <path
        d="M16,25c0-1.1,0.4-2.2,1-3c0,0,0,0,0,0c-1.7,0-3-1.3-3-3s1.3-3,3-3c0.5,0,1,0.1,1.5,0.4c0,0,0,0,0,0 c0.6-1.4,1.6-2.6,2.9-3.4H0v10c0,1.7,1.3,3,3,3h13V25z M7,22H5c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S7.6,22,7,22z M10,19 H5c-0.6,0-1-0.4-1-1s0.4-1,1-1h5c0.6,0,1,0.4,1,1S10.6,19,10,19z"
        fill="url(#tailwind-gradient)"
      />
    </g>
  </svg>
);

export default PaymentLock;
