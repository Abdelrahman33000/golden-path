import React, { useContext, useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="home d-flex flex-column gap-5">
      <Hero />
      <About />

      <div>
        <h4 className="px-5 py-3 m-md-4 m-3 img5">{t("Our Products")}</h4>

        <ProductCarousel />
      </div>
      <div>
        <h4 className="px-5 py-3 m-md-4 m-3 img5">{t("Our Projects")}</h4>

        <Projects2 />
      </div>

      <div>
        <h4 className="px-5 py-3 m-md-4 m-3 img5">{t("Our Partners")}</h4>
        <Logo />
      </div>
      <SubScribe />
    </div>
  );
};

export default Home;
