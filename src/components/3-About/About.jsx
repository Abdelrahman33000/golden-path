import React from "react";
import { Link } from "react-router-dom";
import Img from "../images/cam.png";
import { useTranslation } from "react-i18next";
import "./about.css";
const About = () => {
  const { t } = useTranslation();
  return (
    <div className="row my-5">
      <img src={Img} alt="Img" className="col-lg-5 shadow-lg  rounded-5 mb-5" />
      <div className="col-lg-6  ">
        <h4 className="px-5 py-3 mx-5 img5">{t("About Golden paths")}</h4>
        <p className="px-5 py-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          ipsam dolorem repudiandae, quasi tenetur harum iure possimus eos, vero
          voluptatem soluta ullam optio iusto perferendis atque? Illo porro
          eligendi modi! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repellendus totam iste consectetur consequatur excepturi fugiat,
          debitis distinctio accusantium beatae corporis magnam aliquid maiores
          amet nemo natus illum quis voluptatem exercitationem?
        </p>

        <button
          className="btn5 mx-5 p-3 rounded"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
            {t("Read More")}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default About;
