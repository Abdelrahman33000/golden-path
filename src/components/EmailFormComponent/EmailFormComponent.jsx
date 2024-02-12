import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import "./EmailFormComponent.css";

const EmailFormComponent = () => {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [messageAlert, setMessageAlert] = useState({
    status: null,
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "";
    const templateId = "";
    const userId = "";

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
        afterSendEmail({
          status: response.status,
          message:
            i18n.language == "en"
              ? "Email sent successfully."
              : "تم ارسال الميل بنجاح.",
        }).then(() => resetData());
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        afterSendEmail({
          status: error.status,
          message:
            i18n.language == "en"
              ? "Error sending email, try again later."
              : "حدث خطا اثناء ارسال الميل الرجاء المحاولة مرة اخرى في وقت لاحق.",
        });
      });
  };

  function afterSendEmail({ status, message }) {
    return new Promise(function (resolve, reject) {
      setMessageAlert({
        status: status,
        message: message,
      });

      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }

  const resetData = () => {
    setMessageAlert({
      status: null,
      message: "",
    });
    setFormData({
      full_name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleInputChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  return (
    <form className="contact " onSubmit={handleSubmit}>
      <div className="d-flex justify-content-around my-5  ">
        <div className="me-2 form-control">
          <div>
            <label>{t("Full Name")}</label>
          </div>
          <input
            type="text"
            className="inp mt-3"
            value={formData.full_name}
            onChange={(e) => handleInputChange(e, "full_name")}
            style={{ outline: "none" }}
            required
          />
        </div>
        <div className="me-2  form-control">
          <div>
            <label>{t("Email")}</label>
          </div>
          <input
            type="email"
            className="inp mt-3"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
            required
          />
        </div>
      </div>

      <div className="d-flex justify-content-around my-5">
        <div className="me-2 form-control ">
          <div>
            <label>{t("Phone Number")}</label>
          </div>
          <input
            type="tel"
            className="inp mt-3"
            value={formData.phone}
            onChange={(e) => handleInputChange(e, "phone")}
            required
          />
        </div>
        <div className="me-2 form-control">
          <div>
            <label>{t("Subject")}</label>
          </div>
          <input
            type="text"
            className="inp mt-3"
            value={formData.subject}
            onChange={(e) => handleInputChange(e, "subject")}
            required
          />
        </div>
      </div>
      <div className="m-3">
        <div className="mt-5 mb-3 text-light"></div>
        <textarea
          placeholder={t("Message...")}
          className="form-control rounded-5  p-4  w-100"
          style={{
            backgroundColor: "#b4b4ad",
            borderBottom: "3px solid black",
          }}
          value={formData.message}
          onChange={(e) => handleInputChange(e, "message")}
          required
        ></textarea>
      </div>

      <div
        className=" my-5 px-3"
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {messageAlert.message && (
          <div className="w-100">
            <span
              className={`w-100 alert alert-${
                messageAlert.status == 200 ? "success" : "danger"
              } p-2 m-3`}
            >
              {messageAlert.message}
            </span>
          </div>
        )}
        <button type="submit" className="btn5 p-3 my-3 rounded-4 ">
          {t("Submit")}
        </button>
      </div>
    </form>
  );
};

export default EmailFormComponent;
