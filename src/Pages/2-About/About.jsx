import React, { useEffect } from "react";
import CountUp from "react-countup";
import Carousel from "react-bootstrap/Carousel";
import img from "../../components/images/cameraabout.png";
import img2 from "../../components/images/slide1.jpg";
import visionImg from "../../components/images/Vision.jpg";
import missionImg from "../../components/images/Mission.jpg";
import img3 from "../../components/images/Scamera.jpg";
import {
  Beenhere,
  Engineering,
  LaptopChromebook,
  LocalPhone,
} from "@mui/icons-material";
import { MdOutlineSecurity } from "react-icons/md";
import { SiInstructure } from "react-icons/si";
import { RiAlarmWarningFill } from "react-icons/ri";
import { FaHandHoldingHand } from "react-icons/fa6";

import "./About.css";
import { useTranslation } from "react-i18next";
import SocialMediaList from "../../components/SocialMediaList/SocialMediaList";
import AboutUsEn from "../../components/images/About_Us_En.jpg";
import AboutUsAr from "../../components/images/About_Us_Ar.jpg";

const About = () => {
  const { t, i18n } = useTranslation();

  const servicesList = [
    {
      idName: "Security Solutions",
      icon: <MdOutlineSecurity style={{ fontSize: "45px" }} />,
      title: t("Security Solutions Title"),
      description: t("Security Solutions Description"),
    },
    {
      idName: "Unified Communications",
      icon: <FaHandHoldingHand style={{ fontSize: "45px" }} />,
      title: t("Unified Communications Title"),
      description: t("Unified Communications Description"),
    },
    {
      idName: "ITC Infrastructure",
      icon: <SiInstructure style={{ fontSize: "45px" }} />,
      title: t("ITC Infrastructure Title"),
      description: t("ITC Infrastructure Description"),
    },
    {
      idName: "Fire Alarm",
      icon: <RiAlarmWarningFill style={{ fontSize: "45px" }} />,
      title: t("Fire Alarm Title"),
      description: t("Fire Alarm Description"),
    },
  ];

  const aboutCardsList = [
    {
      title: t("Our Vision Title"),
      description: t("Our Vision Description"),
      image: visionImg,
    },
    {
      title: t("Our Mission Title"),
      description: t("Our Mission Description"),
      image: missionImg,
    },
  ];

  const countIconsList = [
    {
      icon: <Beenhere style={{ fontSize: "50px" }} />,
      count: <CountUp start={0} end={100} delay={2} duration={20} />,
    },
    {
      icon: <Engineering style={{ fontSize: "50px" }} />,
      count: <CountUp start={0} end={200} delay={2} duration={20} />,
    },
    {
      icon: <LaptopChromebook style={{ fontSize: "50px" }} />,
      count: <CountUp start={0} end={120} delay={2} duration={20} />,
    },
    {
      icon: <LocalPhone style={{ fontSize: "50px" }} />,
      count: <CountUp start={0} end={150} delay={2} duration={20} />,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* <Carousel fade className="Carousel">
        <Carousel.Item>
          <img
            src={img}
            alt=""
            text="First slide"
            style={{ width: "100%", height: "450px" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img3}
            alt=""
            text="Second slide"
            style={{ width: "100%", height: "450px" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img2}
            alt=""
            text="Third slide"
            style={{ width: "100%", height: "450px" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}

      <div className="w-100">
        <img
          src={i18n.language == "en" ? AboutUsEn : AboutUsAr}
          alt=""
          width={"100%"}
          height={"auto"}
        />
      </div>

      {aboutCardsList.map((card, index) => (
        <div
          className={`my-5 align-items-center rounded-5 shadow col-11 col-md-10 d-flex flex-column ${
            index == 0 ? "flex-lg-row" : "flex-lg-row-reverse"
          }`}
          style={{
            margin: "auto",
            // textAlign: "left",
            backgroundColor: "#bcbcb761",
            // width: "85%",
            // height:'330px'
          }}
        >
          <div className="col-lg-5 h-100 p-3">
            <img
              src={card.image}
              alt="img"
              width={"100%"}
              height={"100%"}
              style={{ minHeight: "260px", minWidth: "260px" }}
              className="rounded-5 shadow"
            />
          </div>
          <div
            className="col-lg-5 py-4 px-md-5 px-4"
            style={{ flexGrow: "1", textAlign: "justify" }}
          >
            <h1>{card.title}</h1>
            <p>{card.description}</p>
            <div>
              <SocialMediaList />
            </div>
          </div>
        </div>
      ))}

      {/* <div
        className="my-5 align-items-center rounded-5 shadow row col-11 col-md-10 border border-danger "
        style={{
          margin: "auto",
          textAlign: "left",
          backgroundColor: "#bcbcb761",
          // width: "85%",
        }}
      >
        <div className="col-lg-5">
          <img
            src={visionImg}
            alt="img"
            className=" rounded-5 p-3 "
            style={{ width: "100%", height: "300px" }}
          />
        </div>
        <div className="col-lg-5 py-3 px-d-5 px-3" style={{ flexGrow: "1", textAlign: "justify" }}>
          <h1>{t("Our Vision Title")}</h1>
          <p>{t("Our Vision Description")}</p>
          <div >
            <p className="bg-danger">
              <TaskAlt /> Lorem ipsum dolor sit amet.
            </p>
            <p className="bg-danger">
              <TaskAlt /> Lorem ipsum dolor sit amet.
            </p>
            <SocialMediaList />
          </div>
        </div>
      </div> */}

      {/* <div
        className="my-5 align-items-center rounded-5 shadow d-flex flex-column-reverse flex-row-md-reverse col-11 col-md-10"
        style={{
          margin: "auto",
          textAlign: "left",
          backgroundColor: "#bcbcb761",
          // width: "85%",
        }}
      >
        <div
          className="col-lg-5 py-3 px-md-5 px-3"
          style={{ flexGrow: "1", textAlign: "justify" }}
        >
          <h1>{t("Our Mission Title")}</h1>
          <p>
            {t("Our Mission Description")}
          
          </p>
          <div>
            <p className="bg-danger">
              <TaskAlt /> Lorem ipsum dolor sit amet.
            </p>
            <p className="bg-danger">
              <TaskAlt /> Lorem ipsum dolor sit amet.
            </p>
            <SocialMediaList />
          </div>
        </div>
        <div className="col-lg-5 ">
          <img
            src={missionImg}
            alt="img"
            className=" rounded-5 p-3 "
            style={{ width: "100%", height: "300px" }}
          />
        </div>
      </div> */}
      <div
        className="d-flex justify-content-around my-5 mx-3"
        style={{ flexWrap: "wrap" }}
      >
        {servicesList.map((item) => (
          <div className=" col-lg-3 col-md-5 col-11 p-2 py-3">
            <div className="card0  rounded-5 shadow py-3 px-1 h-100">
              {item.icon}
              <h5 className="my-2">{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
        {/* <div className="card0    rounded-5 shadow-lg">
          <Beenhere style={{ fontSize: "45px" }} />
          <h5 className="my-2">Services</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit . Iusto
            quasi assumenda repellendus ad pariatur, enim earum reiciendis,
            dolore laborum, magni
          </p>
        </div>

        <div className="card0  rounded-5 shadow-lg">
          <Cottage style={{ fontSize: "45px" }} />
          <h5 className="my-2">Services</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            assumenda repellendus ad pariatur, enim earum reiciendis, dolore
            laborum, magni
          </p>
        </div>

        <div className="card0  rounded-5 shadow-lg">
          <CameraRoll style={{ fontSize: "45px" }} />
          <h5 className="my-2">Services</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            assumenda repellendus ad pariatur, enim earum reiciendis, dolore
            laborum, magni
          </p>
        </div>

        <div className="card0  rounded-5 shadow-lg">
          <Balance style={{ fontSize: "45px" }} />
          <h5 className="my-2">Services</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            assumenda repellendus ad pariatur, enim earum reiciendis, dolore
            laborum, magni
          </p>
        </div> */}
      </div>
      <div
        className="count px-5 py-3 m-auto"
        style={{ flexWrap: "wrap", alignItems: "center", textAlign: "center" }}
      >
        <div
          className="bg-dark p-3 count1 rounded-4"
          style={{ boxShadow: "5px 5px 10px #ffa200" }}
        >
          <button className="btn5 py-3 rounded-4 px-5 my-3">
            {t("COMPANY FACTS")}
          </button>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Numquam, accusamus.
          </p> */}
        </div>

        <div
          className="d-flex flex-wrap align-items-center justify-content-center p-5"
          style={{ gap: "30px", fontSize: "50px" }}
        >
          {countIconsList.map((item) => (
            <div
              className="d-flex flex-column align-items-center justify-content-center bg-light count1 text-dark rounded-5 px-5 py-3"
              style={{ flexDirection: "column", textAlign: "center" }}
            >
              <span>{item.icon}</span>
              <span>{item.count}</span>
            </div>
          ))}
          {/* <div
            className="bg-light  count1 text-dark rounded-5 px-5 py-3"
            style={{ flexDirection: "column", textAlign: "center" }}
          >
            <Beenhere style={{ fontSize: "50px", display: "block" }} />
            <CountUp className="" start={0} end={100} delay={2} duration={20} />
          </div> */}

          {/* <div
            className="bg-light count1 text-dark rounded-5 px-5 py-3"
            style={{ flexDirection: "column", textAlign: "center" }}
          >
            <Engineering style={{ fontSize: "50px", display: "block" }} />
            <CountUp className="" start={0} end={200} delay={2} duration={20} />
          </div> */}
          {/* <div
            className="bg-light  count1 text-dark rounded-5 px-5 py-3"
            style={{ flexDirection: "column", textAlign: "center" }}
          >
            <LaptopChromebook style={{ fontSize: "50px", display: "block" }} />
            <CountUp className="" start={0} end={120} delay={2} duration={20} />
          </div> */}
          {/* <div
            className="bg-light  count1 text-dark rounded-5 px-5 py-3"
            style={{ flexDirection: "column", textAlign: "center" }}
          >
            <LocalPhone style={{ fontSize: "50px", display: "block" }} />
            <CountUp className="" start={0} end={150} delay={2} duration={20} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
