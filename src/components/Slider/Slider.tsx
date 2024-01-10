'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import React from 'react'

import styles from './Slider.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import SwiperNav from '../SwiperNav/SwiperNav'

const Slider = ({ slides }: any) => {
  return (
    <div>
      <Swiper spaceBetween={0} slidesPerView={'auto'} modules={[Navigation]}>
        {slides.map((slide: any) => (
          <SwiperSlide
            key={slide.id}
            style={
              slide.title.length < 35 ? { width: '344px' } : { width: '688px' }
            }
          >
            <a href="#" className={styles.container}>
              <img
                src={slide.img}
                alt=""
                className={[styles.img, slide.types].join(' ')}
              />
              <h2 className={styles.header}>{slide.title}</h2>
              <div className={styles.subheader}>{slide.date}</div>
            </a>
          </SwiperSlide>
        ))}

        <div className="container">
          <SwiperNav />
        </div>
      </Swiper>
    </div>
  )
}

export default Slider
