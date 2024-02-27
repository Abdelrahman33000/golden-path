import React, { useContext } from "react";
import Logo from "../images/Golden Path - Logo.png";

import "./Header.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
const Header = () => {
  const { emailGlobal, phoneGlobal } = useContext(GlobalContext);
  return (
    <header className="d-flex justify-content-between my-3 align-items-center">
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "150px", height: "35px" }}
          className="img"
        />
      </Link>

      <div dir="ltr" className=" mail px-2">
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
      </div>
    </header>
  );
};

export default Header;
