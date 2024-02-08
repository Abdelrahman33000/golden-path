import React, { useContext, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import { GlobalContext } from "../../Context/GlobalContext";
import "swiper/css/pagination";
import Came1 from "../images/cam1.jpeg";
import Came2 from "../images/cam2.jpg";
import Came3 from "../images/cam3.jpg";
import Came4 from "../images/cam4.jpg";
import "./Products.css";

// import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  const [productsList, setProductsList] = useState([]);

  const { dealWithAPIData } = useContext(GlobalContext);

  useEffect(() => {
    dealWithAPIData({ endpoint: "products" }).then((result) =>
      setProductsList([
        ...result?.data.filter((item) => item.add_item_in_home == "1"),
      ])
    );
  }, []);

  return (
    <>
      <Swiper
        style={{ padding: "10px " }}
        dir="ltr"
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          639: {
            slidesPerView: 2,
          },
          865: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
          1700: {
            slidesPerView: 4,
          },
        }}
        modules={[FreeMode, Pagination, EffectCoverflow, Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        effect={"coverflow"}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper5"
      >
        {productsList.map((product) => (
          <SwiperSlide
            className="sd2"
            key={product.id}
            style={{ maxHeight: "500px", minHeight: "400px" }}
          >
            <div>
              <img
                src={product.img}
                // src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
                alt=""
                height={250}
                className="object-fit-cover"
                onError={(e) => {
                  e.target.src =
                    "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
                  e.target.onError = null;
                }}
              />
            </div>
            <br />
            <h3>{product.name}</h3>
            <p style={{ opacity: ".5", fontSize: "15px" }}>
              {product.shortDescription}
            </p>
          </SwiperSlide>
        ))}

        {/* 
      <SwiperSlide className='sd2'><div>
          <img src={Came2} alt="" />
      </div><br />   <h3>Camera</h3>
       <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
           mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide>
      
      <SwiperSlide className='sd2'>
        
        <div>
          <img src={Came3} alt="" />
      </div><br />   <h3>Camera</h3>
       <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
           mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide>
      <SwiperSlide className='sd2'><div>
          <img src={Came4} alt="" />
      </div><br />   <h3>Camera</h3>
       <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
           mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide> <SwiperSlide className='sd2'><div>
          <img src={Came1} alt="" />
      </div><br />   <h3>Camera</h3>
       <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
           mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide>
           <SwiperSlide className='sd2 rounded-5'><div>
          <img src={Came1} alt="" />
      </div> <br />
      <h3>Camera</h3>
       <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
           mollitia in ut quod velit officiis eos nesciunt?</p> </SwiperSlide>
      <SwiperSlide className='sd2'><div>
          <img src={Came2} alt="" />
      </div><br />   <h3>Camera</h3>
       <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
           mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide>
      <SwiperSlide className='sd2'><div>
          <img src={Came3} alt="" />
      </div><br />    <h3>Camera</h3>
       <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
           mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide>
      <SwiperSlide className='sd2'><div>
          <img src={Came4} alt="" />
      </div><br />   <h3>Camera</h3>
       <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
           mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide> <SwiperSlide className='sd2'><div>
          <img src={Came1} alt="" />
      </div><br />   <h3>Camera</h3>
       <p style={{opacity:".5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ab amet
           mollitia in ut quod velit officiis eos nesciunt?</p></SwiperSlide>

            */}
      </Swiper>
    </>
  );
}
