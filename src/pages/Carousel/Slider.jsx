import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

// import "Img1" from "../../assets/image-1.jpg";

const Slider = () => {
  return (
      <Swiper
      spaceBetween={50}
      slidesPerView={3}  >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    
  );
};

export default Slider;