import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { AddLink, TravelExplore } from "@mui/icons-material";
import "./projects.css";
import imageTest from "../../components/images/cam1.jpeg";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Component1 = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <CustomTabPanel value={props.value} index={props.index}>
        {/*         
       <div className='d-flex' style={{gap:"30px" , flexWrap:"wrap"}}>
      <div class="row">
          <div class="col-md-4 col-sm-6">
              <div class="box">
                  <img src={img5} alt='' />
                  <div class="box-content">
                  <h3 class="title">Project </h3>
                      <span class="post">Web designer</span>
                  </div>
                  <ul class="icon">
                  <li><Link to="/Project1"><AddLink /></Link></li>
                  <li><Link href="#"><TravelExplore /></Link></li>
                  </ul>
              </div>
          </div>
  
  
  
      </div>
  
  
    </div> */}

        <div
          className="d-flex container"
          style={{ gap: "30px", flexWrap: "wrap" }}
        >
          <div className="row">
            {props.projects.map((project) => (
              <>
                {/* <div classNameName="d-flex" style={{ gap: "30px", flexWrap: "wrap" }}> */}
                <div className="col-md-5 col-12 col-lg-4 mx-auto my-3">
                  <div className="box">
                    <img
                      src={project.img}
                      alt=""
                      width={"100%"}
                      onError={(e) => {
                        e.target.src =
                          "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
                        e.target.onError = null;
                      }}
                    />
                    {/* <img src={imageTest} alt="" width={"100%"} /> */}
                    <div className="box-content">
                      <h3 className="title">{project.name}</h3>
                      {/* <span className="post">Web designer</span> */}
                    </div>
                    <ul className="icon">
                      <li>
                        <Link to={`/ProjectDetails/${project.id}`}>
                          <AddLink />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <TravelExplore />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* </div> */}
                {/* <div
                key={project._id}
                className="card  mx-auto rounded-5 shadow-lg"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  overflow: "hidden",
                  width: "300px",
                  padding: "10px",
                  height: "400px",
                }}
              >
                {
                  <img
                    src={project?.image}
                    alt=""
                    width={"100%"}
                    height={200}
                    className="rounded-5"
                  />
                }
                <h3 style={{ padding: "10px 0" }}>{`${
                  i18n.language === "en" ? project.name_en : project.name_ar
                }`}</h3>
                <p
                  style={{
                    opacity: ".5",
                    fontSize: "15px",
                    width: "100%",
                    textAlign: "justify",
                    padding: "0 20px",
                    textOverflow: "ellipsis",
                    overflowY: "hidden",
                  }}
                >
                  {`${
                    i18n.language === "en"
                      ? project.description_en
                      : project.description_ar
                  }`}
                  <div className="d-flex justify-content-center my-3"></div>{" "}
                </p>
                <Link
                  to={`/projectDetails/${project._id}`}
                  style={{ textDecoration: "none", color: "#000" }}
                  className="btn5 py-1 px-3 rounded-3"
                >
                  Read More
                </Link>
              </div> */}
              </>
            ))}
          </div>
        </div>
      </CustomTabPanel>
    </div>
  );
};

export default Component1;
