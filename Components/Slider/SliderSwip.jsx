import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay ,Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import styles from './SliderSwip.module.css';

function SliderSwip({data2}) {
 const [activeSlide, setActiveSlide] = useState(0);
 const swiperMainRef = useRef(null);
 const swiperTwoRef = useRef(null);

 const handleSlideClick = (index) => {
   setActiveSlide(index);
   if (swiperMainRef.current) {
     swiperMainRef.current.slideTo(index);
   }
 };

 return (
    <div className={`${styles.sliderbox} mt-5 col-12`}>
      <Swiper
        ref={swiperMainRef}
        className='swipermain'
        navigation={true} 
        modules={[Autoplay,Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => {
          // Ensure the Swiper instance is correctly set
          swiperMainRef.current = swiper;
        }}
        initialSlide={activeSlide}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true, // Stop autoplay after user interaction
          reverseDirection: false, // Autoplay direction
        }}
      >
        {data2.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={`https://image123.azureedge.net${item.media_src}`}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: 'auto' }}
            />
          </SwiperSlide>
        ))}
        </Swiper>
      <Swiper
        ref={swiperTwoRef}
        className='mt-3 swipertwo'
        navigation={true} 
        modules={[Navigation]}
        spaceBetween={25}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => {
          swiperTwoRef.current = swiper;
        }}
        initialSlide={activeSlide}
        >
        {data2.map((item, index) => (
          <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
            <img
              className={`${index===activeSlide?styles.activeImage:""} `}
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
