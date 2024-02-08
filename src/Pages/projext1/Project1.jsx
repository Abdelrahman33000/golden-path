import React, { useContext, useEffect, useState } from "react";
import img7 from "../../components/images/cam3.jpg";
// import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import Came1 from "../../components/images/cam1.jpeg";
import Came2 from "../../components/images/cam2.jpg";
import Came3 from "../../components/images/cam3.jpg";
import Came4 from "../../components/images/cam4.jpg";
import {
  CalendarMonth,
  CardMembership,
  MyLocation,
  Person4,
} from "@mui/icons-material";
import { GlobalContext } from "../../Context/GlobalContext";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Project1 = () => {
  const { project_id } = useParams();
  const [projectDetail, setProjectDetail] = useState({});
  const { dealWithAPIData, isLoading } = useContext(GlobalContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dealWithAPIData({ endpoint: `projects/${project_id}` }).then((result) => {
      console.log(result, "project detail");
      setProjectDetail(result?.data);
    });
  }, [i18n.language]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <h1
        className="project bg-dark text-light text-center p-5"
        style={{ fontFamily: "Bodoni Moda" }}
      >
        {t("ProjectDetails")}
      </h1>

      <div className="my-5 d-flex justify-content-center text-center ">
        <div className=" rounded-5 mx-5  " style={{ width: "100%" }}>
          <h1>{projectDetail?.name}</h1>

          <div className="bg-dark  text-light p-3  text-start mx-3 my-5">
            <p>
              <Person4 /> Client :
              <span className="opacity-50"> Stanford university</span>
            </p>
            <p>
              <CalendarMonth /> Date :
              <span className="opacity-50"> sep 28 , 2020 </span>
            </p>
            <p>
              <CardMembership /> Category :
              <span className="opacity-50"> Outdoor Wiring</span>
            </p>
            <p>
              <MyLocation /> Location :
              <span className="opacity-50"> California USA</span>
            </p>
          </div>
          <p className="mx-3  my-4" style={{ textAlign: "left" }}>
            {(projectDetail?.description && !projectDetail?.shortDescription) ||
              (!projectDetail?.description && projectDetail?.shortDescription)}
          </p>
          <div className="mx-3 my-5">
            <img
              src={projectDetail?.img}
              alt=""
              className="rounded-5 p-2  "
              style={{ width: "100%" }}
            />
          </div>
          <Swiper
            style={{ width: "100%" }}
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
            {projectDetail?.gallery?.map((swipe) => (
              <SwiperSlide className="swip">
                <div>
                  <img src={Came2} alt="" />
                </div>
                <br />
              </SwiperSlide>
            ))}
            {/* <SwiperSlide className="swip">
              <div>
                <img src={Came1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swip">
              <div>
                <img src={Came2} alt="" />
              </div>
              <br />
            </SwiperSlide>
            <SwiperSlide className="swip">
              <div>
                <img src={Came3} alt="" />
              </div>
              <br />
            </SwiperSlide>
            <SwiperSlide className="swip">
              <div>
                <img src={Came4} alt="" />
              </div>
              <br />
            </SwiperSlide>
            <SwiperSlide className="swip">
              <div>
                <img src={Came1} alt="" />
              </div>
              <br />
            </SwiperSlide>
            <SwiperSlide className="swip">
              <div>
                <img src={Came1} alt="" />
              </div>
              <br />
            </SwiperSlide>
            <SwiperSlide className="swip">
              <div>
                <img src={Came2} alt="" />
              </div>
              <br />
            </SwiperSlide>
            <SwiperSlide className="swip">
              <div>
                <img src={Came3} alt="" />
              </div>
              <br />
            </SwiperSlide>
            <SwiperSlide className="swip">
              <div>
                <img src={Came4} alt="" />
              </div>
              <br />
            </SwiperSlide>
            <SwiperSlide className="swip">
              <div>
                <img src={Came1} alt="" />
              </div>
              <br />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Project1;
