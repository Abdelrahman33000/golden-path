import { useTranslation } from "react-i18next";
import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";
import styles from "./SocialMediaList.module.css";

const SocialMediaList = () => {
  const { t } = useTranslation();

  const socialList = [
    {
      idName: "facebook",
      icon: <FaFacebook color="#4267B2" />,
      link: "https://www.facebook.com/profile.php?id=100094296410307",
    },
    {
      idName: "instagram",
      icon: <FaInstagram color="black" />,
      // icon: <FaInstagram color="#833AB4" />,
      link: "https://www.instagram.com/golden_paths22/?hl=ar",
    },
    {
      idName: "youtube",
      icon: <FaYoutube color="#FF0000" />,
      link: "https://www.youtube.com/channel/UCokek5CTmhTipkOdNFHSAWQ",
    },
    {
      idName: "tiktok",
      icon: <FaTiktok color="black" />,
      link: "https://www.tiktok.com/@golden_path22",
    },
    {
      idName: "linkedin",
      icon: <FaLinkedin color="#004182" />,
      link:
        "https://www.linkedin.com/company/99863094/admin/feed/posts/?feedType=following",
    },
  ];

  return (
    <div className="d-flex flex-column flex-sm-row gap-2 justify-content-between align-items-center py-2 w-100">
      <span className="fw-semibold">{t("Stay Connected")}</span>
      <div
        dir="ltr"
        className="d-flex align-items-center justify-content-center gap-1"
      >
        {socialList.map((item) => (
          // <span
          //   key={item.idName}
          //   className={styles.icon}
          //   onClick={() => console.log(item.idName)}
          // >
          <a
            key={item.idName}
            className={styles.icon}
            //  onClick={() => console.log(item.idName)}
            href={item.link}
            // className="dd-flex align-items-center justify-content-center"
          >
            {item.icon}
          </a>
          // </span>
        ))}
        {/* <span
          className="icon-instagram me-2   icon"
          onClick={() => console.log("instagram")}
        /> */}
        {/* <span
          className="icon-linkedin2 me-2   icon"
          onClick={() => console.log("linkedin")}
        /> */}
        {/* <span
          className="icon-github me-2   icon"
          onClick={() => console.log("github")}
        /> */}
        {/* <span
          className="icon-youtube me-2   icon"
          onClick={() => console.log("youtube")}
        /> */}
        {/* <span
          className="icon-facebook1    icon "
          onClick={() => console.log("facebook")}
        /> */}
      </div>
    </div>
  );
};

export default SocialMediaList;
