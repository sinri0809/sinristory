import Animation from "animation/Animation";

const Sea = () => {

  return <div className="sea">
    <svg width="3456" height="2234" viewBox="0 0 3456 2234" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="3456" height="2234" fill="url(#paint0_linear_162_183)" />
      <g opacity="0.15" filter="url(#filter0_d_162_183)">
        <path className="wave1" fillRule="evenodd" clipRule="evenodd" d="M365.111 0H0V453.874C21.5666 434.401 42.3441 417.656 62.9976 401.011C135.733 342.393 206.929 285.016 305.626 114.067C329.935 71.9625 349.386 34.2727 365.111 0Z" fill="white">
        </path>
        <animateMotion
          dur="3.4s"
          repeatCount="indefinite"
          path="M-18 0L0 0, M0 0L-18 0" />
      </g>
      <g opacity="0.15" filter="url(#filter1_d_162_183)">
        <path fillRule="evenodd" clipRule="evenodd" d="M880.728 0L0 0V1810.3C13.1735 1790.19 26.8655 1767.92 41.1593 1743.17C151.291 1552.41 160.606 1450.15 169.675 1350.6C178.277 1256.16 186.658 1164.15 280.648 1001.36C379.275 830.531 457.032 781.176 533.107 732.889C605.962 686.645 677.275 641.38 763.902 491.339C854.983 333.582 858.604 240.803 862.121 150.685C863.989 102.819 865.828 55.7031 880.728 0Z" fill="white" />
        <animateMotion
          dur="3.0s"
          repeatCount="indefinite"
          path="M-18 0L0 0, M0 0L-18 0" />
      </g>
      <g opacity="0.2" filter="url(#filter2_d_162_183)">
        <path fillRule="evenodd" clipRule="evenodd" d="M1755.59 54.1192C1692.38 98.0008 1631.92 139.976 1565.36 255.271C1497.63 372.586 1493.4 444.865 1489.06 519.217C1484.46 597.96 1479.72 679.03 1399.27 818.385C1322.75 950.925 1261.14 991.713 1198.2 1033.38C1132.49 1076.89 1065.32 1121.37 978.194 1272.27C895.167 1416.07 886.387 1496.55 877.375 1579.16C867.873 1666.24 858.114 1755.69 760.829 1924.19C667.194 2086.37 604.211 2128.26 540.466 2170.65C513.457 2188.62 486.312 2206.67 456.641 2234H0V0H1828.3C1803.37 20.9499 1779.29 37.6685 1755.59 54.1192Z" fill="white" />
        <animateMotion
          dur="2.8s"
          repeatCount="indefinite"
          path="M-32 0L0 0, M0 0L-32 0" />
      </g>
      <g opacity="0.2" filter="url(#filter3_d_162_183)">
        <path fillRule="evenodd" clipRule="evenodd" d="M2025.05 120.943C1966.93 163.175 1911.33 203.572 1843.29 321.418C1774.06 441.328 1763.33 517.802 1752.28 596.47C1740.59 679.784 1728.55 765.559 1646.31 907.997C1568.1 1043.47 1505.09 1093.87 1440.72 1145.36C1373.51 1199.13 1304.81 1254.09 1215.76 1408.33C1130.9 1555.32 1121.96 1628.95 1112.79 1704.53C1103.12 1784.2 1093.18 1866.04 993.746 2038.27C932.738 2143.94 881.992 2198.22 834.745 2234H0V0H2157.9C2108.79 60.1048 2066.29 90.9855 2025.05 120.943Z" fill="white" />
        <animateMotion
          dur="2.6s"
          repeatCount="indefinite"
          // M x yLx y, -> Mx yLx y
          path="M-26 0L0 0, M0 0L-26 0"
        />
      </g>
      <defs>
        <filter id="filter0_d_162_183"
          x="-10" y="-15"
          filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="10" dy="5" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.370833 0 0 0 0 0.0432639 0 0 0 0 0.161189 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_162_183" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_162_183" result="shape" />
        </filter>
        <filter id="filter1_d_162_183" x="-10" y="-15" width="920.728" height="1850.3" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="10" dy="5" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.370833 0 0 0 0 0.0432639 0 0 0 0 0.161189 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_162_183" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_162_183" result="shape" />
        </filter>
        <filter id="filter2_d_162_183" x="-10" y="-15" width="1868.3" height="2274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="10" dy="5" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.6625 0 0 0 0 0.0386459 0 0 0 0 0.263233 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_162_183" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_162_183" result="shape" />
        </filter>
        <filter id="filter3_d_162_183" x="-10" y="-15" width="2197.9" height="2274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="10" dy="5" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.370833 0 0 0 0 0.0432639 0 0 0 0 0.161189 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_162_183" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_162_183" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_162_183" x1="0" y1="0" x2="3456" y2="2234" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF9929" />
          <stop offset="0.598958" stopColor="#FF7270" />
          <stop offset="1" stopColor="#FF517C" />
        </linearGradient>
      </defs>
    </svg>

    {/* <svg fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.15" filter="url(#filter0_d_162_113)" >
        <path x1={100} x2={100} y1={100} y2={100} fillRule="evenodd" clipRule="evenodd" d="M365.111 0L0 0L0 453.874C21.5666 434.401 42.3441 417.656 62.9976 401.011C135.733 342.393 206.929 285.016 305.626 114.067C329.935 71.9625 349.386 34.2727 365.111 0Z" fill="white" />
      </g>
      <g opacity="0.15" filter="url(#filter1_d_162_113)">
        <path fillRule="evenodd" clipRule="evenodd" d="M880.728 0L0 0V1810.3C13.1735 1790.19 26.8655 1767.92 41.1593 1743.17C151.291 1552.41 160.606 1450.15 169.675 1350.6C178.277 1256.16 186.658 1164.15 280.648 1001.36C379.275 830.531 457.032 781.176 533.107 732.889C605.962 686.645 677.275 641.38 763.902 491.339C854.983 333.582 858.604 240.803 862.121 150.685C863.989 102.819 865.828 55.7031 880.728 0Z" fill="white" />
      </g>
      <g opacity="0.2" filter="url(#filter2_d_162_113)">
        <path fillRule="evenodd" clipRule="evenodd" d="M1755.59 54.1192C1692.38 98.0008 1631.92 139.976 1565.36 255.271C1497.63 372.586 1493.4 444.865 1489.06 519.217C1484.46 597.96 1479.72 679.03 1399.27 818.385C1322.75 950.925 1261.14 991.713 1198.2 1033.38C1132.49 1076.89 1065.32 1121.37 978.194 1272.27C895.167 1416.07 886.387 1496.55 877.375 1579.16C867.873 1666.24 858.114 1755.69 760.829 1924.19C667.194 2086.37 604.211 2128.26 540.466 2170.65C513.457 2188.62 486.312 2206.67 456.641 2234H0V0H1828.3C1803.37 20.9499 1779.29 37.6685 1755.59 54.1192Z" fill="white" />
      </g>
      <g opacity="0.2" filter="url(#filter3_d_162_113)">
        <path fillRule="evenodd" clipRule="evenodd" d="M2025.05 120.943C1966.93 163.175 1911.33 203.572 1843.29 321.418C1774.06 441.328 1763.33 517.802 1752.28 596.47C1740.59 679.784 1728.55 765.559 1646.31 907.997C1568.1 1043.47 1505.09 1093.87 1440.72 1145.36C1373.51 1199.13 1304.81 1254.09 1215.76 1408.33C1130.9 1555.32 1121.96 1628.95 1112.79 1704.53C1103.12 1784.2 1093.18 1866.04 993.746 2038.27C932.738 2143.94 881.992 2198.22 834.745 2234H0V0H2157.9C2108.79 60.1048 2066.29 90.9855 2025.05 120.943Z" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_d_162_113"
          x="-10" y="-15"
          // width="405" height="494"
          width="1405" height="1494"
          filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="10" dy="5" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.370833 0 0 0 0 0.0432639 0 0 0 0 0.161189 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_162_113" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_162_113" result="shape" />
        </filter>
        <filter id="filter1_d_162_113" x="-10" y="-15" width="920.728" height="1850.3" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="10" dy="5" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.370833 0 0 0 0 0.0432639 0 0 0 0 0.161189 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_162_113" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_162_113" result="shape" />
        </filter>
        <filter id="filter2_d_162_113" x="-10" y="-15" width="1868.3" height="2274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="10" dy="5" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.6625 0 0 0 0 0.0386459 0 0 0 0 0.263233 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_162_113" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_162_113" result="shape" />
        </filter>
        <filter id="filter3_d_162_113" x="-10" y="-15" width="2197.9" height="2274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="10" dy="5" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.370833 0 0 0 0 0.0432639 0 0 0 0 0.161189 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_162_113" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_162_113" result="shape" />
        </filter>
      </defs>
    </svg> */}
  </div>
};

export default Sea;