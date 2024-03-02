import React from "react";
import img from "../images/cam2.jpg";
import { Facebook } from "@mui/icons-material";

import "./Subscribe.css";
import SocialMediaList from "../SocialMediaList/SocialMediaList";
import { useTranslation } from "react-i18next";
const SubScribe = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className="my-5 p-4 d-flex flex-column flex-lg-row align-items-center justify-content-between rounded-5 shadow"
      style={{
        margin: "auto",
        textAlign: "center",
        backgroundColor: "#bcbcb761",
        width: "85%",
      }}
    >
      <div className="col-lg-5">
        <img
          src={img}
          alt="img"
          width={"100%"}
          height={"auto"}
          className="rounded-5"
          // style={{ width: "100%" }}
        />
      </div>
      <div className="col-lg-6 col-12 h-100 p-3 d-flex flex-column align-items-center justify-content-center gap-3">
        <h3 className="py-2">{t("Subscribe Card Title")}</h3>
        {/* <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, ut.
         </p> */}
        <div className="w-100 d-flex flex-sm-row flex-column align-items-center justify-content-between gap-md-3 gap-2">
          <input
            type="email"
            placeholder={i18n.language == "en" ? "Email" : "ايميل"}
            // className="rounded-5 p-2 w-50 my-2 "
            className="form-control rounded-5 my-2 py-2"
            style={{ outline: "none", border: "none" }}
          />
          <button className="btn btn-outline-info rounded-5">
            {i18n.language == "en" ? "Subscribe" : "اشترك"}
          </button>
        </div>
        <div className="px-2 w-100">
          <SocialMediaList />
        </div>
      </div>
    </div>
  );
};

export default SubScribe;
