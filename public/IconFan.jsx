import * as React from "react"

function IconFan(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill= {props.value ? "#b23ebd" : "currentColor"}
      height="8em"
      width="8em"
      {...props}
    >
    <path 
      fill="evenodd"
      d="M258.6 0c-1.7 0-3.4.1-5.1.5C168 17 115.6 102.3 130.5 189.3c2.9 17 8.4 32.9 15.9 47.4L32 224h-2.6C13.2 224 0 237.2 0 253.4c0 1.7.1 3.4.5 5.1C17 344 102.3 396.4 189.3 381.5c17-2.9 32.9-8.4 47.4-15.9L224 480v2.6c0 16.2 13.2 29.4 29.4 29.4 1.7 0 3.4-.1 5.1-.5 85.5-16.5 137.9-101.8 123-188.8-2.9-17-8.4-32.9-15.9-47.4L480 288h2.6c16.2 0 29.4-13.2 29.4-29.4 0-1.7-.1-3.4-.5-5.1-16.5-85.5-101.8-137.9-188.8-123-17 2.9-32.9 8.4-47.4 15.9L288 32v-2.6C288 13.2 274.8 0 258.6 0zM256 288c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
    {props.value ? <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="0.4s" additive="sum" repeatCount="indefinite" /> : null}

    </svg>
    
  )
}

export default IconFan;