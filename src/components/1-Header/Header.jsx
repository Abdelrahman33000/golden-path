import React, { useContext } from "react";
import Logo from "../images/golden-paths-logo.png";

import "./Header.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import { MailOutline, WhatsApp } from "@mui/icons-material";

const Header = () => {
  const { emailGlobal, phoneGlobal } = useContext(GlobalContext);
  return (
    <header className="d-flex justify-content-between m-2 align-items-center">
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          width={"120px"}
          height={"auto"}
          // style={{ width: "150px", height: "35px" }}
          // className="img"
        />
      </Link>

      <div
        dir="ltr"
        className="px-2"
        style={{ fontSize: "12px", color: "#093266" }}
      >
        {/* <h4 style={{ color: "#093266" }}>{t("Contact Us")}</h4> */}
        <p className="my-2">
          <WhatsApp style={{ fontSize: "20px" }} /> {phoneGlobal}
        </p>
        <p className="my-2">
          <MailOutline style={{ fontSize: "20px" }} /> {emailGlobal}
        </p>
      </div>

      {/* <div dir="ltr" className=" mail px-2">
        <p
          className="icon-email my-2"
          style={{ color: "#093266", fontSize: "12px" }}
        >
          <span className="px-2">{emailGlobal}</span>
        </p>
        <p
          className="icon-phone my-2"
          style={{ color: "#093266", fontSize: "12px" }}
        >
          <span className="px-2">{phoneGlobal}</span>
        </p>
      </div> */}
    </header>
  );
};

export default Header;
