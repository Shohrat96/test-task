import React from 'react';

const GraphIcon=(props)=>{
    const {selected}=props;
    const color= selected? "#4D1ED3":"#A3A3A3";

    return (
        <svg width="29" height="29" viewBox="0 0 29 29" fill={ color } xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
            <path d="M12.0966 4.42366L10.2239 11.404C10.1085 11.8343 9.77009 12.1267 9.38762 12.1267H4.87722C4.39275 12.1267 4 11.6633 4 11.0915C4 10.5198 4.39275 10.0563 4.87722 10.0563H8.7452L11.2492 0.722752C11.5067 -0.23702 12.656 -0.242256 12.9198 0.715142L17.3984 16.972L19.5938 10.6965C19.7293 10.3091 20.0495 10.0563 20.4046 10.0563H24.1228C24.6073 10.0563 25 10.5198 25 11.0915C25 11.6633 24.6073 12.1267 24.1228 12.1267H20.9915L18.1114 20.3598C17.8001 21.2495 16.7185 21.2002 16.4663 20.2848L12.0966 4.42366Z" fill={color}/>
            </g>
            <defs>
            <filter id="filter0_d" x="0" y="0" width="29" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
        </svg>
    )
}

export default GraphIcon