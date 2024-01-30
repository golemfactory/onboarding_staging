import { motion } from 'framer-motion'
import style from './spinner.module.css'

export const LoadingSpinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      className={style.spinner}
    >
      <path
        d="M52 28C52 31.1517 51.3792 34.2726 50.1731 37.1844C48.967 40.0962 47.1992 42.742 44.9706 44.9706C42.742 47.1992 40.0962 48.967 37.1844 50.1731C34.2726 51.3792 31.1517 52 28 52C24.8483 52 21.7274 51.3792 18.8156 50.1731C15.9038 48.967 13.258 47.1992 11.0294 44.9706C8.80083 42.742 7.033 40.0962 5.82689 37.1844C4.62078 34.2726 4 31.1517 4 28C4 24.8483 4.62078 21.7274 5.82689 18.8156C7.03301 15.9038 8.80083 13.258 11.0294 11.0294C13.258 8.80083 15.9038 7.033 18.8156 5.82689C21.7274 4.62078 24.8483 4 28 4C31.1517 4 34.2726 4.62078 37.1844 5.82689C40.0962 7.03301 42.742 8.80083 44.9706 11.0294C47.1992 13.258 48.967 15.9038 50.1731 18.8156C51.3792 21.7274 52 24.8483 52 28L52 28Z"
        stroke="#C4D2F8"
        strokeWidth="8"
      />
      <path
        d="M52 28C52 31.1517 51.3792 34.2726 50.1731 37.1844C48.967 40.0962 47.1992 42.742 44.9706 44.9706C42.742 47.1992 40.0962 48.967 37.1844 50.1731C34.2726 51.3792 31.1517 52 28 52C24.8483 52 21.7274 51.3792 18.8156 50.1731C15.9038 48.967 13.258 47.1992 11.0294 44.9706C8.80083 42.742 7.033 40.0962 5.82689 37.1844C4.62078 34.2726 4 31.1517 4 28C4 24.8483 4.62078 21.7274 5.82689 18.8156C7.03301 15.9038 8.80083 13.258 11.0294 11.0294C13.258 8.80083 15.9038 7.033 18.8156 5.82689C21.7274 4.62078 24.8483 4 28 4C31.1517 4 34.2726 4.62078 37.1844 5.82689C40.0962 7.03301 42.742 8.80083 44.9706 11.0294C47.1992 13.258 48.967 15.9038 50.1731 18.8156C51.3792 21.7274 52 24.8483 52 28L52 28Z"
        stroke="url(#paint0_linear_1223_10591)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1223_10591"
          x1="28"
          y1="4"
          x2="28"
          y2="52"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#181EA9" />
          <stop offset="1" stopColor="#E5EBFF" />
        </linearGradient>
      </defs>
    </svg>
  )
}