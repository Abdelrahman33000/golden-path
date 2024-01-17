import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Logo.css'
import { FreeMode, Pagination , Navigation , Autoplay } from 'swiper/modules';
import Came1 from '../images/clients-logo-3.png'
import Came2 from '../images/clients-logo-4 (1).png'
import Came3 from '../images/clients-logo-4.png'
import Came4 from '../images/clients-logo-5.png'
export default function App() {
  return (
    <>
      <Swiper
      dir='ltr'
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      slidesPerView={4}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400:{
          slidesPerView:1,
        },
        639: {
          slidesPerView: 2,
        },
        865:{
          slidesPerView:2
        },
        1000:{
          slidesPerView:3
        },
        1500:{
          slidesPerView:4
        },
        1700:{
          slidesPerView:4
        }
      }}
      navigation={true}
        // slidesPerView={4}
        // spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination ,Autoplay, Navigation]}
        className="mySwip"
      >
        <SwiperSlide className='swipee'><div>
            <img src={Came1} alt="" />
        </div>  </SwiperSlide>
        <SwiperSlide className='swipee'><div>
            <img src={Came2} alt="" />
        </div></SwiperSlide>
        <SwiperSlide className='swipee'><div>
            <img src={Came3} alt="" />
        </div></SwiperSlide>
        <SwiperSlide className='swipee'><div>
            <img src={Came4} alt="" />
        </div></SwiperSlide> <SwiperSlide className='swipee'><div>
            <img src={Came1} alt="" />
        </div></SwiperSlide>
             <SwiperSlide className='swipee'><div>
            <img src={Came1} alt="" />
        </div>  </SwiperSlide>
        <SwiperSlide className='swipee'><div>
            <img src={Came2} alt="" />
        </div></SwiperSlide>
        <SwiperSlide className='swipee'><div>
            <img src={Came3} alt="" />
        </div></SwiperSlide>
        <SwiperSlide className='swipee'><div>
            <img src={Came4} alt="" />
        </div></SwiperSlide> <SwiperSlide className='swipee'><div>
            <img src={Came1} alt="" />
        </div></SwiperSlide>
      </Swiper>
    </>
  );
}
