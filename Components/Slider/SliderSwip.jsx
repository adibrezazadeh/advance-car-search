import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import styles from './SliderSwip.module.css';

function SliderSwip({data2}) {
 const [activeSlide, setActiveSlide] = useState(0);
 return (
    <div className={`${styles.sliderbox} mt-5 col-12`}>
      <Swiper
        className='swipermain'
        navigation={true} 
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        initialSlide={activeSlide}
      >
        {data2.map((item, index) => (
          <SwiperSlide key={index} >
            <img
              src={`https://image123.azureedge.net${item.media_src}`}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: 'auto' }}
            />
          </SwiperSlide>
        ))}
        </Swiper>
      <Swiper
        className='mt-3 swipertwo'
        navigation={true} 
        modules={[Navigation]}
        spaceBetween={25}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        initialSlide={activeSlide}
        >
        {data2.map((item, index) => (
          <SwiperSlide key={index} >
            <img
            className={`${index===activeSlide?styles.activeImage:""} `}
              onClick={() => setActiveSlide(index)}
              src={`https://image123.azureedge.net${item.media_src}`}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: 'auto' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SliderSwip;
