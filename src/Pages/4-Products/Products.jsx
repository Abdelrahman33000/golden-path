import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "./products.css";
import { useTranslation } from "react-i18next";
import Component from "./Component";
// import Rating from '@mui/material/Rating';
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import img7 from "../../components/images/cam3.jpg";
import { ArrowBackIosNew, ArrowForwardIos, Search } from "@mui/icons-material";
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
  const [pageNumber, setPageNumber] = useState(1);
  const [paginatePageCount, setPaginateCount] = useState(1);
  const [productsSliceList, setProductsSliceList] = useState([]);
  // const [productsList, setProductsList] = useState([]);
  // const [categoryList, setCategoryList] = useState([]);
  const [label, setLabel] = useState(0);
  const [value, setValue] = React.useState(0);

  const { t } = useTranslation();
  const { dealWithAPIData, isLoading, productsList, categoryProductsList } =
    useContext(GlobalContext);

  const pageItemsCount = 8;

  // useEffect(() => {
  //   dealWithAPIData({
  //     endpoint: `categories-for-products`,
  //   }).then((result) => setCategoryList([...result?.data]));

  //   dealWithAPIData({
  //     endpoint: `products`,
  //   }).then((result) => {
  //     setProductsList([...result?.data]);
  //     setProductsSliceList([...result?.data]);
  //     setPaginateCount(Math.ceil(result?.data?.length / pageItemsCount));
  //   });
  // }, []);

  useEffect(() => {
    setProductsSliceList([...productsList]);
    setPaginateCount(Math.ceil(productsList.length / pageItemsCount));
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
    setPaginateCount(Math.ceil(productsSliceList.length / pageItemsCount));
  }, [label]);

  // useEffect(() => {
  //   dealWithAPIData({
  //     endpoint: `paginate/products?page=${pageNumber}`,
  //     // version: 0,
  //   }).then((result) => {
  //     console.log(result, "result products slice");
  //     setProductsSliceList([...result?.data.data]);
  //     setPaginateCount(result.data.meta.last_page);
  //   });
  // }, [pageNumber]);

  // useEffect(() => {
  //   fetch("https://dash-board-sspy.onrender.com/api/all-products")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.data);
  //       const data1 = data.data;
  //       setProducts(data1);
  //       setProductPager(data1);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("https://dash-board-sspy.onrender.com/api/all-category?type=product")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.data);
  //       const data2 = data.data;
  //       setCategories(data2);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (label == 0) {
  //     setProductPager(products);
  //   } else {
  //     const category = categories[label - 1];
  //     console.log(category, "jjjjjjjjjjjjjj");
  //     console.log(products, "jjjjjjjkkkkkkkkkk");

  //     // عدلى دى يااااا زلفى
  //     const data = products.filter(
  //       (item) => item.category._id === category._id
  //     );
  //     setProductPager(data);
  //   }
  // }, [label]);

  // const top100Films = [
  //   { title: 'pro1', year: 1994 },
  //   { title: 'pro2', year: 1972 },
  //   { title: 'pro3', year: 1974 },
  //   { title: 'pro4', year: 2008 },
  //   { title: 'pro5', year: 1957 },
  //   { title: "pro6", year: 1993 },
  //   { title: 'pro7', year: 1994 },
  //   {
  //     title: 'pro8',
  //     year: 2003,
  //   },
  // ]

  // const filterOptions = createFilterOptions({
  //   matchFrom: 'start',
  //   stringify: (option) => option.title,
  // });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const { t} = useTranslation();
  // document.body.dir = i18n.dir();

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

        {/* <Autocomplete className='pe-5  ms-5 '
      id="filter-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      sx={{ width: 300 , zIndex: 0 }}
      renderInput={(params) => <TextField {...params} label="Custom filter" />}
    /> */}
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
          // className="border border-2 border-danger"
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
            {/* <Tab className='tab'label="Item one" {...a11yProps(1)} />
          <Tab className='tab' label="Item Two" {...a11yProps(2)} />
          <Tab className='tab' label="Item Three" {...a11yProps(3)} />
          <Tab className='tab' label="Item Four" {...a11yProps(4)} /> */}
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
                // pageCount={5}
                onPageChange={(page) => {
                  setPageNumber(page.selected + 1);
                }}
              />
            </div>
          </>
        )}

        {/* <div
          className="my-5 border border-success"
          style={{ textAlign: "center" }}
        >
          <button className="btn5 mx-3 p-2">
            <ArrowBackIosNew />
          </button>
          <button className="btn5 mx-3 py-3 px-4"> 01 </button>
          <button className="btn5 mx-3 py-3 px-4"> 02 </button>
          <button className="btn5 mx-3 p-2">
            <ArrowForwardIos />
          </button>
        </div> */}
      </Box>
    </div>
  );
};

export default Products;

{
  /* 
       <TabPanel value={value} index={2}>
        
        
        
<div className='d-flex' style={{gap:"30px" , flexWrap:"wrap"}}>
<div className='card  cd5 rounded-5 shadow-lg' style={{ display:"flex" ,alignItems:"center" }}>
  <img src={img7} alt='' width={300} height={300} className='rounded-5 p-2' />
  
  <h5>Product 1</h5>
  <p>Lorem ipsum dolor sit amet.</p>
  <p> <button className='btn5 py-1 px-3 rounded-3'>Read More</button></p>
  
  </div>

  <div className='card  cd5 rounded-5 shadow-lg' style={{ display:"flex" ,alignItems:"center" }}>
  <img src={img7} alt='' width={300} height={300} className='rounded-5 p-2' />
  
  <h5>Product 1</h5>
  <p>Lorem ipsum dolor sit amet.</p>
  <p> <button className='btn5 py-1 px-3 rounded-3'>Read More</button></p>
  
  </div>





</div>
       </TabPanel>
       <TabPanel value={value} index={3}>
         Item Four
       </TabPanel>

       <TabPanel value={value} index={4}>
         Item Five
       </TabPanel>

       <TabPanel value={value} index={5}>
         Item Six
       </TabPanel>

       <TabPanel value={value} index={6}>
         Item Seven
       </TabPanel> */
}

{
  /* 
       <Tabs
       
       className='col-lg-2 mb-5 mt-4 tabs5 mx-5 '
         orientation="vertical"
         variant="scrollable"
         value={value}
         onChange={handleChange}
         aria-label="Vertical tabs example"
         
       >

         <Tab className='categories' label="Item One" {...a11yProps(0)} />
         <Tab className='categories' label="Item Two" {...a11yProps(1)} />
         <Tab className='categories' label="Item Three" {...a11yProps(2)} />
         <Tab className='categories' label="Item Four" {...a11yProps(3)} />
         <Tab className='categories' label="Item Five" {...a11yProps(4)} />
         <Tab className='categories' label="Item Six" {...a11yProps(5)} />
         <Tab className='categories' label="Item Seven" {...a11yProps(6)} />
       </Tabs> */
}
