import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./products.css";
import { useTranslation } from "react-i18next";
import Component from "./Component";

import { Search } from "@mui/icons-material";
import { GlobalContext } from "../../Context/GlobalContext";
import PaginateComponent from "../../components/PaginateComponent/PaginateComponent";
import Loader from "../../components/Loader/Loader";

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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Products = () => {
  const pageItemsCount = 8;
  const { dealWithAPIData, isLoading, productsList, categoryProductsList } =
    useContext(GlobalContext);
  const [pageNumber, setPageNumber] = useState(1);
  const [paginatePageCount, setPaginateCount] = useState(
    Math.ceil(productsList.length / pageItemsCount)
  );
  const [productsSliceList, setProductsSliceList] = useState([]);

  const [label, setLabel] = useState(0);
  const [value, setValue] = React.useState(0);

  const { t } = useTranslation();

  useEffect(() => {
    setProductsSliceList([...productsList]);
  }, [productsList]);

  useEffect(() => {
    if (label == 0 && productsList.length !== 0) {
      setProductsSliceList([...productsList]);
    } else {
      setProductsSliceList([
        ...productsList.filter(
          ({ category_id }) => category_id == categoryProductsList[label - 1].id
        ),
      ]);
    }
  }, [label]);

  useEffect(() => {
    if (productsSliceList.length !== 0) {
      setPaginateCount(Math.ceil(productsSliceList.length / pageItemsCount));
    } else {
      setPaginateCount(1);
    }
  }, [label, productsSliceList]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="my-5" style={{ flexWrap: "wrap" }}>
      <h1
        className="products text-center"
        style={{ fontFamily: "Bodoni Moda" }}
      >
        {t("Our Products")}
      </h1>
      <div
        className="d-flex align-items-center my-5"
        style={{ flexWrap: "wrap" }}
      >
        <div className=" mx-5" style={{ flexGrow: "1" }}>
          <div className="input-group " dir="rtl">
            <button className="icon1  ">
              <Search />
            </button>

            <input
              className="rounded-4 px-5 "
              type="search"
              placeholder={t("search...")}
            />
          </div>
        </div>
      </div>
      <Box
        className="row"
        sx={{
          bgcolor: "background.paper",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <h3 className="text-dark mx-5">{t("Categories")}</h3>

        <Box
          sx={{
            borderColor: "divider",
            display: "flex",
            mx: "auto",
            justifyContent: "center",
            borderBottom: "3px solid #ffa200",
            borderTop: "3px solid #ffa200",
          }}
        >
          <Tabs
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ textAlign: "center" }}
          >
            <Tab
              className="tab"
              onClick={() => {
                setLabel(0);
              }}
              label={t("CategoryAll")}
              {...a11yProps(0)}
            />
            {categoryProductsList.map((category, index) => (
              <Tab
                className="tab"
                onClick={() => {
                  setLabel(index + 1);
                }}
                key={category.id}
                label={category.name}
                {...a11yProps(`${index + 1}`)}
              />
            ))}
          </Tabs>
        </Box>

        {productsList.length == 0 ? (
          <Loader />
        ) : (
          <>
            <div className="col-lg-9 mx-auto">
              <Component
                value={value}
                products={productsSliceList.slice(
                  pageItemsCount * (pageNumber - 1),
                  pageItemsCount * pageNumber
                )}
                index={label}
              />
            </div>

            <div className="my-2">
              <PaginateComponent
                pageCount={paginatePageCount}
                onPageChange={(page) => {
                  setPageNumber(page.selected + 1);
                }}
              />
            </div>
          </>
        )}
      </Box>
    </div>
  );
};

export default Products;
