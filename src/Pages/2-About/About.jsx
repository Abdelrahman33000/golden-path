import React from "react";
import CountUp from "react-countup";

import Carousel from "react-bootstrap/Carousel";
import img from "../../components/images/cameraabout.png";
import img2 from "../../components/images/slide1.jpg";
import visionImg from "../../components/images/Vision.jpg";
import missionImg from "../../components/images/Mission.jpg";
import img3 from "../../components/images/Scamera.jpg";
import {
  FireExtinguisher,
  Beenhere,
  CameraRoll,
  Cottage,
  Engineering,
  LaptopChromebook,
  LocalPhone,
  TaskAlt,
} from "@mui/icons-material";
import "./About.css";
import { useTranslation } from "react-i18next";
import SocialMediaList from "../../components/SocialMediaList/SocialMediaList";

const About = () => {
  const { t } = useTranslation();

  const servicesList = [
    {
      idName: "Security Solutions",
      icon: <Beenhere style={{ fontSize: "45px" }} />,
      title: t("Security Solutions Title"),
      description: t("Security Solutions Description"),
    },
    {
      idName: "Unified Communications",
      icon: <Cottage style={{ fontSize: "45px" }} />,
      title: t("Unified Communications Title"),
      description: t("Unified Communications Description"),
    },
    {
      idName: "ITC Infrastructure",
      icon: <CameraRoll style={{ fontSize: "45px" }} />,
      title: t("ITC Infrastructure Title"),
      description: t("ITC Infrastructure Description"),
    },
    {
      idName: "Fire Alarm",
      icon: <FireExtinguisher style={{ fontSize: "45px" }} />,
      title: t("Fire Alarm Title"),
      description: t("Fire Alarm Description"),
    },
  ];

  return (
    <div>
      <Carousel fade className="Carousel">
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
      </Carousel>

      <div
        className="d-flex justify-content-around my-5 mx-3"
        style={{ flexWrap: "wrap" }}
      >
        {servicesList.map((item) => (
          <div className=" col-lg-3 col-md-5 col-10 p-2 py-3">
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
        className="my-5 align-items-center rounded-5 shadow-lg row"
        style={{
          margin: "auto",
          textAlign: "left",
          backgroundColor: "#bcbcb761",
          width: "85%",
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
        <div className="col-lg-5 py-3" style={{ textAlign: "justify" }}>
          <h1>{t("Our Vision Title")}</h1>
          <p>{t("Our Vision Description")}</p>
          <div className="">
            {/* <p className="bg-danger">
              <TaskAlt /> Lorem ipsum dolor sit amet.
            </p>
            <p className="bg-danger">
              <TaskAlt /> Lorem ipsum dolor sit amet.
            </p> */}
            <SocialMediaList />
          </div>
        </div>
      </div>

      <div
        className="my-5 align-items-center rounded-5 shadow-lg row"
        style={{
          margin: "auto",
          textAlign: "left",
          backgroundColor: "#bcbcb761",
          width: "85%",
        }}
      >
        <div
          className="col-lg-5 py-3 px-4"
          style={{ flexGrow: "1", textAlign: "justify" }}
        >
          <h1>{t("Our Mission Title")}</h1>
          <p>
            {t("Our Mission Description")}
            {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            quae <br /> repellendus ea! Explicabo nemo a quisquam error
            molestiae, reiciendis <br /> tempora veniam molestias voluptatem,
            magni est numquam quibusdam <br /> deserunt sapiente cumque? */}
          </p>
          <div>
            {/* <p className="bg-danger">
              <TaskAlt /> Lorem ipsum dolor sit amet.
            </p>
            <p className="bg-danger">
              <TaskAlt /> Lorem ipsum dolor sit amet.
            </p> */}
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
      </div>

      <div
        className="count px-5 py-3 m-auto"
        style={{ flexWrap: "wrap", alignItems: "center", textAlign: "center" }}
      >
        <div
          className="bg-dark p-3 count1 rounded-4 border border-2 border-danger"
          style={{ boxShadow: "5px 5px 10px #ffa200" }}
        >
          <button className="btn5 py-3 rounded-4 px-5 my-3">
            COMPANY FACTS
          </button>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Numquam, accusamus.
          </p>
        </div>

        <div
          className="d-flex p-5 "
          style={{ gap: "30px", fontSize: "30px", flexWrap: "wrap" }}
        >
          <div
            className="bg-light  count1 text-dark rounded-5 px-5 py-3"
            style={{ flexDirection: "column", textAlign: "center" }}
          >
            <Beenhere style={{ fontSize: "50px", display: "block" }} />
            <CountUp className="" start={0} end={100} delay={2} duration={20} />
          </div>

          <div
            className="bg-light count1 text-dark rounded-5 px-5 py-3"
            style={{ flexDirection: "column", textAlign: "center" }}
          >
            <Engineering style={{ fontSize: "50px", display: "block" }} />
            <CountUp className="" start={0} end={200} delay={2} duration={20} />
          </div>
          <div
            className="bg-light  count1 text-dark rounded-5 px-5 py-3"
            style={{ flexDirection: "column", textAlign: "center" }}
          >
            <LaptopChromebook style={{ fontSize: "50px", display: "block" }} />
            <CountUp className="" start={0} end={120} delay={2} duration={20} />
          </div>
          <div
            className="bg-light  count1 text-dark rounded-5 px-5 py-3"
            style={{ flexDirection: "column", textAlign: "center" }}
          >
            <LocalPhone style={{ fontSize: "50px", display: "block" }} />
            <CountUp className="" start={0} end={150} delay={2} duration={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
