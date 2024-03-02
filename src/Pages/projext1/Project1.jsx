import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";

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
    dealWithAPIData({ endpoint: `projects/${project_id}` }).then((result) =>
      setProjectDetail(result?.data)
    );
  }, [i18n.language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return isLoading || !projectDetail.id ? (
    <Loader />
  ) : (
    <>
      <h1
        className="project bg-dark text-light text-center p-5"
        style={{ fontFamily: "Bodoni Moda" }}
      >
        {t("ProjectDetails")}
      </h1>

      <div className="my-5 d-flex justify-content-center text-center container">
        <div className="mx-2 mx-lg-5 mx-md-5 " style={{ width: "100%" }}>
          <h1>{projectDetail?.name}</h1>

          <div className="container d-flex align-items-center justify-content-center">
            <p
              className="m-0 text-center col-11 col-lg-7 col-md-8"
              style={{ textAlign: "justify" }}
            >
              {projectDetail?.shortDescription}
            </p>
          </div>

          <div className="bg-dark  text-light p-3  text-start mx-3 my-5">
            <p>
              <Person4 /> Client :
              <span className="opacity-50 px-2 text-nowrap">
                {projectDetail?.customer_name}
              </span>
            </p>
            <p>
              <CalendarMonth /> Date :
              <span className="opacity-50 px-2 text-nowrap">
                {projectDetail?.date}
              </span>
            </p>
            <p>
              <CardMembership /> Category :
              <span className="opacity-50 px-2 text-nowrap">
                {projectDetail?.category_name}
              </span>
            </p>
            <p>
              <MyLocation /> Location :
              <span className="opacity-50 px-2 text-nowrap">
                {projectDetail?.location}
              </span>
            </p>
          </div>

          <div
            className=" d-flex align-items-center justify-content-center my-md-5 my-3"
            style={{ minHeight: "250px", maxHeight: "550px" }}
          >
            <img
              src={
                projectDetail.img
                  ? projectDetail.img
                  : "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
              }
              alt=""
              height={"100%"}
              width={"auto"}
              className="rounded-5 "
              onError={(e) => {
                e.target.src =
                  "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
                e.target.onError = null;
              }}
              style={{ maxWidth: "100%", maxHeight: "550px" }}
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
                  <img src={swipe} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Project1;
