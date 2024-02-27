import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { AddLink, TravelExplore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./projects.css";

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
  const navigate = useNavigate();
  return (
    <div>
      <CustomTabPanel value={props.value} index={props.index}>
        <div style={{ gap: "30px", flexWrap: "wrap" }}>
          <div className="row">
            {props.projects.map((project) => (
              <>
                <div
                  className="col-md-5 col-12 col-lg-4 mx-auto my-3"
                  onClick={() => navigate(`/ProjectDetails/${project.id}`)}
                  style={{ cursor: "pointer" }}
                >
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

                    <div className="box-content">
                      <h3 className="title">{project.name}</h3>
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
              </>
            ))}
          </div>
        </div>
      </CustomTabPanel>
    </div>
  );
};

export default Component1;
