import React from 'react'
import img7 from '../../components/images/cam3.jpg'
// import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination , Navigation , Autoplay } from 'swiper/modules';
import Came1 from '../../components/images/cam1.jpeg'
import Came2 from '../../components/images/cam2.jpg'
import Came3 from '../../components/images/cam3.jpg'
import Came4 from '../../components/images/cam4.jpg'
import { CalendarMonth, CardMembership, MyLocation, Person4 } from '@mui/icons-material';
const Project1 = () => {
  return (

    <>
                <h1 className='project bg-dark text-light text-center p-5' style={{fontFamily:"Bodoni Moda"}}> project Details</h1>

    <div className='my-5 d-flex justify-content-center text-center ' >
<div className=' rounded-5 mx-5  'style={{width:"100%"}} >
    <h1> Project 1</h1>

    <div className='bg-dark  text-light p-3  text-start mx-3 my-5'>
        <p><Person4/>   Client : <span className='opacity-50'> Stanford university</span></p>
        <p><CalendarMonth />  Date : <span className='opacity-50'> sep 28 , 2020 </span> </p>
        <p><CardMembership /> Category : <span className='opacity-50'>  Outdoor Wiring</span></p>
        <p><MyLocation /> Location : <span className='opacity-50'>  California USA</span></p>
        
    </div>
    <p className='mx-3  my-4' style={{textAlign:"left"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Odio iusto distinctio magni natus fuga! Fuga atque iusto nihil 
        culpa beatae! Sapiente, quo tempore. Consequuntur tenetur perferendis
         reprehenderit! Nostrum, molestias repellendus! Eius sapiente voluptate 
         perspiciatis saepe consequuntur ex quibusdam excepturi nihil maiores beatae 
         suscipit, ipsam quam doloribus consectetur ullam quia eligendi repudiandae
          eveniet quae! Explicabo hic eveniet libero quas, quia vero illo at iste atque
           officiis accusamus eligendi totam minima odit corrupti neque in sint quae earum 
           excepturi autem deleniti. Esse omnis odit quas ut magni deleniti repellat? Blanditiis
            ea fugit ut unde, illum nobis, dicta voluptate commodi officiis impedit voluptatem 
            atque autem dolores! Voluptates enim officia molestias et eligendi voluptate modi 
            distinctio excepturi? Expedita, alias? Illum et iusto qui impedit, iure tempore 
            optio amet eaque ipsam adipisci voluptatibus dolorum veritatis fugit ratione 
         atque laboriosam aperiam repellendus dolor neque voluptate deleniti doloremque, sunt iure optio. Deserunt.</p>
<div className='mx-3 my-5'>
    
    <img src={img7} alt=''  className='rounded-5 p-2  ' style={{width:"100%"}} />
    
</div>
<Swiper
style={{width:"100%"}}
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
        </div> 
             
              </SwiperSlide>
        <SwiperSlide className='swip'><div>
            <img src={Came2} alt="" />
        </div><br /> </SwiperSlide>
        <SwiperSlide className='swip'>
            
            <div>
            <img src={Came3} alt="" />
        </div><br />  </SwiperSlide>
        <SwiperSlide className='swip'><div>
            <img src={Came4} alt="" />
        </div><br />   </SwiperSlide> <SwiperSlide className='swip'><div>
            <img src={Came1} alt="" />
        </div><br /> </SwiperSlide>
             <SwiperSlide className='swip'><div>
            <img src={Came1} alt="" />
        </div> <br /> </SwiperSlide>
        <SwiperSlide className='swip'><div>
            <img src={Came2} alt="" />
        </div><br />   </SwiperSlide>
        <SwiperSlide className='swip'><div>
            <img src={Came3} alt="" />
        </div><br />   </SwiperSlide>
        <SwiperSlide className='swip'><div>
            <img src={Came4} alt="" />
        </div><br />  </SwiperSlide> <SwiperSlide className='swip'><div>
            <img src={Came1} alt="" />
        </div><br />   </SwiperSlide>
      </Swiper>



</div>
</div>
    </>
)
}

export default Project1