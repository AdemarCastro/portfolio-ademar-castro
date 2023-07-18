import React, { useEffect } from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Webdesigner from './Webdesigner';
import Testerqa from './Testerqa';
import Dataanalystic from './Dataanalystic';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, Autoplay } from 'swiper/modules';

const Skills = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [navigation, setNavigation] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 576) {
        setSlidesPerView(1);
        setNavigation(false);
      } else if (width < 875) {
        setSlidesPerView(1);
        setNavigation(true);
      } else {
        setSlidesPerView(2);
        setNavigation(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Habilidades</h2>
      <span className="section__subtitle">Meu nível técnico</span>
      
      <Swiper
        slidesPerView={slidesPerView}
        cssMode={true}
        navigation={navigation}
        pagination={{
          clickable: true,
        }}
        scrollbar={{
          hide: true,
        }}
        mousewheel={true}
        keyboard={true}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, Autoplay]}
        className="mySwiper"
      >
        
          <div className="skills__container container grid">
            <SwiperSlide className='swiper__slide'>
              <Webdesigner />
            </SwiperSlide>
            <SwiperSlide className='swiper__slide'><Frontend /></SwiperSlide>
            <SwiperSlide className='swiper__slide'><Backend /></SwiperSlide>
            <SwiperSlide className='swiper__slide'><Testerqa /></SwiperSlide>
            <SwiperSlide  className='swiper__slide'><Dataanalystic /></SwiperSlide>
          </div>
        
      </Swiper>
    </section>
  )
}

export default Skills