import React from "react";

function SmallIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="196"
      height="196"
      fill="none"
      viewBox="0 0 196 196"
    >
      <g filter="url(#filter0_d_1_28)">
        <rect
          width="108"
          height="108"
          x="44"
          y="14"
          fill="#010205"
          rx="54"
        ></rect>
      </g>
      <path
        stroke="#A8D67B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M121 57l-19 19-10-10-15 15"
      ></path>
      <path
        stroke="#A8D67B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M109 57h12v12"
      ></path>
      <defs>
        <filter
          id="filter0_d_1_28"
          width="195.494"
          height="195.494"
          x="0.253"
          y="0.329"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            radius="6.835"
            result="effect1_dropShadow_1_28"
          ></feMorphology>
          <feOffset dy="30.076"></feOffset>
          <feGaussianBlur stdDeviation="25.291"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.44 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_28"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_28"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default SmallIcon;