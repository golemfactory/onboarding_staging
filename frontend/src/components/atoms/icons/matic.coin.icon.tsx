import { ComponentProps } from 'react'

export const MaticCoinIcon = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_bi_2427_15290)">
        <circle cx="12" cy="12" r="12" fill="#F6F8FC" />
        <circle cx="12" cy="12" r="11.25" stroke="#8247E5" strokeWidth="1.5" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-3 -3 22 23"
          fill="none"
        >
          <g clipPath="url(#clip0_2427_15291)">
            <path
              d="M11.4081 5.05081C11.15 4.87996 10.8179 4.87996 10.5227 5.05081L8.45695 6.46172L7.05521 7.35913L5.02618 8.77101C4.76803 8.94186 4.43588 8.94186 4.14074 8.77101L2.55512 7.65956C2.42027 7.56751 2.30849 7.43628 2.23082 7.27883C2.15315 7.12139 2.11229 6.94318 2.11226 6.76183V4.62338C2.11226 4.28137 2.25997 3.93936 2.55512 3.72564L4.14074 2.65706C4.39889 2.48589 4.73103 2.48589 5.02618 2.65706L6.61179 3.76851C6.74668 3.86052 6.85849 3.99174 6.93616 4.14919C7.01384 4.30665 7.05468 4.48488 7.05466 4.66625V6.07684L8.4564 5.13623V3.68309C8.4564 3.34108 8.30896 2.99907 8.01381 2.78535L5.0629 0.776812C4.80475 0.605646 4.47288 0.605646 4.17773 0.776812L1.15254 2.8279C0.857396 2.99907 0.709961 3.34108 0.709961 3.68309V7.70114C0.709961 8.04315 0.857396 8.3842 1.15254 8.59888L4.14074 10.6084C4.39889 10.7796 4.73103 10.7796 5.02618 10.6084L7.05521 9.24035L8.45695 8.30006L10.486 6.93202C10.7441 6.76118 11.0763 6.76118 11.3714 6.93202L12.957 8.00093C13.0921 8.09302 13.2041 8.22444 13.2818 8.38214C13.3595 8.53984 13.4003 8.71834 13.4002 8.89995V11.0371C13.4002 11.3791 13.2527 11.7211 12.9576 11.9348L11.4081 13.0037C11.15 13.1746 10.8179 13.1746 10.5227 13.0037L8.93709 11.9348C8.80228 11.8428 8.69054 11.7115 8.61291 11.5541C8.53529 11.3966 8.49448 11.2184 8.49451 11.0371V9.66778L7.09193 10.6084V12.019C7.09193 12.361 7.23964 12.703 7.53479 12.9167L10.5227 14.9259C10.7811 15.0971 11.113 15.0971 11.4081 14.9259L14.3963 12.9164C14.5312 12.8243 14.6429 12.6931 14.7205 12.5356C14.7981 12.3782 14.839 12.2 14.8389 12.0187V7.95709C14.8389 7.61508 14.6915 7.27307 14.3963 7.05935L11.4081 5.05081Z"
              fill="#8247E5"
            />
          </g>
          <defs>
            <clipPath id="clip0_2427_15291">
              <rect
                width="14.129"
                height="14.406"
                fill="white"
                transform="translate(0.709961 0.648438)"
              />
            </clipPath>
          </defs>
        </svg>
      </g>
      <defs>
        <filter
          id="filter0_bi_2427_15290"
          x="-400"
          y="-400"
          width="824"
          height="824"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="200" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2427_15290"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2427_15290"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-8" dy="-3" />
          <feGaussianBlur stdDeviation="16.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0941176 0 0 0 0 0.117647 0 0 0 0 0.662745 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_2427_15290"
          />
        </filter>
      </defs>
    </svg>
  )
}
