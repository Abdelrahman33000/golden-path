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
// import { DeleteOutlineOutlined } from "@mui/icons-material";
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import MuiAppBar from "@mui/material/AppBar";
// import CssBaseline from "@mui/material/CssBaseline";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import MenuIcon from "@mui/icons-material/Menu";
// import { styled, useTheme } from "@mui/material/styles";

// const RowColapsedLayout = ({
//   row,
//   rowIndex,
//   headerCells,
//   colapseIndex,
//   setColapseIndex,
// }) => {
//   const [isColapsed, setIsColapsed] = useState(false);

//   const handleColapse = () => {
//     if (rowIndex == colapseIndex) {
//       setColapseIndex(-1);
//     } else {
//       setColapseIndex(rowIndex);
//     }
//   };

//   return (
//     <>
//       <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={handleColapse}
//           >
//             {rowIndex == colapseIndex ? (
//               <KeyboardArrowUpIcon />
//             ) : (
//               <KeyboardArrowDownIcon />
//             )}
//           </IconButton>
//         </TableCell>

//         {headerCells.map((head, headIndex) => (
//           <TableCell onClick={handleColapse} align="center">
//             {head == "#id" ? rowIndex + 1 : row[head]?.toString()}
//           </TableCell>
//         ))}
//         <TableCell
//           padding="none"
//           align="center"
//           sx={{ backgroundColor: "lightgray", minWidth: "100px" }}
//         >
//           <IconButton
//           // sx={{ padding: "10px" }}
//           // aria-label="expand row"
//           // size="small"
//           >
//             <DeleteOutlineOutlined />
//           </IconButton>
//           <IconButton
//           // aria-label="expand row"
//           // size="small"
//           // onClick={() => setOpen(!open)}
//           >
//             <EditNoteIcon />
//           </IconButton>
//         </TableCell>
//         {/* <TableCell component="th" scope="row">
//     {row.name}
//   </TableCell>
//   <TableCell align="right">{row.calories}</TableCell>
//   <TableCell align="right">{row.fat}</TableCell>
//   <TableCell align="right">{row.carbs}</TableCell>
//   <TableCell align="right">{row.protein}</TableCell> */}
//       </TableRow>
//       <TableRow>
//         <TableCell
//           style={{
//             paddingBottom: 0,
//             paddingTop: 0,
//             // backgroundColor: "rebeccapurple",
//           }}
//           colSpan={7}
//         >
//           <Collapse in={rowIndex == colapseIndex} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h4" gutterBottom component="div">
//                 Details
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 {/* <TableHead> */}
//                 {/* <TableRow>
//         <TableCell>Date</TableCell>
//         <TableCell>Customer</TableCell>
//         <TableCell align="right">Amount</TableCell>
//         <TableCell align="right">
//           Total price ($)
//         </TableCell>
//       </TableRow>
//     </TableHead> */}
//                 {/* <TableHead>
//                   <TableCell sx={{ fontWeight: "bold" }}>Key</TableCell>
//                   <TableCell sx={{ fontWeight: "bold" }}>Value</TableCell>
//                 </TableHead> */}
//                 <TableBody>
//                   {Object.entries(row).map(
//                     (item, entryIndex) =>
//                       entryIndex !== 0 && (
//                         <TableRow>
//                           <TableCell sx={{ fontWeight: "bold" }}>
//                             {item[0]}
//                           </TableCell>
//                           <TableCell
//                             sx={{
//                               width: "90%",
//                               lineBreak: "anywhere",
//                             }}
//                           >
//                             {/* <Typography >
//               {item[1]}
//             </Typography> */}

//                             {item[0] == "image" ? (
//                               <img
//                                 src={`${item[1]}`}
//                                 width={"50%"}
//                                 height={"auto"}
//                               />
//                             ) : (
//                               item[1].toString()
//                             )}
//                           </TableCell>
//                         </TableRow>
//                       )
//                   )}

//                   {/* {row.history.map((historyRow) => (
// <TableRow key={historyRow.date}>
// <TableCell component="th" scope="row">
//   {historyRow.date}
// </TableCell>
// <TableCell>{historyRow.customerId}</TableCell>
// <TableCell align="right">{historyRow.amount}</TableCell>
// <TableCell align="right">
//   {Math.round(historyRow.amount * row.price * 100) / 100}
// </TableCell>
// </TableRow>
// ))} */}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </>
//   );
// };

// export default RowColapsedLayout;
