import React, { useState } from "react";
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
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const LayoutForm = ({ data }) => {
  const [formData, setFormData] = useState({
    name_en: "",
    name_ar: "",
    description_en: "",
    description_ar: "",
    category: "",
    image: "",
    ...data,
  });

  const navigator = useNavigate();

  const theme = useTheme();

  const [errorMessage, setErrorMessage] = useState("");

  //   const handleChange = (e) => {
  //     const { name, value, type, checked } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: type === "checkbox" ? checked : value,
  //     }));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputsList.map(({ name }) => {
      formData[name] = e.target[name].value;
      console.log(e.target[name].value, name, "target");
      console.log(formData, "target");
      //   setFormData({ ...formData, [name]: e.target[name].value });
    });
    if (formData._id) {
      updateProductsToAPI();
    } else {
      createNewProductAPI();
    }
    // Handle form submission logic here
    // console.log("Form submitted:", formData);
  };

  async function createNewProductAPI() {
    console.log(formData, "id");
    await fetch(`https://dash-board-sspy.onrender.com/api/product`, {
      //   mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin ": "http://localhost:3000",
      },
      body: JSON.stringify({
        ...formData,
      }),
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
          navigator("/admin/products");
        } else {
          setErrorMessage(data.message);
        }
      })
      .catch((error) => console.log(error, "error"));
  }

  async function updateProductsToAPI() {
    // console.log(listOfProducts[productIndex]._id, "id");
    console.log(formData, "id index");

    await fetch(
      `https://dash-board-sspy.onrender.com/api/product?id=${formData._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data delete");
        if (data.status == "success") {
          navigator("/admin/products");
        } else {
          setErrorMessage(data.message);
        }
      })
      .catch((error) => console.log(error, "error"));
  }

  const inputsList = [
    { label: "Name In English", name: "name_en", type: "text" },
    { label: "Name In Arabic", name: "name_ar", type: "text" },
    { label: "Category", name: "category", type: "text" },
    { label: "Description In English", name: "description_en", type: "text" },
    { label: "Description In Arabic", name: "description_ar", type: "text" },
  ];

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    e.target.value = "";
    const imageUrl = URL.createObjectURL(file);
    setFormData({ ...formData, image: imageUrl });

    console.log(file, "image");

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

  return (
    // <div className="d-flex align-items-center justify-content-center">

    // </div>

    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
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
            <img src={`${formData.image}`} width={"100%"} />
          ) : (
            <>
              <Typography
                component="h3"
                sx={{ fontWeight: "bold", marginY: 1 }}
              >
                Upload Image
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

        {inputsList.map((input, inputIndex) => (
          <TextField
            sx={
              input.name.includes("name") && {
                width: "49%",
              }
            }
            label={input.label}
            name={input.name}
            defaultValue={formData[input.name]}
            //   onChange={handleChange}
            // fullWidth={input.name.includes("description")}
            fullWidth
            multiline={input.name.includes("description")}
            rows={3}
            type={input.type}
            margin="normal"
            FormHelperTextProps={"kdgfsdgfhsdghf"}
          />
        ))}
        {/* <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
      /> */}

        {/* <TextField
        label="Bio"
        multiline
        rows={4}
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        fullWidth
        margin="normal"
      /> */}

        {/* <FormControlLabel
        control={
          <Checkbox
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
        }
        label="Subscribe to newsletter"
      /> */}

        {/* <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl> */}

        {/* <FormControl fullWidth margin="normal">
        <InputLabel id="country-label">Country</InputLabel>
        <Select
          labelId="country-label"
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <MenuItem value="us">United States</MenuItem>
          <MenuItem value="ca">Canada</MenuItem>
          Add more countries as needed
        </Select>
      </FormControl> */}

        {errorMessage && (
          <div className="alert alert-danger mx-5 my-2 p-2 w-100 text-center">
            {errorMessage}
          </div>
        )}

        <Box sx={{ marginX: "auto", marginY: 2 }}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default LayoutForm;
