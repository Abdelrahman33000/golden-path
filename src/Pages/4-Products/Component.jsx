import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Component = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <TabPanel value={props.value} index={props.index}>
        <div className="d-flex" style={{ gap: "30px", flexWrap: "wrap" }}>
          {props.products.map((product) => (
            <div
              key={product.id}
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
                  src={product.img}
                  alt=""
                  width={"100%"}
                  height={250}
                  className="rounded-5 object-fit-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
                    e.target.onError = null;
                  }}
                />
              }
              <h3 style={{ padding: "10px 0" }}>{product.name}</h3>
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
                {product.shortDescription}
                <div className="d-flex justify-content-center my-3"></div>{" "}
              </p>
              <Link
                to={`/productDetails/${product.id}`}
                style={{ textDecoration: "none", color: "#000" }}
                className="btn5 py-1 px-3 rounded-3"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </TabPanel>
    </div>
  );
};

export default Component;
