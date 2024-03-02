import React from "react";
import { Link } from "react-router-dom";
import Img from "../images/cam.png";
import { useTranslation } from "react-i18next";
import "./about.css";
const About = () => {
  const { t } = useTranslation();
  return (
    <div className="w-100 px-md-3 my-5 d-flex flex-column flex-lg-row align-items-center justify-content-between">
      <div className="h-100 col-lg-5 p-2">
        <img
          src={Img}
          alt="Img"
          width={"100%"}
          height={"100%"}
          className="shadow-sm  rounded-5"
        />
      </div>
      <div className="col-lg-7 p-3 ">
        <h4 className="px-5 py-3 img5">{t("About Golden paths Title")}</h4>
        <p className="py-3">
          {[
            t("Security Solutions Description"),
            t("Unified Communications Description"),
            t("ITC Infrastructure Description"),
            t("Fire Alarm Description"),
          ].map((item) => (
            <div className="py-2">{item}</div>
          ))}
          {/* <span>{t("Security Solutions Description")}</span>
          {t("Unified Communications Description")}
          {t("ITC Infrastructure Description")}
          {t("Fire Alarm Description")} */}

          {/* {t("About Golden paths Description")} */}
          {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          ipsam dolorem repudiandae, quasi tenetur harum iure possimus eos, vero
          voluptatem soluta ullam optio iusto perferendis atque? Illo porro
          eligendi modi! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repellendus totam iste consectetur consequatur excepturi fugiat,
          debitis distinctio accusantium beatae corporis magnam aliquid maiores
          amet nemo natus illum quis voluptatem exercitationem? */}
        </p>

        <button
          className="btn5 p-3 rounded"
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
