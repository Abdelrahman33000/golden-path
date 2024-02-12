import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Logo.css";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";

import { GlobalContext } from "../../Context/GlobalContext";

export default function App() {
  const { partnersList } = useContext(GlobalContext);

  return (
    <>
      <Swiper
        dir="ltr"
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
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
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay, Navigation]}
        className="mySwip"
      >
        {partnersList.map((partner) => (
          <SwiperSlide className="swipee" key={partner.id}>
            <div>
              <img
                src={partner.icon}
                alt=""
                onError={(e) => {
                  e.target.src =
                    "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
                  e.target.onError = null;
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
