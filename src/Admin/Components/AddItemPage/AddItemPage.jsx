import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  InputLabel,
  Box,
  useMediaQuery,
  Typography,
  IconButton,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { Add, CloudUpload, Delete } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import ToolbarTable from "../ToolbarTable/ToolbarTable";
import { useTranslation } from "react-i18next";
import Loader from "../Loader/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

import {
  FreeMode,
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import styles from "./AddItemPage.module.css";

const AddItemPage = ({
  itemType,
  inputsList,
  updateData,
  initialData,
  itemID,
}) => {
  // const { state } = useLocation();
  // const updateData = state[itemType] ? { ...state[itemType] } : {};

  const { i18n } = useTranslation();

  const [formData, setFormData] = useState({
    isInit: true,
    // ...initialData,
    // name_en: "",
    // name_ar: "",
    // description_en: "",
    // description_ar: "",
    // category: "",
    // image: "",
    // ...updateData,
  });

  const navigator = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [uploadedFile, setUploadedFile] = useState("");
  const [uploadedFilesList, setUploadedFilesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("has category");
    console.log(formData.category, "has category");

    getCategoryListDataApi();
    getItemObjectByID();
    console.log(formData, "sdhgfsdgfsdhgfh");
  }, []);

  function getItemObjectByID() {
    if (itemID !== "new") {
      fetch(`https://dash-board-sspy.onrender.com/api/${itemType}?id=${itemID}`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result, "get product by id");
          if (formData.hasOwnProperty("category")) {
            const holder = result.data.category;

            setFormData({
              ...result.data,
              isInit: false,
              category: holder?._id,
            });
          } else {
            setFormData({ ...result.data, isInit: false });
          }
        })
        .catch((error) => console.log(error, "error get product by id"));
    } else {
      setFormData({ ...initialData, isInit: false });
    }
  }

  async function getCategoryListDataApi() {
    console.log("hihi");
    if (itemType) {
      await fetch(
        `https://dash-board-sspy.onrender.com/api/all-category?type=${itemType}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data, "caregory data");
          // const found = data.data.find(
          //   ({ name_en }) => name_en === formData.category_en
          // );
          // formData.category = found?._id ? found._id : "";

          // console.log("found category");
          setCategoryList([...data.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  // useEffect(() => {
  //   const x = "8836-12-03T22:00:00.000Z";
  //   const date = x.split("T")[0];
  //   console.log(new Date(date).toISOString(), "new date");
  // }, []);
  // console.log(formData, "form data");
  // console.log(formData.image, "form data image");
  //   const handleChange = (e) => {
  //     const { name, value, type, checked } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: type === "checkbox" ? checked : value,
  //     }));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    inputsList.map(({ name }) => {
      if (name == "in_home") {
        formData[name] = e.target[name].checked;
        // formData[name] = false;
      } else {
        formData[name] = e.target[name].value;
      }
      console.log(e.target[name].value, name, "target");
      console.log(formData, "target");
      //   setFormData({ ...formData, [name]: e.target[name].value });
    });
    if (formData._id) {
      updateItemsToAPI();
    } else {
      createNewItemAPI();
    }
    // Handle form submission logic here
    // console.log("Form submitted:", formData);
  };

  async function createNewItemAPI() {
    // const formDataObj = new FormData();

    // for (let key in formData) {
    //   console.log(key, formData[key]);
    //   formDataObj.append(`${key}`, formData[key]);
    // }

    // console.log(formDataObj, "id");
    // console.log(formData.image, "id");

    const formDataObject = new FormData();
    for (let key in formData) {
      console.log(key, formData[key]);
      formDataObject.append(key, formData[key]);
    }
    // formDataObject.append("in_home", false);

    console.log(formDataObject, "object");

    await fetch(`https://dash-board-sspy.onrender.com/api/${itemType}`, {
      // mode: "no-cors",
      method: "POST",
      body: formDataObject,
      // headers: {
      //   "Content-Type": "application/json",
      //   // "Content-Type": "multipart/form-data",
      //   // "Access-Control-Allow-Origin ": "http://localhost:3000",
      // },
      // body: JSON.stringify({
      //   ...formData,
      // }),
      //   method: "POST",
      //   mode: "no-cors",
      //   body: JSON.stringify({ ...formData }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data create");
        if (data.status == "success") {
          navigator(`/admin/${itemType}`);
        } else {
          setErrorMessage(data.message);
          setIsLoading(false);
        }
      })
      .catch((error) => console.log(error, "error"));
  }

  async function updateItemsToAPI() {
    // console.log(listOfProducts[productIndex]._id, "id");
    console.log(formData, "id index");

    const formDataObject = new FormData();
    for (let key in formData) {
      console.log(key, formData[key]);
      formDataObject.append(key, formData[key]);
    }

    await fetch(
      `https://dash-board-sspy.onrender.com/api/${itemType}?id=${formData._id}`,
      {
        method: "PATCH",
        // headers: { "Content-Type": "application/json" },
        body: formDataObject,
        // body: JSON.stringify({
        //   ...formData,
        // }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data delete");
        if (data.status == "success") {
          navigator(`/admin/${itemType}`);
        } else {
          setErrorMessage(data.message);
          setIsLoading(false);
        }
      })
      .catch((error) => console.log(error, "error"));
  }

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    e.target.value = "";
    // const imageUrl = URL.createObjectURL(file);
    setFormData({ ...formData, image: file });
    setUploadedFile(URL.createObjectURL(file));

    console.log(file, "image");

    // if (file && uploadedImages.length < 10) {
    //   const imageUrl = URL.createObjectURL(file);
    //   setUploadedImages((prevImages) => [...prevImages, imageUrl]);
    // } else {
    //   alert("You can upload up to 10 images only.");
    // }
  };

  const handleUploadImagesList = (e) => {
    const file = e.target.files[0];
    e.target.value = "";
    const imageUrl = URL.createObjectURL(file);
    setUploadedFilesList([...uploadedFilesList, imageUrl]);
    setFormData({ ...formData, images_list: [...formData.images_list, file] });
    // setUploadedFile(URL.createObjectURL(file));

    // console.log(file, "image");

    // if (file && uploadedImages.length < 10) {
    //   const imageUrl = URL.createObjectURL(file);
    //   setUploadedImages((prevImages) => [...prevImages, imageUrl]);
    // } else {
    //   alert("You can upload up to 10 images only.");
    // }
  };

  //   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  //   const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  //   const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return isLoading ? (
    <Loader />
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Box sx={{ paddingY: 5 }}>
    <ToolbarTable title={formData._id ? `Edit Product` : `Add Product`} />
  </Box> */}
      {formData.isInit ? (
        <Loader />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="col-md-10 d-flex flex-wrap justify-content-between align-items-center"
        >
          <Button
            component="label"
            //   htmlFor="fileInput"
            variant=""
            color="primary"
            type="file"
            htmlFor={"image"}
            sx={{
              border: "2px dashed gray",
              borderRadius: "15px",
              width: "70%",
              marginX: "auto",
              marginY: "10px",
              padding: `${formData.image ? "20px" : "20%"}`,
              textAlign: "center",
              // padding: {formData.image?'10px': "20% 20%"},
              // paddingX: "20%",
              // paddingY: "20%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <Box
        // sx={{
        //   border: "2px dashed gray",
        //   borderRadius: "15px",
        //   width: "70%",
        //   marginX: "auto",
        //   marginY: "10px",
        //   paddingX: "20%",
        //   paddingY: "20%",
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        //   justifyContent: "center",
        // }}
      > */}
            {formData.image ? (
              <img
                src={
                  typeof formData.image == "string"
                    ? `${formData.image}`
                    : `${uploadedFile}`
                }
                width={"100%"}
              />
            ) : (
              <>
                <Typography
                  component="h3"
                  sx={{ fontWeight: "bold", marginY: 1 }}
                >
                  Upload Main Image
                </Typography>
                <Box
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "royalblue",
                    padding: 1,
                    color: "white",
                  }}
                >
                  <Add />
                </Box>
              </>
            )}
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleUploadImage}
              style={{ display: "none" }}
            />
            {/* </Box> */}
          </Button>

          {inputsList.map((input, inputIndex) => {
            if (input.type == "select") {
              return (
                <FormControl key={input.name} fullWidth margin="normal">
                  <InputLabel id={input.name}>{input.label}</InputLabel>
                  <Select
                    labelId={input.name}
                    label={input.label}
                    name={input.name}
                    value={formData.category}
                    onChange={(e) => {
                      setFormData({ ...formData, category: e.target.value });
                    }}
                    // defaultValue={formData.category}
                    // placeholder=""
                    // defaultValue={
                    //   formData.category?._id ? formData.category?._id : ""
                    //   // i18n.language == "en"
                    //   //   ? formData.category.name_en
                    //   //   : formData.category.name_ar
                    // }
                    // onChange={handleChange}
                  >
                    <MenuItem disabled value="">
                      {`Select ${input.label}`}
                    </MenuItem>

                    {/* <MenuItem selected value={formData.category}>
                {formData.category
                  ? i18n.language == "en"
                    ? formData.category_en
                    : formData.category_ar
                  : `Select ${input.label}`}
              </MenuItem> */}
                    {categoryList.map((item) => (
                      <MenuItem value={item?._id}>
                        {i18n.language == "en" ? item.name_en : item.name_ar}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              );
            } else if (input.type == "checkbox") {
              return (
                <FormControlLabel
                  key={input.name}
                  // sx={{ width: "100%" }}
                  control={
                    <Checkbox
                      name={input.name}
                      defaultChecked={true}
                      // checked={formData.subscribe}
                      // onChange={handleChange}
                    />
                  }
                  label={input.label}
                />
              );
            } else {
              return (
                <TextField
                  key={input.name}
                  sx={
                    (input.name.includes("en") || input.name.includes("ar")) &&
                    !input.name.includes("description") && {
                      width: "49%",
                    }
                  }
                  label={input.label}
                  name={input.name}
                  defaultValue={
                    input.type == "date"
                      ? formData.date.split("T")[0]
                      : formData[input.name]
                  }
                  // value={input.name == "date" && "hello"}
                  //   onChange={handleChange}
                  // fullWidth={input.name.includes("description")}
                  fullWidth
                  multiline={input.name.includes("description")}
                  rows={3}
                  type={input.type}
                  margin="normal"
                  InputLabelProps={input.type == "date" && { shrink: true }}
                  // FormHelperTextProps={"kdgfsdgfhsdghf"}
                />
              );
            }
          })}

          {/* --------------------------------------------------------------- */}

          {(itemType == "product" || itemType == "project") && (
            <>
              <Button
                component="label"
                type="file"
                htmlFor={"images_list"}
                variant="contained"
                startIcon={<CloudUpload />}
              >
                Upload Mulitible Images
                <input
                  type="file"
                  id="images_list"
                  accept="image/*"
                  onChange={handleUploadImagesList}
                  style={{ display: "none" }}
                />
              </Button>

              {uploadedFilesList.length !== 0 && (
                <div className={`container ${styles.swiperContainer}`}>
                  <Swiper
                    className="bg-light shadow-none p-2 m-0 border rounded-2 my-4 pb-5"
                    dir="ltr"
                    pagination={{
                      clickable: true,
                    }}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                      },
                      576: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 4,
                      },
                      1280: {
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {uploadedFilesList.map((image, imageIndex) => (
                      <SwiperSlide
                        key={`img-swipe-${imageIndex}`}
                        className="align-self-center"
                        style={{ maxWidth: "300px" }}
                      >
                        <div className="w-100 position-relative">
                          <img
                            src={image}
                            width={"100%"}
                            height={"auto"}
                            className="border-0 rounded-2 shadow p-0 align-self-center "
                          />

                          <IconButton
                            sx={{
                              color: "red",
                              position: "absolute",
                              top: "5px",
                              right: "5px",
                            }}
                            onClick={() => {
                              const editedImages = formData.images_list.filter(
                                (img) =>
                                  formData.images_list.indexOf(img) !==
                                  imageIndex
                              );

                              const editedFiles = uploadedFilesList.filter(
                                (img) =>
                                  uploadedFilesList.indexOf(img) !== imageIndex
                              );
                              console.log(editedImages, "images");

                              setFormData({
                                ...formData,
                                images_list: [...editedImages],
                              });

                              setUploadedFilesList([...editedFiles]);
                            }}
                          >
                            <Delete />
                          </IconButton>
                        </div>
                      </SwiperSlide>
                      // <SwiperSlide
                      //   className="sd2"
                      //   // key={project._id}
                      //   style={{
                      //     maxHeight: "400px",
                      //     minHeight: "400px",
                      //     maxWidth: "300px",
                      //   }}
                      // >
                      //   <div>
                      //     <img src={image} width={"100%"} alt="" />
                      //   </div>
                      // </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </>
          )}

          <Box sx={{ marginY: 5, width: "100%" }}>
            {errorMessage && (
              <div className="alert alert-danger p-2 w-100 text-center">
                {errorMessage}
              </div>
            )}
          </Box>

          <Box
            sx={{
              marginX: "auto",
              // marginTop: 2,
              marginBottom: 10,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="submit"
              margin={15}
            >
              Submit
            </Button>
          </Box>
        </form>
      )}
    </Box>
  );
};

export default AddItemPage;
