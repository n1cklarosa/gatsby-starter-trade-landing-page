import React from "react"
import SwiperCore, { Pagination } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/effect-fade/effect-fade.scss"

import styles from "./testimonials.module.css"

SwiperCore.use([Pagination])

const Testimonials = ({ testimonials, title }) => {
  return (
    <div className={styles.swiper__wrapper}>
      <div className={styles.swiper__inner}>
        <h2>{title}</h2>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className={styles.swiper__slide}>
            <div className={styles.swiper__inner}>
              <blockquote>{testimonial.quote}</blockquote>
              <div className={styles.slider__author}>
                {testimonial.name} - <strong>{testimonial.company}</strong>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonials
