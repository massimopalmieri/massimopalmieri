import React from 'react'

export const Search = () => (
  <svg height={25} width={25} viewBox="0 0 50 50">
    <path fill="none" d="M0 0h50v50H0z" />
    <circle
      cx={21}
      cy={20}
      fill="none"
      r={16}
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <path
      fill="none"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M32.229 32.229L45.5 45.5"
    />
  </svg>
)

export const Status = () => (
  <svg height={25} width={25} viewBox="0 0 50 50">
    <path fill="none" d="M0 0h50v50H0z" />
    <path
      d="M25 10V1c13.256 0 24 10.745 24 24 0 13.256-10.744 24-24 24S1 38.256 1 25A23.933 23.933 0 0 1 8.022 8.035"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <path
      d="M27.121 27.122a3 3 0 0 1-4.242 0c-1.172-1.172-10.417-14.66-10.417-14.66s13.487 9.245 14.659 10.417a3 3 0 0 1 0 4.243z" />
  </svg>
)

export const Position = () => (
  <svg height={25} width={25} viewBox="0 0 100 100">
    <title />
    <path
      d="M89.13 28.69H67.76v-9.62a4 4 0 0 0-4-4h-27.5a4 4 0 0 0-4 4v9.62H10.87A5.89 5.89 0 0 0 5 34.56V89.1a5.89 5.89 0 0 0 5.87 5.9h78.26A5.89 5.89 0 0 0 95 89.1V34.56a5.89 5.89 0 0 0-5.87-5.87zM35 19.07a1.23 1.23 0 0 1 1.22-1.22h27.5a1.23 1.23 0 0 1 1.22 1.22v9.62H35zM10.87 31.5h78.26a3.06 3.06 0 0 1 3.05 3.05v19H59.84v-2.07A2.81 2.81 0 0 0 57 48.67H43a2.81 2.81 0 0 0-2.81 2.81v2.11H7.81v-19a3.06 3.06 0 0 1 3.06-3.09zM57 51.48v7H43v-7zm32.1 40.67H10.87a3.06 3.06 0 0 1-3.06-3.05V56.41h32.35v2.11A2.81 2.81 0 0 0 43 61.33h14a2.81 2.81 0 0 0 2.81-2.81v-2.11h32.38V89.1a3.06 3.06 0 0 1-3.06 3.06z" />
  </svg>
)

export const Location = () => (
  <svg height={25} width={25} viewBox="0 0 50 50">
    <path fill="none" d="M0 0h50v50H0z" />
    <path
      d="M40 17c0 13.604-15 31-15 31S10 30.928 10 17c0-8.285 6.715-15 15-15 8.284 0 15 6.715 15 15z"
      fill="none"
      stroke="#000"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.765}
    />
    <circle
      cx={25}
      cy={18}
      fill="none"
      r={6}
      stroke="#000"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.765}
    />
  </svg>
)

export const Chevron = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    height={30}
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    width={30}
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
)

export const Education = props => (
  <svg viewBox="0 0 100 100" {...props}>
    <title />
    <path d="M94.09 42.89L51.56 21.62a3.83 3.83 0 0 0-3.13 0L5.91 42.89a1.32 1.32 0 0 0 0 2.51l6.43 3.21H12v35.54a2.8 2.8 0 0 0-1.11 1.17l-2.78 5.62A2.81 2.81 0 0 0 10.62 95h5.63a2.81 2.81 0 0 0 2.52-4.07L16 85.32a2.8 2.8 0 0 0-1.11-1.17V49.86l7 3.52v17.38c0 3.94 3 7.6 8.42 10.31 5.28 2.64 12.28 4.09 19.71 4.09s14.43-1.45 19.71-4.09c5.43-2.71 8.42-6.38 8.42-10.31V53.38l16-8a1.32 1.32 0 0 0 0-2.51zM16.25 92.2h-5.63l2.81-5.62zm59.06-21.44c0 2.82-2.44 5.59-6.86 7.8C63.56 81 57 82.36 50 82.36S36.44 81 31.55 78.56c-4.42-2.21-6.86-5-6.86-7.8v-16l23.74 11.9a3.83 3.83 0 0 0 3.13 0l23.75-11.88zm-25-6.63a1 1 0 0 1-.32 0 1.12 1.12 0 0 1-.31 0l-40-20 40-20a1 1 0 0 1 .32 0 1.12 1.12 0 0 1 .31 0l40 20z" />
  </svg>
)
