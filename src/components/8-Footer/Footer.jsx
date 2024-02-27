import React, { useContext } from "react";
import img from "../images/Golden Path - Logo.png";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Call, Email, Place, Schedule } from "@mui/icons-material";
import { GlobalContext } from "../../Context/GlobalContext";

const Footer = () => {
  const { t } = useTranslation();

  const { emailGlobal, phoneGlobal } = useContext(GlobalContext);

  return (
    <footer className="row   text-light mx-0">
      <div className="col-lg-3">
        <Link to={"/"}>
          <div
            className="w-100"
            style={{
              backgroundImage: `url('${img}')`,
              minHeight: "120px",
              height: "100%",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </Link>
      </div>

      <div className="bg-dark  col-lg-9 row p-3 m-0">
        <div className="col-lg-2   m-sm-3  col-sm-4 ">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <h4 style={{ color: "#ffa200" }}>{t("Home")}</h4>
          </Link>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <p style={{ color: "#ffa200" }}>{t("About")}</p>
          </Link>
          <Link to={"/projects"} style={{ textDecoration: "none" }}>
            <p style={{ color: "#ffa200" }}>{t("Projects")}</p>
          </Link>
          <Link to={"/products"} style={{ textDecoration: "none" }}>
            <p style={{ color: "#ffa200" }}>{t("Products")}</p>
          </Link>
          <Link to={"/Contact"} style={{ textDecoration: "none" }}>
            <p style={{ color: "#ffa200" }}>{t("Contact Us")}</p>
          </Link>
        </div>

        <div className="col-lg-3   m-sm-3  col-sm-4 ">
          <h4 style={{ color: "#ffa200" }}>{t("Office Address")}</h4>
          <p>
            <Place /> Saudi Arabia - Riyadh
          </p>
        </div>

        <div className="col-lg-3   m-sm-3  col-sm-4 ">
          <h4 style={{ color: "#ffa200" }}> {t("Working Hours")} </h4>
          <p>
            <Schedule /> Saturday - Thursday (9am - 5pm)
          </p>
        </div>

        <div className="col-lg-2  m-sm-3  col-sm-4 ">
          <h4 style={{ color: "#ffa200" }}>{t("Contact Us")}</h4>
          <p>
            <Call /> {phoneGlobal}
          </p>
          <p>
            <Email /> {emailGlobal}
          </p>
          {/* <p>Sub Link</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div className="bg-dark py-3  col-lg-9 d-flex flex-wrap" >
{footerList.map((item) => (
  <div className="col-lg-3 col-md-6 col-sm-6 col-12 py-2 d-flex flex-column align-items-center border border-2">
    {item.map((subItem, subIndex) => {
      if (subIndex == 0) {
        return (
          <Link className="text-decoration-none" to={subItem.to}>
            <h4 style={{ color: "#ffa200" }}>{subItem.text}</h4>
          </Link>
        );
      } else {
        return (
          <Link className="text-decoration-none" to={subItem.to}>
            <span style={{ color: "#ffa200" }}>{subItem.text}</span>
          </Link>
        );
      }
    })}
    {/* <h4 className="mb-3" style={{ color: "#ffa200" }}>
      {t("Home")}
    </h4>
    <p>Sub Link</p>
    <p>Sub Link</p>
    <p>Sub Link</p> */
}
// </div>

{
  /* {[1, 2, 3, 4].map(() => (
  <div className="col-lg-3 col-md-6 col-sm-6 col-12 py-2 d-flex flex-column align-items-center ">
    <h4 className="mb-3" style={{ color: "#ffa200" }}>
      {t("Home")}
    </h4>
    <p>Sub Link</p>
    <p>Sub Link</p>
    <p>Sub Link</p>
  </div>
))} */
}
{
  /* <div className="col-lg-2   m-sm-3  col-sm-4 ">
  <h4 style={{ color: "#ffa200" }}>{t("Home")}</h4>
  <p>Sub Link</p>
  <p>Sub Link</p>
  <p>Sub Link</p>
</div> */
}

{
  /* <div className="col-lg-2   m-sm-3  col-sm-4 ">
  <h4 style={{ color: "#ffa200" }}>{t("About")}</h4>
  <p>Sub Link</p>
  <p>Sub Link</p>
  <p>Sub Link</p>
</div> */
}

{
  /* <div className="col-lg-2   m-sm-3  col-sm-4 ">
  <h4 style={{ color: "#ffa200" }}>{t("Projects")}</h4>
  <p>Sub Link</p>
  <p>Sub Link</p>
  <p>Sub Link</p>
</div> */
}

{
  /* <div className="col-lg-2  m-sm-3  col-sm-4 ">
  <h4 style={{ color: "#ffa200" }}>{t("Products")}</h4>
  <p>Sub Link</p>
  <p>Sub Link</p>
  <p>Sub Link</p>
</div> */
}

{
  /* <div className="col-lg-2   m-sm-3  col-sm-4 ">
  <h4 style={{ color: "#ffa200" }}>{t("Contact Us")}</h4>
  <p>Sub Link</p>
  <p>Sub Link</p>
  <p>Sub Link</p>
</div> */
}
{
  /* </div> */
}
