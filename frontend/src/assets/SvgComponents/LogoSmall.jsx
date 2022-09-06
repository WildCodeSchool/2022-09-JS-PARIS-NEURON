import React from "react";

// eslint-disable-next-line import/prefer-default-export
export function LogoSmall(props) {
  return (
    <svg
      viewBox="0 0 126.96853 171.444"
      height="50%"
      width="50%"
      xmlSpace="preserve"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <defs>
        <clipPath id="a" clipPathUnits="userSpaceOnUse">
          <path d="M0 128.583h95.226V0H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 171.444)">
        <path
          d="M0 0c0-26.296-21.317-47.613-47.613-47.613S-95.226-26.296-95.226 0s21.317 47.613 47.613 47.613S0 26.296 0 0"
          fill="#009847"
          fillOpacity={1}
          fillRule="nonzero"
          stroke="none"
          transform="translate(95.227 56.004)"
        />
        <path
          d="M0 0c-7.003 10.897-7.558 56.087.155 67.415.955 1.402 1.953 2.78 2.815 4.238 2.501 4.231 1.8 9.9-1.605 13.471-3.374 3.538-9.166 4.464-13.417 2.144-4.619-2.521-7.066-7.642-5.637-12.579.625-2.156 1.717-4.306 3.071-6.101 6.797-9.009 6.373-45.936 2.074-60.99-11.459 10.508-25.321 33.36-25.021 44.736l.021.658c1.486 3.965.575 8.687-2.399 11.807-2.446 2.565-6.161 3.749-9.64 3.327-3.683-.327-7.22-2.459-8.987-5.695-2.522-4.618-1.811-10.249 2.062-13.629.147-.128.311-.242.464-.366.041-.056.076-.118.118-.173 7.55-10.007 6.192-54.485.507-65.135-1.137-2.132-2.475-4.157-3.61-6.29-2.511-4.716-1.819-9.718 1.772-13.396 4.057-4.157 10.127-4.641 14.896-1.189 4.344 3.145 5.673 9.425 3.001 14.359-.575 1.062-1.294 2.045-1.948 3.063-6.049 9.412-7.282 44.389-2.538 61.052C-32.917 30.59-20.501 8.054-19.698-1.831c.196-2.408.166-4.835.365-7.243.438-5.325 3.726-9.158 8.735-10.31.124-.029.247-.044.371-.069 3.055-.67 6.343-.019 9.174 2.031 4.344 3.144 5.674 9.425 3.001 14.359C1.373-2.002.654-1.018 0 0"
          fill="#6a3085"
          fillOpacity={1}
          fillRule="nonzero"
          stroke="none"
          transform="translate(75.642 40.04)"
        />
      </g>
    </svg>
  );
}
