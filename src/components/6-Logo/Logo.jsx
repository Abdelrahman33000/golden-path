import React, { useContext, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Logo.css";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import Came1 from "../images/clients-logo-3.png";
import Came2 from "../images/clients-logo-4 (1).png";
import Came3 from "../images/clients-logo-4.png";
import Came4 from "../images/clients-logo-5.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

export default function App() {
  const { t, i18n } = useTranslation();

  const [partnersList, setPartnersList] = useState([]);
  const { dealWithAPIData } = useContext(GlobalContext);

  useEffect(() => {
    console.log("getting partners");
    dealWithAPIData({ endpoint: "partners" }).then((result) => {
      console.log(result, "result partners xxx");
      setPartnersList([...result.data]);
    });
  }, []);

  // useEffect(() => {
  //   fetch('https://dash-board-sspy.onrender.com/api/all-partners')
  //   .then(response => response.json())
  //   .then(data =>{
  //     console.log(data.data ,"jjjjjjjjjjjjj")

  //     setPartners(data.data)

  //   }
  //   )
  // },[])

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
        // slidesPerView={4}
        // spaceBetween={20}
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

        {/*         
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
        </div></SwiperSlide> */}
      </Swiper>
    </>
  );
}
