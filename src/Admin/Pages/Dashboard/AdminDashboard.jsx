import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import SideBarDashboard from "./../../Components/SideBarDashboard/SideBarDashboard";

import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  // const [order, setOrder] = useState("asc");
  // const [orderBy, setOrderBy] = useState("calories");
  // const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  // const [dense, setDense] = React.useState(false);
  // const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const rowsPerPage = 8;

  // const [open, setOpen] = useState(false);
  const theme = useTheme();
  const drawerWidth = 240;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

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
        <Outlet />
        {/* <DrawerHeader /> */}
        {/* <LayoutTableDashboard
          listOfData={listOfData}
          headerCells={headerCells}
        />
         */}

        {/* TODO if condition */}

        {/* {mainComponent} */}
        {/* {activeSideLabel.toLowerCase() == "home" && <DashboardHome />} */}
        {/* {activeSideLabel.toLowerCase() == "products" && <DashboardProduct />} */}

        {/* <Routes> */}
        {/* <Route path="/" element={<DashboardHome />} /> */}
        {/* <Route path="/product" element={<DashboardProduct />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/product1" element={<Product1 />} /> */}
        {/* <Route path="/project1" element={<Project1 />} /> */}
        {/* <Route path="/products/:productsId" element={<ProjectDetails />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        {/* </Routes> */}
      </Typography>

      <SideBarDashboard
        drawerWidth={drawerWidth}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        isDrawerOpen={isDrawerOpen}
      />
    </Box>
  );
};

export default AdminDashboard;

// function createData(id, name, calories, fat, carbs, protein) {
//   return {
//     id,
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//   };
// }

// const rows = [
//   createData(1, "Cupcake", 305, 3.7, 67, 4.3),
//   createData(2, "Donut", 452, 25.0, 51, 4.9),
//   createData(3, "Eclair", 262, 16.0, 24, 6.0),
//   createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
//   createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
//   createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
//   createData(9, "KitKat", 518, 26.0, 65, 7.0),
//   createData(10, "Lollipop", 392, 0.2, 98, 0.0),
//   createData(11, "Marshmallow", 318, 0, 81, 2.0),
//   createData(12, "Nougat", 360, 19.0, 9, 37.0),
//   createData(13, "Oreo", 437, 18.0, 63, 4.0),
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// // Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// // stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// // only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// // with exampleArray.slice().sort(exampleComparator)
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       {
//         date: '2020-01-05',
//         customerId: '11091700',
//         amount: 3,
//       },
//       {
//         date: '2020-01-02',
//         customerId: 'Anonymous',
//         amount: 1,
//       },
//     ],
//   };
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>

// {}
//         {/* <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//         <TableCell align="right">{row.calories}</TableCell>
//         <TableCell align="right">{row.fat}</TableCell>
//         <TableCell align="right">{row.carbs}</TableCell>
//         <TableCell align="right">{row.protein}</TableCell> */}
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 History
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Customer</TableCell>
//                     <TableCell align="right">Amount</TableCell>
//                     <TableCell align="right">Total price ($)</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 dsfhsdjfhsdjhfjkh
//                 {/* <TableBody>
//                   {row.history.map((historyRow) => (
//                     <TableRow key={historyRow.date}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.date}
//                       </TableCell>
//                       <TableCell>{historyRow.customerId}</TableCell>
//                       <TableCell align="right">{historyRow.amount}</TableCell>
//                       <TableCell align="right">
//                         {Math.round(historyRow.amount * row.price * 100) / 100}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody> */}
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
//   createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
//   createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
//   createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
// ];
