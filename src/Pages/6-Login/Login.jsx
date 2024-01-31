import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logo from "../../components/images/Golden Path - Logo.png";
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

const Login = () => {
  const inputsList = [
    {
      label: "User Name",
      name: "username",
      type: "email",
      icon: <Person />,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      icon: <Key />,
    },
    {
      label: "Remember Me",
      name: "remember",
      type: "checkbox",
    },
  ];

  const navigator = useNavigate();

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  // const [focused, setFocused] = useState({
  //   usename: false,
  //   password: false,
  // });
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: true,
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");

    inputsList.map(({ name }) => {
      formData[name] =
        name == "remember" ? e.target[name].checked : e.target[name].value;
      // if (name == "remember") {
      //   formData[name] = e.target[name].check;
      //   // setFormData({ ...formData, [name]: e.target[name].checked });
      // } else {
      //   setFormData({ ...formData, [name]: e.target[name].value });
      // }
      console.log(name, e.target[name].value);
    });

    userLogIn();
  };

  async function userLogIn() {
    console.log(formData, "form data");
    await fetch(`https://dash-board-sspy.onrender.com/login`, {
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

        if (result.status == "success") {
          localStorage.setItem("Token", JSON.stringify(result.token));

          navigator(`/admin`);
          // save token to local storage
        } else {
          setErrorMsg(result.message);
          // setIsLoading(false);
        }
      })
      .catch((error) => console.log(error, "error"));
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <Box mx={5} sx={{ "& > :not(style)": { m: 1 } }}>
          <form className="py-2" onSubmit={handleSubmit}>
            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
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
                    input.name == "password" && isVisiblePassword
                      ? "text"
                      : input.type
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {input.icon}
                      </InputAdornment>
                    ),
                    endAdornment: input.name == "password" && (
                      <IconButton
                        onClick={() => {
                          console.log("hello");
                          setIsVisiblePassword(!isVisiblePassword);
                        }}
                      >
                        {isVisiblePassword ? <Visibility /> : <VisibilityOff />}
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

            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Button
                variant="contained"
                color="warning"
                type="submit"
                sx={{ bgcolor: "#fb8c00", marginY: "10px", marginX: "auto" }}
              >
                Log In
                {/* <Link
                to={"/admin"}
                style={{ textDecoration: "none", color: "#000" }}
              >
                Log In
              </Link> */}
              </Button>
            </Box>
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
      <div
        style={{
          backgroundColor: "#6e6a6a",
          minHeight: "100vh",
          width: "70%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "100%" }}
          className="me-3 img"
        />
      </div>
    </div>
  );
};

export default Login;
