import React from 'react'
import { useSwiper } from 'swiper/react'
import styles from './SwiperNav.module.scss'

const Arrow = (props: any) => (
  <svg
    width="181"
    height="47"
    viewBox="0 0 181 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="22"
      width="172"
      height="2.99998"
      // fill="#C9D0E1"
    />
    <path
      d="M12 12V12C12 18.0751 7.07513 23 0.999998 23L-1.33918e-06 23"
      // stroke="#C9D0E1"
      strokeWidth="3"
    />
    <path
      d="M12 35V35C12 28.9249 7.07513 24 1 24L6.11999e-07 24"
      // stroke="#C9D0E1"
      strokeWidth="3"
    />
  </svg>
)

const SwiperNav = () => {
  const swiper = useSwiper()
  return (
    <div className={styles.btns}>
      <button className={styles.btn} onClick={() => swiper.slidePrev()}>
        <Arrow className={styles.arrow} />
      </button>
      <button
        className={styles.btn}
        onClick={() => swiper.slideNext()}
        style={{ transform: 'rotate(180deg)' }}
      >
        <Arrow className={styles.arrow} />
      </button>
    </div>
  )
}

export default SwiperNav
