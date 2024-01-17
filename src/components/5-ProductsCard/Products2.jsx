import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Products.css'
import { FreeMode, Pagination , Navigation , Autoplay } from 'swiper/modules';
import Came1 from '../images/cam1.jpeg'
import Came2 from '../images/cam2.jpg'
import Came3 from '../images/cam3.jpg'
import Came4 from '../images/cam4.jpg'
export default function App() {
  return (
    <>
      <Swiper
      dir='ltr'
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
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
        // slidesPerView={3}
        // spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}

        modules={[FreeMode, Pagination ,Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='swip'><div>
            <img src={Came1} alt="" />
        </div> <br />
        <h3>Camera</h3>
         <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
             mollitia in ut quod velit officiis eos nesciunt?</p> </SwiperSlide>
        <SwiperSlide className='swip'><div>
            <img src={Came2} alt="" />
        </div><br />   <h3>Camera</h3>
         <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
             mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide>
        <SwiperSlide className='swip'><div>
            <img src={Came3} alt="" />
        </div><br />   <h3>Camera</h3>
         <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
             mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide>
        <SwiperSlide className='swip'><div>
            <img src={Came4} alt="" />
        </div><br />   <h3>Camera</h3>
         <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
             mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide> <SwiperSlide className='swip'><div>
            <img src={Came1} alt="" />
        </div><br />   <h3>Camera</h3>
         <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
             mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide>
             <SwiperSlide className='swip'><div>
            <img src={Came1} alt="" />
        </div> <br />
        <h3>Camera</h3>
         <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
             mollitia in ut quod velit officiis eos nesciunt?</p> </SwiperSlide>
        <SwiperSlide className='swip'><div>
            <img src={Came2} alt="" />
        </div><br />   <h3>Camera</h3>
         <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
             mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide>
        <SwiperSlide className='swip'><div>
            <img src={Came3} alt="" />
        </div><br />    <h3>Camera</h3>
         <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
             mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide>
        <SwiperSlide className='swip'><div>
            <img src={Came4} alt="" />
        </div><br />   <h3>Camera</h3>
         <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
             mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide> <SwiperSlide className='swip'><div>
            <img src={Came1} alt="" />
        </div><br />   <h3>Camera</h3>
         <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
             mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide>
      </Swiper>
    </>
  );
}
