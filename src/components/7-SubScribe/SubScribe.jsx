import React from "react";
import img from "../images/cam2.jpg";
import { Facebook } from "@mui/icons-material";

import "./Subscribe.css";
import SocialMediaList from "../SocialMediaList/SocialMediaList";
import { useTranslation } from "react-i18next";
const SubScribe = () => {
  const { i18n } = useTranslation();
  return (
    <div
      className="my-5 align-items-center rounded-5 shadow-lg justify-content-between row"
      style={{
        margin: "auto",
        textAlign: "center",
        backgroundColor: "#bcbcb761",
        width: "85%",
      }}
    >
      <div className="col-lg-5  d-flex justify-content-center ps-5">
        <img
          src={img}
          alt="img"
          className=" rounded-5 p-3 me-5"
          style={{ width: "100%" }}
        />
      </div>
     <div className="col-lg-6 py-3 mx-lg-4">
       <div className="">
         <h3>SubScribe Our NewsLetter</h3>
         <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, ut.
         </p>
         <div className="w-100 px-2 d-flex flex-md-row flex-column align-items-center justify-content-between">
           <input
             type="email"
             placeholder={i18n.language == "en" ? "Email" : "ايميل"}
             // className="rounded-5 p-2 w-50 my-2 "
             className="form-control-lg rounded-5 my-2"
             style={{ outline: "none", border: "none" }}
           />
           <button className="btn btn-outline-info ">SubScribe</button>
         </div>
         <div className="px-md-3">
         <SocialMediaList />
         </div>
       </div>
     </div>
    </div>
  );
};

export default SubScribe;
