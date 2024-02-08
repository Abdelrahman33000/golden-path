import React, { useContext } from "react";
import "./Home.css";
import { useTranslation } from "react-i18next";

import {
  About,
  Hero,
  Logo,
  ProductCarousel,
  SubScribe,
} from "../../components";
import Projects2 from "../../components/5-ProjectsCard/Projects2";
import Loader from "./../../components/Loader/Loader";
import { GlobalContext } from "../../Context/GlobalContext";
const Home = () => {
  const { t } = useTranslation();
  const { isLoading } = useContext(GlobalContext);

  // const lists = [
  //   { name: " Home", id: "/" },
  //   { name: " About", id: "#About" },
  //   { name: " Service", id: "#Service " },
  //   { name: " Product", id: "#Product " },
  //   { name: " Partners", id: "#Partners " },
  //   { name: " Contact", id: "#Contact" },
  // ];
  return isLoading ? (
    <Loader />
  ) : (
    <div className="home">
      <Hero />
      <About />

      <h3 className="ps-5 m-5 img2">{t("Our Products")}</h3>
      <ProductCarousel />
      <h3 className="ps-5 m-5 img2">{t("Our Projects")}</h3>
      <Projects2 />
      <h3 className="ps-5 m-5 img2">{t("Our Partners")}</h3>
      <Logo />
      <SubScribe />
    </div>
  );
};

export default Home;
