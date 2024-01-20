// import PropTypes from "prop-types";
// import { alpha } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import TableSortLabel from "@mui/material/TableSortLabel";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import Checkbox from "@mui/material/Checkbox";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch from "@mui/material/Switch";
// import DeleteIcon from "@mui/icons-material/Delete";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import { visuallyHidden } from "@mui/utils";
// import { useEffect, useMemo, useState } from "react";
// import Collapse from "@mui/material/Collapse";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import { Add, DeleteOutlineOutlined, MenuOutlined } from "@mui/icons-material";
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import MuiAppBar from "@mui/material/AppBar";
// import CssBaseline from "@mui/material/CssBaseline";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import MenuIcon from "@mui/icons-material/Menu";
// import { styled, useTheme } from "@mui/material/styles";
// import RowColapsedLayout from "../../temp/RowColapsedLayout/RowColapsedLayout";
// import ToolbarTable from "./../ToolbarTable/ToolbarTable";
// import Button from "@mui/material/Button";
// // import { Button } from '@mui/material';
// import { useNavigate } from "react-router-dom";

// const LayoutTableDashboard = ({
//   listOfData,
//   headerCells,
//   handleDeleteItem,
//   setIsLoading,
//   title,
// }) => {
//   const [page, setPage] = useState(0);
//   const [colapseIndex, setColapseIndex] = useState(-1);
//   const navigator = useNavigate();

//   //   const [listOfData, setListOfData] = useState([]);
//   // const [dense, setDense] = React.useState(false);
//   // const [rowsPerPage, setRowsPerPage] = React.useState(8);
//   const rowsPerPage = 8;

//   const drawerWidth = 240;

//   // const handleClick = (event, id) => {
//   //   // const selectedIndex = selected.indexOf(id);
//   //   // let newSelected = [];
//   //   // if (selectedIndex === -1) {
//   //   //   newSelected = newSelected.concat(selected, id);
//   //   // } else if (selectedIndex === 0) {
//   //   //   newSelected = newSelected.concat(selected.slice(1));
//   //   // } else if (selectedIndex === selected.length - 1) {
//   //   //   newSelected = newSelected.concat(selected.slice(0, -1));
//   //   // } else if (selectedIndex > 0) {
//   //   //   newSelected = newSelected.concat(
//   //   //     selected.slice(0, selectedIndex),
//   //   //     selected.slice(selectedIndex + 1)
//   //   //   );
//   //   // }
//   //   // setSelected(newSelected);
//   // };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleColapse = (rowIndex) => {
//     if (rowIndex == colapseIndex) {
//       setColapseIndex(-1);
//     } else {
//       setColapseIndex(rowIndex);
//     }
//   };

//   //   const headerCells = ["#id", "name", "name_ar", "name_en", "in_home"];
//   // const handleChangeRowsPerPage = (event) => {
//   //   setRowsPerPage(parseInt(event.target.value, 10));
//   //   setPage(0);
//   // };

//   // const handleChangeDense = (event) => {
//   //   setDense(event.target.checked);
//   // };

//   // const isSelected = (id) => selected.indexOf(id) !== -1;

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - listOfData.length) : 0;

//   //   const visibleRows = useMemo(
//   //     () =>
//   //       stableSort(listOfData, getComparator(order, orderBy)).slice(
//   //         page * rowsPerPage,
//   //         page * rowsPerPage + rowsPerPage
//   //       ),
//   //     [order, orderBy, page, rowsPerPage]
//   //   );

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         // padding: "20px",
//       }}
//     >
//       <Paper sx={{ width: "100%", mb: 2 }}>
//         <Typography
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             padding: 1,
//           }}
//         >
//           <ToolbarTable title={title} />
//           <Button
//             variant="contained"
//             endIcon={<Add />}
//             onClick={() => navigator("/admin/add-product")}
//           >
//             {`add ${title}`}
//           </Button>

//           {/* <IconButton>
//             <MenuOutlined />
//           </IconButton> */}
//           <TablePagination
//             sx={{
//               "& .MuiTablePagination-displayedRows": {
//                 margin: 0,
//                 fontWeight: "bold",
//               },
//             }}
//             component="div"
//             count={listOfData.length}
//             rowsPerPageOptions={[8]}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//           />
//         </Typography>
//         {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
//         {/* <ToolbarTable numSelected={numSelected} /> */}
//         <TableContainer>
//           <Table
//             sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={"medium"}
//           >
//             <TableHead>
//               <TableRow>
//                 <TableCell />
//                 {headerCells.map((head, headIndex) => (
//                   <TableCell
//                     align="center"
//                     sx={{ fontWeight: "bold", fontSize: 18 }}
//                   >
//                     {head}
//                   </TableCell>
//                 ))}
//                 {/* <TableCell sx={{ minWidth: "100px" }} /> */}
//                 {/* <TableCell>Dessert (100g serving)</TableCell>
//         <TableCell align="right">Calories</TableCell>
//         <TableCell align="right">Fat&nbsp;(g)</TableCell>
//         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//         <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {listOfData
//                 .slice(rowsPerPage * page, rowsPerPage * (page + 1))
//                 .map((row, rowIndex) => (
//                   <>
//                     <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
//                       <TableCell>
//                         <IconButton
//                           aria-label="expand row"
//                           size="small"
//                           onClick={() => handleColapse(rowIndex)}
//                         >
//                           {rowIndex == colapseIndex ? (
//                             <KeyboardArrowUpIcon />
//                           ) : (
//                             <KeyboardArrowDownIcon />
//                           )}
//                         </IconButton>
//                       </TableCell>

