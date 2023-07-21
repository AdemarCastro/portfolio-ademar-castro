import React, { useEffect } from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Webdesigner from './Webdesigner';
import Testerqa from './Testerqa';
import Dataanalystic from './Dataanalystic';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { mouseDownHandler } from '../touchpad/Touchpad';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Mousewheel, Keyboard, Scrollbar, Autoplay} from 'swiper/modules';

const Skills = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Função para verificar se o dispositivo suporta touch
  const isDeviceTouch = () => {
    return 'ontouchstart' in window || navigator.msMaxTouchPoints;
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 576) {
        setSlidesPerView(1);
      } else if (width < 875) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
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
        modules={[Pagination, Mousewheel, Keyboard, Scrollbar, Autoplay]}
        slidesPerView={slidesPerView}
        pagination={{
          clickable: true,
        }}
        scrollbar={{
          draggable: true,
        }}
        cssMode={isDeviceTouch()}
        keyboard={true}
        loop={true}
        autoplay={{ delay: 3000}}
        className="mySwiper"
      >
        
          <div className="skills__container container grid" onMouseDown={(e) => mouseDownHandler(e.currentTarget, e)}>
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