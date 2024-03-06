import React, { useContext, useEffect } from "react";
import "./ContactUs.css";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";

import contact from "../../animation/contact.json";
import EmailFormComponent from "../../components/EmailFormComponent/EmailFormComponent";
import SocialMediaList from "../../components/SocialMediaList/SocialMediaList";
import { GlobalContext } from "../../Context/GlobalContext";

const ContactUs = () => {
  const { t } = useTranslation();
  const { emailGlobal, phoneGlobal } = useContext(GlobalContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-fluide  mt-0">
      <div className="  text-center p-4">
        <h2>
          <b className="">{t("Contact Us")}</b>
        </h2>
        <p>{t("We’re always here for you to give best service")} </p>
      </div>

      <div className="container-fluide side rounded-5  mt-5 ">
        <div className="d-md-flex justify-content-evenly">
          <div className="side1  mx-3  mb-5 rounded-4 mt-2 shadow  col-lg-3 col-md-4">
            <Lottie animationData={contact} />

            <h4 className="p-4">{t("Call Back Request")}</h4>
            <h6 className="mx-4 mb-4">
              {t("Simply leave your contact number, We will call you back.")}
            </h6>
            <div className="mx-4">
              <p className="  icon-message  "> {emailGlobal}</p> <br />
              <p className=" icon-mobile "> {phoneGlobal}</p>
              {/* <div className="d-flex justify-content-between my-3 px-1 py-3"> */}
              {/* <p>{t("Stay Connected")}</p> */}
              <div className="py-2 pb-3">
                <SocialMediaList />
              </div>
              {/* <div>
                  <span className="icon-instagram me-2   icon" />
                  <span className="icon-linkedin2 me-2   icon" />
                  <span className="icon-github me-2   icon" />
                  <span className="icon-youtube me-2   icon" />
                  <span className="icon-facebook1    icon " />
                </div> */}
              {/* </div> */}
            </div>
          </div>

          <div className=" p-2 px-3  my-5 mx-2 shadow   rounded-4 mt-2 col-lg-8 col-md-7">
            <EmailFormComponent />
          </div>
        </div>
      </div>

      <iframe
        title="Egypt"
        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7075996.015790168!2d24.49644870755294!3d30.005968900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585721b6b5448d%3A0x808c7d87826a88a7!2sNewYorker!5e0!3m2!1sen!2seg!4v1703787357411!5m2!1sen!2seg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4913934715946!2d46.69011440662291!3d24.682636458789297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0367ff15ea65%3A0xf4ec1f65d1b41660!2s3857%20Olaya%20St%2C%20Al%20Olaya%2C%20Riyadh%2012211%2C%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1708965024154!5m2!1sen!2seg"
        height="450"
        style={{ width: "100vw", border: "1px solid #000" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
export default ContactUs;
