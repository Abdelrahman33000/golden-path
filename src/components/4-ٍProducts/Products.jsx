import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { GlobalContext } from "../../Context/GlobalContext";
import "swiper/css/pagination";

import "./Products.css";
import { useNavigate } from "react-router-dom";

export default function App() {
  const { productsList } = useContext(GlobalContext);
  const navigate = useNavigate();

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
        {productsList
          .filter((item) => item.add_item_in_home == "1")
          .map((product) => (
            <SwiperSlide
              className="sd2"
              key={product.id}
              style={{ maxHeight: "500px", minHeight: "400px" }}
            >
              <div onClick={() => navigate(`/productDetails/${product.id}`)}>
                <img
                  src={product.img}
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
      </Swiper>
    </>
  );
}
