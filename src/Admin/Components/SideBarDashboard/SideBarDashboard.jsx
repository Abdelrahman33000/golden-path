import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { Toolbar, IconButton, Button } from "@mui/material";

import {
  ArrowBackIos,
  Construction,
  DoorSliding,
  Home,
  PrecisionManufacturing,
  SensorOccupied,
  Menu,
  Logout,
  LockPerson,
} from "@mui/icons-material";

// const drawerWidth = 240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginRight: -drawerWidth,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginRight: 0,
//     }),
//     /**
//      * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
//      * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
//      * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
//      * proper interaction with the underlying content.
//      */
//     position: "relative",
//   })
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginRight: drawerWidth,
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-start",
// }));

function SideBarDashboard({
  drawerWidth,
  handleDrawerOpen,
  handleDrawerClose,
  isDrawerOpen,
  setActiveSideLabel,
  dashboardTitle,
}) {
  //   const theme = useTheme();

  const drawerList = [
    { text: "Home", icon: <Home /> },
    { text: "Product", icon: <PrecisionManufacturing /> },
    { text: "Product Category", icon: <PrecisionManufacturing /> },
    { text: "Project", icon: <Construction /> },
    { text: "Project Category", icon: <Construction /> },
    { text: "Slider", icon: <DoorSliding /> },
    { text: "Partner", icon: <SensorOccupied /> },
  ];

  const controlsList = [
    {
      text: "Change Password",
      icon: <LockPerson />,
      handle: handleChangePassword,
    },
    { text: "Log Out", icon: <Logout />, handle: handleLogOut },
    // { text: "Product Category", icon: <PrecisionManufacturing /> },
    // { text: "Project", icon: <Construction /> },
    // { text: "Project Category", icon: <Construction /> },
    // { text: "Slider", icon: <DoorSliding /> },
    // { text: "Partner", icon: <SensorOccupied /> },
  ];

  // const { dashboardTitle, setDashboardTitle } = useContext(DashboardContext);

  const navigator = useNavigate();
  // const [dashboardTitle, setDashboardTitle] = useState("Dashboard Home");

  function handleChangePassword() {
    navigator("/admin/change-password");
  }

  function handleLogOut() {
    localStorage.removeItem("Token");
    navigator("/");
  }
  return (
    <>
      <MuiAppBar
        sx={{
          backgroundColor: "white",
          color: "black",
          // backgroundColor: "rgba(30,30,30,30)",
          // top: "93px",
          // right: "20px",
          // width: "50px",
          // backgroundColor: "transparent",
          // boxShadow: "none",
          // backgroundColor: "green",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, fontWeight: "bold" }}
            component="div"
          >
            {dashboardTitle}
          </Typography>

          {/* <Typography>hfjdshfdjksfhsdjk</Typography> */}

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            // onClick={handleDrawerOpen}
            onClick={handleDrawerOpen}
            sx={{ ...(isDrawerOpen && { display: "none" }) }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{
            ...(isDrawerOpen && { display: "none" }),
            borderRadius: "50%",
            backgroundColor: "black",
            // height: "50px",
            // paddingY: "15px",
          }}
        >
          <ArrowBackIos color="primary" />
          <MenuIcon />
        </IconButton> */}
      </MuiAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            minHeight: "100vh",
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "space-between",
            // backgroundColor: "red",
            // boxShadow: "-1px 0px 5px lightgray",
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            color: "black",

            // backgroundColor: "rgba(30,30,30,30)",
            // color: "white",
            // boxShadow:'50px 50px #888888'
          },
          "& .MuiSvgIcon-root": {
            color: "#1976d2",
            minWidth: "30px",
            minHeight: "30px",
            // color: "white",
          },
        }}
        variant="persistent"
        anchor="right"
        open={isDrawerOpen}
      >
        <Typography
          component={"div"}
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            //   padding: spacing(0, 1),
            // necessary for content to be below app bar
            // ...theme.mixins.toolbar,
            justifyContent: "flex-start",
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            {!isDrawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Typography>

        <Divider />
        <List>
          {drawerList.map((label, index) => (
            <ListItem key={`drawer-${index}`} disablePadding>
              <ListItemButton
                // sx={{    fontWeight: "bold", }}
                onClick={() => {
                  if (label.text.toLowerCase() == "home") {
                    navigator("/admin");
                    // setDashboardTitle("Dashboard Home");
                  } else {
                    navigator(
                      `/admin/${label.text.toLowerCase().replace(" ", "-")}`
                    );
                    // setDashboardTitle(`Dashboard ${label.text}`);
                  }
                }}
              >
                <ListItemIcon>
                  {label.icon}
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  sx={{ "& .MuiTypography-root ": { fontWeight: "600" } }}
                  primary={label.text}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider
          variant="middle"
          sx={{
            borderColor: "rgba(0, 0, 0, 0.3)",
            borderWidth: "1px",
            marginTop: "auto",
          }}
        />

        <List sx={{ marginBottom: "30px" }}>
          {controlsList.map((label, index) => (
            <ListItem key={`control-${index}`} disablePadding>
              <ListItemButton
                onClick={label.handle}
                // sx={{    fontWeight: "bold", }}
                // onClick={() => {
                // if (label.text.toLowerCase() == "home") {
                //   navigator("/admin");
                //   // setDashboardTitle("Dashboard Home");
                // } else {
                //   navigator(
                //     `/admin/${label.text.toLowerCase().replace(" ", "-")}`
                //   );
                //   // setDashboardTitle(`Dashboard ${label.text}`);
                // }
                // }}
              >
                <ListItemIcon>
                  {label.icon}
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  sx={{ "& .MuiTypography-root ": { fontWeight: "600" } }}
                  primary={label.text}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* <Typography
          sx={{
            alignSelf: "center",
            // justifySelf: "end",
            marginTop: "auto",
            marginBottom: "15px",
          }}
        >
          <Button
            variant="contained"
            size="meduim"
            color="primary"
            type="button"
            onClick={() => {
              navigator("/admin/change-password");
            }}
            sx={{ textTransform: "none" }}

            // margin={20}
          >
            <span>Change Password</span>
          </Button>
        </Typography> */}
      </Drawer>
    </>
  );
}

export default SideBarDashboard;
