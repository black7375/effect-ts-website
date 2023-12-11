import {FC} from 'react'

export const NodeIcon: FC<{className: string}> = ({className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16" className={`fill-current ${className}`}>
      <path d="M7.33945 15.7484C7.13008 15.7484 6.91758 15.6922 6.7332 15.5859L4.80508 14.4453C4.51758 14.2828 4.6582 14.2266 4.75195 14.1953C5.13633 14.0609 5.21445 14.0328 5.62383 13.7984C5.66758 13.7734 5.72383 13.7828 5.76758 13.8109L7.24883 14.6891C7.30195 14.7203 7.37695 14.7203 7.42695 14.6891L13.1988 11.3578C13.252 11.3266 13.2863 11.2641 13.2863 11.2016V4.53906C13.2863 4.47344 13.252 4.41406 13.1957 4.37969L7.42695 1.05156C7.37383 1.02031 7.30195 1.02031 7.24883 1.05156L1.4832 4.38281C1.42695 4.41406 1.39258 4.47656 1.39258 4.54219V11.2016C1.39258 11.2641 1.42695 11.3266 1.4832 11.3547L3.06445 12.2672C3.92383 12.6953 4.44883 12.1922 4.44883 11.6828V5.10781C4.44883 5.01406 4.52383 4.94219 4.61758 4.94219H5.34883C5.43945 4.94219 5.51758 5.01406 5.51758 5.10781V11.6859C5.51758 12.8297 4.89258 13.4859 3.8082 13.4859C3.47383 13.4859 3.21133 13.4859 2.48008 13.1234L0.967578 12.2516C0.592578 12.0359 0.361328 11.6328 0.361328 11.1984V4.53906C0.361328 4.10781 0.592578 3.70156 0.967578 3.48594L6.7332 0.154687C7.09883 -0.0515625 7.5832 -0.0515625 7.9457 0.154687L13.7176 3.48906C14.0926 3.70469 14.3238 4.10781 14.3238 4.54219V11.2016C14.3238 11.6328 14.0926 12.0359 13.7176 12.2547L7.9457 15.5859C7.76133 15.6922 7.55195 15.7484 7.33945 15.7484ZM11.9988 9.18281C11.9988 7.93594 11.1551 7.60469 9.3832 7.37031C7.58945 7.13281 7.4082 7.01094 7.4082 6.59219C7.4082 6.24531 7.56133 5.78281 8.88945 5.78281C10.0738 5.78281 10.5113 6.03906 10.6926 6.83906C10.7082 6.91406 10.777 6.97031 10.8551 6.97031H11.6051C11.652 6.97031 11.6957 6.95156 11.727 6.91719C11.7582 6.88281 11.7738 6.83594 11.7707 6.78906C11.6551 5.41094 10.7395 4.77031 8.88945 4.77031C7.24258 4.77031 6.26133 5.46406 6.26133 6.62969C6.26133 7.89219 7.23945 8.24219 8.81758 8.39844C10.7082 8.58281 10.8551 8.86094 10.8551 9.23281C10.8551 9.87656 10.3363 10.1516 9.1207 10.1516C7.59258 10.1516 7.2582 9.76719 7.1457 9.00781C7.1332 8.92656 7.06445 8.86719 6.98008 8.86719H6.2332C6.13945 8.86719 6.06758 8.94219 6.06758 9.03281C6.06758 10.0047 6.5957 11.1641 9.12383 11.1641C10.9488 11.1609 11.9988 10.4391 11.9988 9.18281Z" />
    </svg>
  )
}