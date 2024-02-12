import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
const NavBar = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    for (let i = 0; i < document.getElementsByClassName("lang").length; i++) {
      const element = document.getElementsByClassName("lang")[i];
      if (element.value === i18n.language) {
        element.setAttribute("selected", "true");
      }
    }
  }, []);
  const [showModel, setShowModel] = useState(false);

  const lists = [
    { name: t("Home"), url: "/", id: "1" },
    { name: t("About"), url: "/about", id: "2" },
    { name: t("Projects"), url: "/projects ", id: "3" },
    { name: t("Products"), url: "/products ", id: "4" },
    { name: t("Contact Us"), url: "/Contact", id: "5" },
  ];
  return (
    <div className="mainNav container-fluid  py-10 ps-4">
      <button
        className="btn1  icon-menu"
        onClick={() => {
          setShowModel(true);
        }}
      />
      <nav>
        {lists.map((list) => (
          <Link className="list" to={list.url} key={list.id}>
            {list.name}
          </Link>
        ))}
      </nav>
      <select
        name="lang"
        id="lang"
        className="bg-dark text-light"
        onChange={changeLanguage}
      >
        <option value="en" className="lang">
          En
        </option>
        <option value="ar" className="lang">
          Ar
        </option>
      </select>
      {showModel && (
        <div className="model">
          <div className="popup">
            <div style={{ textAlign: "right" }}>
              <button
                className="icon-close"
                onClick={() => {
                  setShowModel(false);
                }}
              />
            </div>
            {lists.map((list) => (
              <Link
                onClick={() => {
                  setShowModel(false);
                }}
                className="list"
                to={list.url}
                key={list.id}
              >
                {list.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
