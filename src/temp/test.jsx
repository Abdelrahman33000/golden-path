// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open} sx={{ backgroundColor: "red" }}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: "none" }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Mini variant drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "rtl" ? (
//               <ChevronRightIcon />
//             ) : (
//               <ChevronLeftIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: "block" }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : "auto",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {["All mail", "Trash", "Spam"].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: "block" }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : "auto",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
//           dolor purus non enim praesent elementum facilisis leo vel. Risus at
//           ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
//           quisque non tellus. Convallis convallis tellus id interdum velit
//           laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
//           adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
//           integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
//           eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
//           quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
//           vivamus at augue. At augue eget arcu dictum varius duis at consectetur
//           lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
//           faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
//           ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
//           elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
//           sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
//           mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
//           risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
//           purus viverra accumsan in. In hendrerit gravida rutrum quisque non
//           tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
//           morbi tristique senectus et. Adipiscing elit duis tristique
//           sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// const testing = () => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         // padding: "20px",
//       }}
//     >
//       {/* <div className="bg-danger w-75">
// <img src={`${listOfData?.data[10]?.image}`} />
// </div> */}
//       <Paper sx={{ width: "100%", mb: 2 }}>
//         {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
//         {/* <ToolbarTable numSelected={numSelected} /> */}
//         <TableContainer>
//           <Table
//             sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={"medium"}
//           >
//             {/* <EnhancedTableHead
//     numSelected={selected.length}
//     order={order}
//     orderBy={orderBy}
//     onSelectAllClick={handleSelectAllClick}
//     onRequestSort={handleRequestSort}
//     rowCount={rows.length}
//   /> */}
//             <HeaderTable
//               // numSelected={numSelected}
//               handleSortBy={handleSortBy}
//               headerCells={headerCells}
//               // onSelectAllClick={onSelectAllClick}
//               order={order}
//               orderBy={orderBy}
//               listOfData={listOfData}
//               // rowCount={rowCount}
//             />
//             <TableBody>
//               {visibleRows.map((row, rowIndex) => {
//                 // const isItemSelected = isSelected(row.id);
//                 // const labelId = `enhanced-table-checkbox-${rowIndex}`;

//                 return (
//                   <TableRow
//                     hover
//                     onClick={(event) => handleClick(event, row.id)}
//                     // role="checkbox"
//                     // aria-checked={isItemSelected}
//                     // tabIndex={-1}
//                     key={row.id}
//                     // selected={isItemSelected}
//                     sx={{ cursor: "pointer" }}
//                   >
//                     <TableCell
//                       sx={{
//                         backgroundColor: "green",
//                         width: "20px",
//                         padding: "0",
//                       }}
//                       align="center"
//                     >
//                       {rowIndex + 1}
//                     </TableCell>

//                     {headerCells.map((head, headIndex) => {
//                       // return row[head];
//                       if (headIndex !== 0) {
//                         return (
//                           <TableCell align="center" sx={{ maxWidth: "50px" }}>
//                             {row[head]}
//                             {/* <TableCell colSpan={4} /> */}
//                           </TableCell>
//                         );
//                       }
//                     })}
//                     {/* {Object.entries(row).map((item) => {
//             if (
//               item[0] == "name" ||
//               item[0] == "name_ar" ||
//               item[0] == "name_en" ||
//               item[0] == "in_home"
//             ) {
//               return (
//                 <TableCell align="center" sx={{ maxWidth: "50px" }}>
//                   {item[1]}
//                   <TableCell colSpan={4} />
//                 </TableCell>
//               );
//             }
//           })} */}

//                     {/* <TableCell padding="checkbox">
//             <Checkbox
//               color="primary"
//               checked={isItemSelected}
//               inputProps={{
//                 "aria-labelledby": labelId,
//               }}
//             />
//           </TableCell> */}
//                     {/* <TableCell
//             component="th"
//             // id={labelId}
//             scope="row"
//             align="center"
//             // padding="none"
//           >
//             {row.name}
//           </TableCell>
//           <TableCell align="center">{row.calories}</TableCell>
//           <TableCell align="center">{row.fat}</TableCell>
//           <TableCell align="center">{row.carbs}</TableCell>
//           <TableCell align="center">{row.protein}</TableCell> */}
//                   </TableRow>
//                 );
//               })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: 53 * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           component="div"
//           count={listOfData.length}
//           rowsPerPageOptions={[8]}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//         />
//       </Paper>
//     </Box>
//   );
// };
