
import Style from './style.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay, Pagination } from 'swiper/modules';

const HeroSection = () => {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className={Style.item}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Style.item2}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Style.item3}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Style.item4}></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSection;
