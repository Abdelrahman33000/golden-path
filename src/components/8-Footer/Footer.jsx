import React from "react";
import img from "../images/Golden Path - Logo.png";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Call, Email, Place, Schedule } from "@mui/icons-material";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="row   text-light mx-0">
      <div className="col-lg-3 px-3">
        <img
          src={img}
          alt="footer"
          className="py-5 me-5"
          style={{ width: "200px", height: "150px" }}
        />
      </div>
      <div className="bg-dark  col-lg-9 row p-3 m-0">
        <div className="col-lg-2   m-sm-3  col-sm-4 ">
         <Link to={"/"} style={{textDecoration:"none"}}><h4 style={{ color: "#ffa200" }}>{t("Home")}</h4></Link> 
         <Link to={"/about"} style={{textDecoration:"none"}}><p style={{ color: "#ffa200" }}>{t("About")}</p></Link> 
         <Link to={"/projects"} style={{textDecoration:"none"}}><p style={{ color: "#ffa200" }}>{t("Projects")}</p></Link> 
         <Link to={"/products"} style={{textDecoration:"none"}}><p style={{ color: "#ffa200" }}>{t("Products")}</p></Link> 
         <Link to={"/Contact"} style={{textDecoration:"none"}}><p style={{ color: "#ffa200" }}>{t("Contact Us")}</p></Link> 

        </div>

        <div className="col-lg-3   m-sm-3  col-sm-4 ">
          {/* <p style={{ color: "#ffa200" }}>{t("Office Address")}</p> */}
          <h4 style={{ color: "#ffa200" }}>{t("Office Address")}</h4>
          <p><Place /> Saudi Arabia - Riyadh</p>

          {/* <p>Sub Link</p>
          <p>Sub Link</p>
          <p>Sub Link</p> */}
        </div>

        <div className="col-lg-3   m-sm-3  col-sm-4 ">
          {/* <h4 style={{ color: "#ffa200" }}>{t("Projects")}</h4> */}
          <h4 style={{ color: "#ffa200" }}> {t("Working Hours")} </h4>
          <p> <Schedule /> Saturday - Thursday (9am - 5pm)</p>
          {/* <p>Sub Link</p> */}
          {/* <p>Sub Link</p> */}
        </div>

        <div className="col-lg-2  m-sm-3  col-sm-4 ">
          <h4 style={{ color: "#ffa200" }}>{t("Contact Us")}</h4>
          <p><Call /> +966553347725 </p>
          <p><Email /> info@adtc.com.sa </p>
          {/* <p>Sub Link</p> */}
        </div>

        {/* <div className="col-lg-2   m-sm-3  col-sm-4 ">
          <h4 style={{ color: "#ffa200" }}>{t("Contact Us")}</h4>
          <p>Sub Link</p>
          <p>Sub Link</p>
          <p>Sub Link</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
