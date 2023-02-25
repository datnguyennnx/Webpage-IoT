import * as React from "react";

function IconTemperatureCelsius(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="8em"
      width="8em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M8 8 A2 2 0 0 1 6 10 A2 2 0 0 1 4 8 A2 2 0 0 1 8 8 z" />
      <path d="M20 9a3 3 0 00-3-3h-1a3 3 0 00-3 3v6a3 3 0 003 3h1a3 3 0 003-3" />
    </svg>
  );
}

export default IconTemperatureCelsius;