import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
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

import {
  ArrowBackIos,
  Construction,
  DoorSliding,
  Home,
  PrecisionManufacturing,
  SensorOccupied,
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
}) {
  //   const theme = useTheme();

  const drawerList = [
    { text: "Home", icon: <Home /> },
    { text: "Product", icon: <PrecisionManufacturing /> },
    { text: "Product Category", icon: <PrecisionManufacturing /> },
    { text: "Project", icon: <Construction /> },
    { text: "Slider", icon: <DoorSliding /> },
    { text: "Sponser", icon: <SensorOccupied /> },
  ];

  const navigator = useNavigate();

  return (
    <>
      <MuiAppBar
        sx={{
          // top: "93px",
          // right: "20px",
          width: "50px",
          backgroundColor: "transparent",
          boxShadow: "none",
          // backgroundColor: "green",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{
            ...(isDrawerOpen && { display: "none" }),
            borderRadius: "50%",
            backgroundColor: "black",
            height: "50px",
            // paddingY: "15px",
          }}
        >
          <ArrowBackIos color="primary" />
          {/* <MenuIcon /> */}
        </IconButton>
      </MuiAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "black",
            color: "white",
          },
          "& .MuiSvgIcon-root": {
            color: "white",
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
                // sx={{ backgroundColor: "yellow" }}
                onClick={() => {
                  if (label.text.toLowerCase() == "home") {
                    navigator("/admin");
                  } else {
                    navigator(
                      `/admin/${label.text.toLowerCase().replace(" ", "-")}`
                    );
                  }
                }}
              >
                <ListItemIcon>
                  {label.icon}
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary={label.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default SideBarDashboard;
