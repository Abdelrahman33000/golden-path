import React from "react";
import "./ContactUs.css";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";

import contact from "../../animation/contact.json";
import EmailFormComponent from "../../components/EmailFormComponent/EmailFormComponent";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div className="container-fluide  mt-0">
      <div className="  text-center p-4">
        <h2>
          <b className="">{t("Contact Us")}</b>
        </h2>
        <p>{t("We’re always here for you to give best service")} </p>
      </div>

      <div className="container-fluide side rounded-5   mt-5 ">
        <div className="row">
          <div className="side1  mx-3  mb-5 rounded-4 mt-2 shadow-lg  col-lg-3">
            <Lottie animationData={contact} />

            <h4 className="p-4">{t("Call Back Request")}</h4>
            <h6 className="mx-4 mb-4">
              {t("Simply leave your contact number, We will call you back.")}
            </h6>
            <div className="mx-4">
              <p className="  icon-message  "> info@gmail.com</p> <br />
              <p className=" icon-mobile "> +123456789</p>
              <div className="d-flex justify-content-between my-3 px-1 py-3">
                <p>{t("Stay Connected")}</p>
                <div>
                  <span className="icon-instagram me-2   icon" />
                  <span className="icon-linkedin2 me-2   icon" />
                  <span className="icon-github me-2   icon" />
                  <span className="icon-youtube me-2   icon" />
                  <span className="icon-facebook1    icon " />
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluide  my-5 mx-2 shadow-lg   rounded-4 mt-2 col-lg-8">
            <EmailFormComponent />
          </div>
        </div>
      </div>

      <iframe
        title="Egypt"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7075996.015790168!2d24.49644870755294!3d30.005968900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585721b6b5448d%3A0x808c7d87826a88a7!2sNewYorker!5e0!3m2!1sen!2seg!4v1703787357411!5m2!1sen!2seg"
        height="450"
        style={{ width: "100vw", border: "2px solid #000" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default ContactUs;
