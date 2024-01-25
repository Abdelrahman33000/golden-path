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
import { Add } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import ToolbarTable from "../../Components/ToolbarTable/ToolbarTable";

const AddCategory = ({ categoryType }) => {
  const { state } = useLocation();
  console.log(state, "category state");
  const [formData, setFormData] = useState({
    name: "",
    in_type: categoryType,
    ...state?.category,
  });

  const navigator = useNavigate();
  const theme = useTheme();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // inputsList.map(({ name }) => {
    //   formData[name] = e.target[name].value;
    //   console.log(e.target[name].value, name, "target");
    //   console.log(formData, "target");
    //   //   setFormData({ ...formData, [name]: e.target[name].value });
    // });
    inputsList.map(({ name }) => {
      formData[name] = e.target[name].value;
    });
    // formData.name = e.target["category"].value;
    if (formData._id) {
      updateCategoryToAPI();
    } else {
      createNewCategoryAPI();
    }
    // Handle form submission logic here
    // console.log("Form submitted:", formData);
  };

  async function createNewCategoryAPI() {
    console.log(formData, "id");
    await fetch(`https://dash-board-sspy.onrender.com/api/category`, {
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
          navigator(`/admin/${categoryType}-category`);
        } else {
          setErrorMessage(data.message);
        }
      })
      .catch((error) => console.log(error, "error"));
  }

  async function updateCategoryToAPI() {
    // console.log(listOfProducts[productIndex]._id, "id");
    console.log(formData, "id index");

    await fetch(
      `https://dash-board-sspy.onrender.com/api/category?id=${formData._id}`,
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
          navigator(`/admin/${categoryType}-category`);
        } else {
          setErrorMessage(data.message);
        }
      })
      .catch((error) => console.log(error, "error"));
  }

  const inputsList = [
    // { label: "Name In English", name: "name_en", type: "text" },
    // { label: "Name In Arabic", name: "name_ar", type: "text" },
    { label: "Category In English", name: "name_en", type: "text" },
    { label: "Category In Arabic", name: "name_ar", type: "text" },
    // { label: "Description In English", name: "description_en", type: "text" },
    // { label: "Description In Arabic", name: "description_ar", type: "text" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ paddingY: 5, marginBottom: "100px" }}>
        <ToolbarTable
          title={
            formData._id
              ? `Edit ${categoryType} Category`
              : `Add ${categoryType} Category`
          }
        />
      </Box>

      <form
        onSubmit={handleSubmit}
        className="col-md-10 d-flex flex-column justify-content-center align-items-center"
      >
        {inputsList.map((input) => (
          <TextField
            key={input.name}
            // sx={
            //   input.name.includes("name") && {
            //     width: "49%",
            //   }
            // }
            label={input.label}
            name={input.name}
            defaultValue={formData[input.name]}
            //   onChange={handleChange}
            // fullWidth={input.name.includes("description")}
            fullWidth
            rows={3}
            type={input.type}
            margin="normal"
            // FormHelperTextProps={"kdgfsdgfhsdghf"}
          />
        ))}

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

export default AddCategory;
