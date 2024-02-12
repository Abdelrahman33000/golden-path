import React, { useContext } from "react";
import "./Hero.css";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../Context/GlobalContext";

const Hero = () => {
  const { slidersList } = useContext(GlobalContext);

  const { i18n } = useTranslation();

  return (
    <main style={{ minHeight: "calc(100vh - 150px)" }}>
      <Carousel fade className="Carousel">
        {slidersList.map((slider) => (
          <Carousel.Item>
            <div
              className="bg-dark"
              style={{
                height: "calc(100vh - 150px)",
              }}
            >
              <img
                src={slider.background}
                alt=""
                text="First slide"
                style={{
                  width: "100%",
                  height: "100%",

                  opacity: "0.5",
                }}
              />
            </div>

            <Carousel.Caption
              style={{
                textAlign: i18n.language == "en" ? "left" : "right",
                paddingBottom: "100px",
              }}
            >
              <h1 style={{ width: "60%" }}>{slider.title}</h1>

              <p style={{ width: "50%" }}>{slider.text}</p>
              {slider.btn_text && (
                <button
                  className="btn btn5 position-absolute bottom-0 mb-4"
                  onClick={() => {
                    window.location.replace(slider.url);
                  }}
                >
                  {slider.btn_text}
                </button>
              )}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </main>
  );
};

export default Hero;
