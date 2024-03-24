import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import styles from './SliderSwip.module.css';
import { FaPlay, FaPause } from "react-icons/fa";



function SliderSwip({data2}) {
 const [isAutoplay, setIsAutoplay] = useState(true);
 const [activeSlide, setActiveSlide] = useState(0);
 const swiperMainRef = useRef(null);
 const swiperTwoRef = useRef(null);

 const toggleAutoplay = () => {
    if (swiperMainRef.current) {
     const swiper = swiperMainRef.current;
     if (isAutoplay) {
       swiper.autoplay.stop();
     } else {
       swiper.autoplay.start();
     }
     setIsAutoplay(!isAutoplay);
   }
 };

 const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
 };

 const handleSlideClick = (index) => {
    setActiveSlide(index);
    if (swiperMainRef.current) {
       swiperMainRef.current.slideTo(index);
    }
 };

 useEffect(() => {
    if (swiperTwoRef.current) {
      swiperTwoRef.current.slideTo(activeSlide);
    }
 }, [activeSlide]);

 return (
    <div className={`${styles.sliderbox} mt-5 col-12`}>
      <Swiper
        ref={swiperMainRef}
        className='swipermain'
        navigation={true} 
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
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
        <p
              className="play-pause-button text-primary"
              onClick={toggleAutoplay}
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                zIndex: 10,
              }}
            >
              {isAutoplay ? <FaPause /> : <FaPlay />}
            </p>
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
 );
}

export default SliderSwip;
