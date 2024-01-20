import React from "react";
import img from "../images/Golden Path - Logo.png";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    !pathname.includes("admin") && (
      <footer className="row   text-light mx-0">
        <div className="col-lg-3 px-5">
          <img
            src={img}
            alt="footer"
            className="py-5 me-5"
            style={{ width: "200px", height: "150px" }}
          />
        </div>{" "}
        <div className="bg-dark  col-lg-9 row p-5 m-0">
          <div className="col-lg-2   m-sm-3  col-sm-4 ">
            <h4 style={{ color: "#ffa200" }}>{t("Home")}</h4>
            <p>Sub Link</p>
            <p>Sub Link</p>
            <p>Sub Link</p>
          </div>

          <div className="col-lg-2   m-sm-3  col-sm-4 ">
            <h4 style={{ color: "#ffa200" }}>{t("About")}</h4>
            <p>Sub Link</p>
            <p>Sub Link</p>
            <p>Sub Link</p>
          </div>

          <div className="col-lg-2   m-sm-3  col-sm-4 ">
            <h4 style={{ color: "#ffa200" }}>{t("Projects")}</h4>
            <p>Sub Link</p>
            <p>Sub Link</p>
            <p>Sub Link</p>
          </div>

          <div className="col-lg-2  m-sm-3  col-sm-4 ">
            <h4 style={{ color: "#ffa200" }}>{t("Products")}</h4>
            <p>Sub Link</p>
            <p>Sub Link</p>
            <p>Sub Link</p>
          </div>

          <div className="col-lg-2   m-sm-3  col-sm-4 ">
            <h4 style={{ color: "#ffa200" }}>{t("Contact Us")}</h4>
            <p>Sub Link</p>
            <p>Sub Link</p>
            <p>Sub Link</p>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
