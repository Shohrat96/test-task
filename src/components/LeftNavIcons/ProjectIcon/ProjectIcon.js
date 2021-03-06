import React from "react";

const ProjectIcon = (props) => {
  const { selected } = props;
  const color = selected ? "#4D1ED3" : "#A3A3A3";
  return (
    <svg
      width="29"
      height="27"
      viewBox="0 0 29 27"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path
          d="M4 2.52532C4 1.13062 5.13062 0 6.52532 0H11.8254C12.4126 0 12.9503 0.329068 13.2174 0.851971L14.2222 2.81831C14.2427 2.85853 14.2841 2.88384 14.3293 2.88384H22.6392C23.9011 2.88384 24.9241 3.90679 24.9241 5.16865V17.1962C24.9241 18.1924 24.1165 19 23.1203 19H6.28481C5.02294 19 4 17.9771 4 16.7152V2.52532ZM11.7518 1.68354H6.52532C6.06042 1.68354 5.68354 2.06042 5.68354 2.52532V16.7152C5.68354 17.0473 5.95274 17.3165 6.28481 17.3165H23.1203C23.1867 17.3165 23.2405 17.2626 23.2405 17.1962V5.16865C23.2405 4.83659 22.9713 4.56739 22.6392 4.56739H14.3293C13.6517 4.56739 13.0313 4.18769 12.723 3.58435L11.7518 1.68354Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="28.9241"
          height="27"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ProjectIcon;
