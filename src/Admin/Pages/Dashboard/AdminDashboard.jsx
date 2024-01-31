import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import SideBarDashboard from "./../../Components/SideBarDashboard/SideBarDashboard";

import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [dashboardTitle, setDashboardTitle] = useState("Dashboard Home");

  const theme = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname.split("/"), "tempX routing");
    console.log(pathname.split("/").length, "tempX routing");
    const pathSplit = pathname.split("/");
    if (pathSplit.length <= 2) {
      setDashboardTitle("Dashboard Home");
    } else {
      const title = pathSplit[2].split("-");
      const finalValue = title
        .map(
          (item) =>
            item.substring(0, 1).toUpperCase() + item.substring(1).toLowerCase()
        )
        .join(" ");
      setDashboardTitle(`Dashboard ${finalValue}`);
    }
  }, [pathname]);

  console.log(navigator.onLine, "online");
  const rowsPerPage = 8;
  const drawerWidth = 240;

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    checkLoggedUserAuth();

    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    // Add event listeners for online/offline events
    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  async function checkLoggedUserAuth() {
    const savedToken = JSON.parse(localStorage.getItem("Token"));
    console.log(savedToken, "token");
    await fetch(`https://dash-board-sspy.onrender.com/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: savedToken,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "data create");

        if (result.status == "error") {
          navigate("/login");
          // localStorage.setItem("Token", JSON.stringify(result.token));
          // navigator(`/admin`);
          // save token to local storage
        }
        // else {
        //   setErrorMsg(result.message);
        //   // setIsLoading(false);
        // }
      })
      .catch((error) => console.log(error, "error"));
  }

  // const handleClick = (event, id) => {
  //   const selectedIndex = selected.indexOf(id);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, id);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     );
  //   }
  //   setSelected(newSelected);
  // };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  // const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.

  // const visibleRows = useMemo(
  //   () =>
  //     stableSort(listOfData, getComparator(order, orderBy)).slice(
  //       page * rowsPerPage,
  //       page * rowsPerPage + rowsPerPage
  //     ),
  //   [order, orderBy, page, rowsPerPage]
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

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* <AppBar position="fixed" open={isDrawerOpen}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Persistent drawer
          </Typography>
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
      </AppBar> */}

      <Typography
        component={"div"}
        open={isDrawerOpen}
        sx={{
          // backgroundColor: "red",
          // flexGrow: 1,
          width: "100%",
          padding: theme.spacing(3),
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginRight: -drawerWidth,
          ...(isDrawerOpen && {
            transition: theme.transitions.create("margin", {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
          }),

          position: "relative",
        }}
      >
        <Box sx={{ height: 60, backgroundColor: "transparent" }} />

        {isOnline ? (
          <Outlet />
        ) : (
          <Box
            sx={{
              height: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3 className="text-danger">
              Please check your internet connection
            </h3>
          </Box>
        )}
      </Typography>

      <SideBarDashboard
        drawerWidth={drawerWidth}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        isDrawerOpen={isDrawerOpen}
        dashboardTitle={dashboardTitle}
      />
    </Box>
  );
};

export default AdminDashboard;
