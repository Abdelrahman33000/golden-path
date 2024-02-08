// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Projects.css";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import Came1 from "../images/cam1.jpeg";
import Came2 from "../images/cam2.jpg";
import Came3 from "../images/cam3.jpg";
import Came4 from "../images/cam4.jpg";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

export default function Projects2() {
  const { projectsList } = useContext(GlobalContext);

  // const [projectsList, setProjectsList] = useState([]);
  // const { dealWithAPIData } = useContext(GlobalContext);

  // const { t, i18n } = useTranslation();

  // // console.log(i18n.language, "kjjkj");

  // useEffect(() => {
  //   console.log("getting projects ..");
  //   dealWithAPIData({ endpoint: "projects" }).then((result) =>
  //     // setProjectsList([...result?.data])
  //     setProjectsList([
  //       ...result?.data.filter((item) => item.add_item_in_home == "1"),
  //     ])
  //   );
  // }, []);

  return (
    <>
      <Swiper
        dir="ltr"
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
        navigation={true}
        // slidesPerView={3}
        // spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {projectsList.map((project) => (
          <SwiperSlide
            className="sd2"
            key={project.id}
            style={{ maxHeight: "500px", minHeight: "400px" }}
          >
            <div>
              <img
                src={project.img}
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
            <h3>{project.name}</h3>
            <p style={{ opacity: ".5", fontSize: "15px" }}>
              {project.shortDescription}
            </p>
          </SwiperSlide>
        ))}

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
