import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Projects.css'
import { FreeMode, Pagination , Navigation , Autoplay } from 'swiper/modules';
import Came1 from '../images/cam1.jpeg'
import Came2 from '../images/cam2.jpg'
import Came3 from '../images/cam3.jpg'
import Came4 from '../images/cam4.jpg'
import { useState } from 'react';
export default function Projects2() {


  const [projects , setProjects] =useState([])

  const { t, i18n } = useTranslation();

  console.log(i18n.language ,"kjjkj");
  React.useEffect(() => {
    fetch('https://dash-board-sspy.onrender.com/api/all-Projects')
    .then(response => response.json())
    .then(data => {
      console.log(data.data)
      const data1 = data.data.filter((item)=> item.in_home===true ) 
      setProjects(data1);
      
    })
     
  }, [])
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
      slidesPerView={3}
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
        {projects.map((project)=>
          
          <SwiperSlide className='sd2' key={project._id} style={{maxHeight:"400px" , minHeight:"400px"}}>
          <div >
          <img src={Came1} alt="" />
  
            {/* <img src={product?.image} alt="" /> */}
        </div> <br />
        <h3>{`${i18n.language=== "en" ? project.name_en :  project.name_ar}`}</h3>
         <p style={{opacity:".5" , fontSize:"15px"}}>
         {`${i18n.language=== "en" ? project.description_en :  project.description_ar}`}
         </p>
             
              </SwiperSlide>

              
        )}



        {/* <SwiperSlide className='swip'><div>
            <img src={Came2} alt="" />
        </div><br />   <h3>Camera</h3>
         <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
             mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide>
              */}

{/* 
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
             mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide>  */}


      </Swiper>
    </>
  );
}
