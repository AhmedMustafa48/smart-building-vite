import React from 'react';

const SettingIcon = ({ isActive, size =32 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="activeGradient" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#84DFFF" />
          <stop offset="1" stopColor="#0094E3" />
        </linearGradient>
        <linearGradient id="inactiveGradient" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CCCCCC" />
          <stop offset="1" stopColor="#EEEEEE" />
        </linearGradient>
      </defs>
      <g clipPath="url(#clip0_53_64)">
        <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              stroke={`url(#${isActive ? 'activeGradient' : 'inactiveGradient'})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25.8673 20.0002C25.6898 20.4023 25.6369 20.8484 25.7153 21.2809C25.7937 21.7135 25.9999 22.1126 26.3073 22.4268L26.3873 22.5068C26.6353 22.7545 26.8319 23.0486 26.9661 23.3723C27.1003 23.6961 27.1694 24.0431 27.1694 24.3935C27.1694 24.7439 27.1003 25.0909 26.9661 25.4147C26.8319 25.7384 26.6353 26.0325 26.3873 26.2802C26.1397 26.5281 25.8456 26.7248 25.5218 26.859C25.1981 26.9932 24.8511 27.0623 24.5007 27.0623C24.1502 27.0623 23.8032 26.9932 23.4795 26.859C23.1557 26.7248 22.8616 26.5281 22.614 26.2802L22.534 26.2002C22.2197 25.8928 21.8206 25.6866 21.3881 25.6082C20.9556 25.5297 20.5095 25.5827 20.1073 25.7602C19.713 25.9292 19.3766 26.2098 19.1397 26.5675C18.9028 26.9253 18.7757 27.3444 18.774 27.7735V28.0002C18.774 28.7074 18.493 29.3857 17.9929 29.8858C17.4928 30.3859 16.8146 30.6668 16.1073 30.6668C15.4001 30.6668 14.7218 30.3859 14.2217 29.8858C13.7216 29.3857 13.4407 28.7074 13.4407 28.0002V27.8802C13.4303 27.4388 13.2875 27.0108 13.0307 26.6518C12.7739 26.2927 12.415 26.0192 12.0007 25.8668C11.5985 25.6893 11.1524 25.6364 10.7199 25.7148C10.2873 25.7932 9.88822 25.9994 9.57398 26.3068L9.49398 26.3868C9.24632 26.6348 8.95222 26.8315 8.62849 26.9657C8.30476 27.0999 7.95776 27.1689 7.60732 27.1689C7.25688 27.1689 6.90987 27.0999 6.58614 26.9657C6.26242 26.8315 5.96831 26.6348 5.72065 26.3868C5.47271 26.1392 5.27602 25.8451 5.14183 25.5213C5.00763 25.1976 4.93855 24.8506 4.93855 24.5002C4.93855 24.1497 5.00763 23.8027 5.14183 23.479C5.27602 23.1553 5.47271 22.8612 5.72065 22.6135L5.80065 22.5335C6.10803 22.2193 6.31423 21.8201 6.39266 21.3876C6.47108 20.9551 6.41814 20.509 6.24065 20.1068C6.07163 19.7125 5.79099 19.3761 5.43327 19.1392C5.07555 18.9023 4.65637 18.7752 4.22732 18.7735H4.00065C3.29341 18.7735 2.61513 18.4925 2.11503 17.9924C1.61494 17.4924 1.33398 16.8141 1.33398 16.1068C1.33398 15.3996 1.61494 14.7213 2.11503 14.2212C2.61513 13.7211 3.29341 13.4402 4.00065 13.4402H4.12065C4.56198 13.4298 4.98999 13.287 5.34905 13.0302C5.70811 12.7734 5.98161 12.4145 6.13398 12.0002C6.31147 11.598 6.36442 11.1519 6.28599 10.7194C6.20757 10.2869 6.00137 9.88773 5.69398 9.5735L5.61398 9.4935C5.36605 9.24583 5.16936 8.95173 5.03516 8.628C4.90096 8.30428 4.83189 7.95727 4.83189 7.60683C4.83189 7.25639 4.90096 6.90938 5.03516 6.58566C5.16936 6.26193 5.36605 5.96782 5.61398 5.72016C5.86165 5.47223 6.15575 5.27553 6.47948 5.14134C6.80321 5.00714 7.15021 4.93807 7.50065 4.93807C7.85109 4.93807 8.1981 5.00714 8.52183 5.14134C8.84555 5.27553 9.13966 5.47223 9.38732 5.72016L9.46732 5.80016C9.78156 6.10755 10.1807 6.31374 10.6132 6.39217C11.0457 6.47059 11.4918 6.41765 11.894 6.24016H12.0007C12.395 6.07115 12.7313 5.7905 12.9682 5.43278C13.2051 5.07506 13.3323 4.65588 13.334 4.22683V4.00016C13.334 3.29292 13.6149 2.61464 14.115 2.11454C14.6151 1.61445 15.2934 1.3335 16.0007 1.3335C16.7079 1.3335 17.3862 1.61445 17.8863 2.11454C18.3864 2.61464 18.6673 3.29292 18.6673 4.00016V4.12016C18.669 4.54921 18.7962 4.9684 19.0331 5.32612C19.27 5.68384 19.6063 5.96448 20.0007 6.1335C20.4028 6.31098 20.8489 6.36393 21.2814 6.2855C21.714 6.20708 22.1131 6.00088 22.4273 5.6935L22.5073 5.6135C22.755 5.36556 23.0491 5.16887 23.3728 5.03467C23.6965 4.90047 24.0435 4.8314 24.394 4.8314C24.7444 4.8314 25.0914 4.90047 25.4152 5.03467C25.7389 5.16887 26.033 5.36556 26.2807 5.6135C26.5286 5.86116 26.7253 6.15526 26.8595 6.47899C26.9937 6.80272 27.0627 7.14972 27.0627 7.50016C27.0627 7.8506 26.9937 8.19761 26.8595 8.52134C26.7253 8.84507 26.5286 9.13917 26.2807 9.38683L26.2007 9.46683C25.8933 9.78107 25.6871 10.1802 25.6086 10.6127C25.5302 11.0452 25.5832 11.4913 25.7607 11.8935V12.0002C25.9297 12.3945 26.2103 12.7309 26.568 12.9678C26.9258 13.2047 27.3449 13.3318 27.774 13.3335H28.0007C28.7079 13.3335 29.3862 13.6144 29.8863 14.1145C30.3864 14.6146 30.6673 15.2929 30.6673 16.0002C30.6673 16.7074 30.3864 17.3857 29.8863 17.8858C29.3862 18.3859 28.7079 18.6668 28.0007 18.6668H27.8807C27.4516 18.6685 27.0324 18.7957 26.6747 19.0326C26.317 19.2695 26.0363 19.6058 25.8673 20.0002Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              stroke={`url(#${isActive ? 'activeGradient' : 'inactiveGradient'})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_53_64">
          <rect width="32" height="32" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export default SettingIcon;
