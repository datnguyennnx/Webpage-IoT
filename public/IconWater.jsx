import * as React from "react";

function IconWaterOutline(props) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="currentColor"
      height="8em"
      width="8em"
      {...props}
    >
      <path
        fillRule="evenodd"
        strokeMiterlimit={10}
        strokeWidth={26}
        d="M400 320c0 88.37-55.63 144-144 144s-144-55.63-144-144c0-94.83 103.23-222.85 134.89-259.88a12 12 0 0118.23 0C296.77 97.15 400 225.17 400 320z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M344 328a72 72 0 01-72 72"
      />
    </svg>
  );
}

export default IconWaterOutline;