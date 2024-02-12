import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Projects.css";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";

import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

export default function Projects2() {
  const { projectsList } = useContext(GlobalContext);

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
      </Swiper>
    </>
  );
}