//                       {headerCells.map((head, headIndex) => (
//                         <TableCell
//                           onClick={() => handleColapse(rowIndex)}
//                           align="center"
//                         >
//                           {head == "#id"
//                             ? rowIndex + 1 + page * rowsPerPage
//                             : row[head]?.toString()}
//                         </TableCell>
//                       ))}
//                       <TableCell
//                         padding="none"
//                         align="center"
//                         sx={{ backgroundColor: "lightgray", minWidth: "100px" }}
//                       >
//                         <IconButton
//                           onClick={() => {
//                             handleDeleteItem(row._id);
//                             setIsLoading(true);
//                           }}
//                           // sx={{ padding: "10px" }}
//                           // aria-label="expand row"
//                           // size="small"
//                         >
//                           <DeleteOutlineOutlined />
//                         </IconButton>
//                         <IconButton
//                           onClick={() =>
//                             navigator("/admin/add-product", {
//                               state: { product: { ...row } },
//                             })
//                           }
//                           // aria-label="expand row"
//                           // size="small"
//                           // onClick={() => setOpen(!open)}
//                         >
//                           <EditNoteIcon />
//                         </IconButton>
//                       </TableCell>
//                       {/* <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell> */}
//                     </TableRow>
//                     <TableRow>
//                       <TableCell
//                         style={{
//                           paddingBottom: 0,
//                           paddingTop: 0,
//                           // backgroundColor: "rebeccapurple",
//                         }}
//                         colSpan={7}
//                       >
//                         <Collapse
//                           in={rowIndex == colapseIndex}
//                           timeout="auto"
//                           unmountOnExit
//                         >
//                           <Box sx={{ margin: 1 }}>
//                             <Typography
//                               variant="h4"
//                               gutterBottom
//                               component="div"
//                             >
//                               Details
//                             </Typography>
//                             <Table size="small" aria-label="purchases">
//                               {/* <TableHead> */}
//                               {/* <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Customer</TableCell>
//                     <TableCell align="right">Amount</TableCell>
//                     <TableCell align="right">
//                       Total price ($)
//                     </TableCell>
//                   </TableRow>
//                 </TableHead> */}
//                               {/* <TableHead>
//                               <TableCell sx={{ fontWeight: "bold" }}>Key</TableCell>
//                               <TableCell sx={{ fontWeight: "bold" }}>Value</TableCell>
//                             </TableHead> */}
//                               <TableBody>
//                                 {Object.entries(row).map(
//                                   (item, entryIndex) =>
//                                     entryIndex !== 0 && (
//                                       <TableRow>
//                                         <TableCell sx={{ fontWeight: "bold" }}>
//                                           {item[0]}
//                                         </TableCell>
//                                         <TableCell
//                                           sx={{
//                                             width: "90%",
//                                             lineBreak: "anywhere",
//                                           }}
//                                         >
//                                           {/* <Typography >
//                           {item[1]}
//                         </Typography> */}

//                                           {item[0] == "image" ? (
//                                             <img
//                                               src={`https://dash-board-sspy.onrender.com/src/uploads/${item[1]}`}
//                                               width={"auto"}
//                                               height={"100px"}
//                                             />
//                                           ) : (
//                                             item[1].toString()
//                                           )}
//                                         </TableCell>
//                                       </TableRow>
//                                     )
//                                 )}

//                                 {/* {row.history.map((historyRow) => (
//             <TableRow key={historyRow.date}>
//             <TableCell component="th" scope="row">
//               {historyRow.date}
//             </TableCell>
//             <TableCell>{historyRow.customerId}</TableCell>
//             <TableCell align="right">{historyRow.amount}</TableCell>
//             <TableCell align="right">
//               {Math.round(historyRow.amount * row.price * 100) / 100}
//             </TableCell>
//             </TableRow>
//             ))} */}
//                               </TableBody>
//                             </Table>
//                           </Box>
//                         </Collapse>
//                       </TableCell>
//                     </TableRow>
//                   </>
//                   // <RowColapsedLayout
//                   //   row={row}
//                   //   rowIndex={rowIndex}
//                   //   headerCells={headerCells}
//                   //   colapseIndex={colapseIndex}
//                   //   setColapseIndex={setColapseIndex}
//                   //   // isColapsed={colapsedIndex}
//                   // />

//                   // <Row key={row.name} row={row} />
//                 ))}
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
//       </Paper>
//     </Box>
//   );
// };

// export default LayoutTableDashboard;
