import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
// import Logo from "../../components/images/Golden Path - Logo.png";
import Logo from '../../../components/images/Golden Path - Logo.png'
import {
  Email,
  Password,
  Key,
  Person,
  VisibilityOff,
  Visibility,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Loader from "../../Components/Loader/Loader";
import "./ChangePassword.css";

const ChangePassword = () => {
  const inputsList = [
    {
      label: "Old Password",
      name: "oldpassword",
      type: "password",
      //   icon: <Key />,
    },
    {
      label: "New Password",
      name: "newpassword",
      type: "password",
      //   icon: <Key />,
    },
    {
      label: "Confirm New Password",
      name: "confirmpassword",
      type: "password",
      //   icon: <Key />,
    },
    // {
    //   label: "Remember Me",
    //   name: "remember",
    //   type: "checkbox",
    // },
  ];

  const navigator = useNavigate();

  const [isVisiblePassword, setIsVisiblePassword] = useState({
    oldpassword: false,
    newpassword: false,
  });
  // const [focused, setFocused] = useState({
  //   usename: false,
  //   password: false,
  // });
  const [formData, setFormData] = useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    status: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    setIsLoading(true);

    inputsList.map(({ name }) => {
      formData[name] = e.target[name].value;
      // if (name == "remember") {
      //   formData[name] = e.target[name].check;
      //   // setFormData({ ...formData, [name]: e.target[name].checked });
      // } else {
      //   setFormData({ ...formData, [name]: e.target[name].value });
      // }
      console.log(name, e.target[name].value);
    });

    if (
      !formData.oldpassword ||
      !formData.newpassword ||
      !formData.confirmpassword
    ) {
      setErrorMsg({ status: "error", message: "Passwords can not be empty" });
      setIsLoading(false);
    } else if (formData.newpassword == formData.confirmpassword) {
      delete formData.confirmpassword;

      userChangePassword();
    } else {
      setErrorMsg({ status: "error", message: "Passwords do not match" });
    }
  };

  async function userChangePassword() {
    console.log(formData, "form data");
    // await fetch(`https://dash-board-sspy.onrender.com/auth/change-password`, {
    await fetch(`http://localhost:8888/auth/change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "data create");

        setErrorMsg({ status: result.status, message: result.message });
        if (result.status == "success") {
          setTimeout(() => {
            navigator(`/admin`);
          }, 2000);
          //   localStorage.setItem("Token", JSON.stringify(result.token));
          // save token to local storage
        } else {
          setIsLoading(false);
        }
      })
      .catch((error) => console.log(error, "error"));
  }

  return (
    <div
      className="min-vh-100 d-flex flex-column align-items-center justify-content-around"
      //   style={{
      //     display: "flex",
      //     flexDirection:'column',
      //     justifyContent: "space-around",
      //     alignItems: "center",
      //     minHeight: "100vh",
      //   }}
    >
      <div
        className="col-lg-9 col-11 d-flex align-items-center rounded-2 py-2"
        style={{
          backgroundColor: "rgba(1,1,1,0.2)",
          //   minHeight: "100vh",
          //   width: "70%",
          //   display: "flex",
          //   alignItems: "center",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          width={"100%"}
          //   style={{ width: "100%" }}
          className="me-3 img"
        />
      </div>
      <div className="w-75 border rounded-2 shadow py-5">
        <Box mx={5} sx={{ "& > :not(style)": { m: 1 } }}>
          <form className="py-2 my-2" onSubmit={handleSubmit}>
            {errorMsg.status == "error" && (
              <div className="alert alert-danger">{errorMsg.message}</div>
            )}
            {errorMsg.status == "success" && (
              <div className="alert alert-success">{errorMsg.message}</div>
            )}
            {inputsList.map((input) =>
              input.type !== "checkbox" ? (
                <TextField
                  key={input.name}
                  sx={{
                    ".Mui-focused": {
                      "& .MuiSvgIcon-root": {
                        color: "#fb8c00",
                      },
                    },
                  }}
                  fullWidth
                  color="warning"
                  margin="normal"
                  defaultValue=""
                  label={input.label}
                  name={input.name}
                  type={
                    (input.name == "oldpassword" ||
                      input.name == "newpassword") &&
                    isVisiblePassword[input.name]
                      ? "text"
                      : input.type
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {/* {input.icon} */}
                        <Key />
                      </InputAdornment>
                    ),
                    endAdornment: (input.name == "oldpassword" ||
                      input.name == "newpassword") && (
                      <IconButton
                        onClick={() => {
                          console.log("hello");
                          setIsVisiblePassword({
                            ...isVisiblePassword,
                            [input.name]: !isVisiblePassword[input.name],
                          });
                        }}
                      >
                        {isVisiblePassword[input.name] ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    ),
                  }}
                />
              ) : (
                <FormControlLabel
                  key={input.name}
                  label={input.label}
                  fullWidth
                  control={
                    <Checkbox
                      defaultChecked
                      name={input.name}
                      sx={{
                        color: "#fb8c00",
                        "&.Mui-checked": {
                          color: "#fb8c00",
                        },
                      }}
                    />
                  }
                />
              )
            )}

            {isLoading ? (
              <div className="loaderParent d-flex align-items-center justify-content-center py-3">
                {" "}
                <span className="loader"></span>
              </div>
            ) : (
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Button
                  variant="contained"
                  color="warning"
                  type="submit"
                  sx={{ bgcolor: "#fb8c00", marginY: "10px", marginX: "auto" }}
                >
                  Submit
                </Button>
              </Box>
            )}
          </form>

          {/* <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
            <Input
              type="email"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              }
            />
          </FormControl> */}
        </Box>
      </div>
    </div>
  );
};

export default ChangePassword;
