import React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

const HeaderTable = ({
  order,
  orderBy,
  handleSortBy,
  listOfData,
  headerCells,
}) => {
  // const headCells = [
  //   {
  //     id: "name",
  //     numeric: false,
  //     disablePadding: true,
  //     label: "Dessert",
  //   },
  //   {
  //     id: "calories",
  //     numeric: true,
  //     disablePadding: false,
  //     label: "Calories",
  //   },
  //   {
  //     id: "fat",
  //     numeric: true,
  //     disablePadding: false,
  //     label: "Fat",
  //   },
  //   {
  //     id: "carbs",
  //     numeric: true,
  //     disablePadding: false,
  //     label: "Carbs",
  //   },
  //   {
  //     id: "protein",
  //     numeric: true,
  //     disablePadding: false,
  //     label: "Protein",
  //   },
  // ];

  //   function EnhancedTableHead(props) {
  //     const {
  //       onSelectAllClick,
  //       order,
  //       orderBy,
  //       numSelected,
  //       rowCount,
  //       onRequestSort,
  //     } = props;

  //     return (

  //     );
  //   }

  // EnhancedTableHead.propTypes = {
  //   numSelected: PropTypes.number.isRequired,
  //   onRequestSort: PropTypes.func.isRequired,
  //   onSelectAllClick: PropTypes.func.isRequired,
  //   order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  //   orderBy: PropTypes.string.isRequired,
  //   rowCount: PropTypes.number.isRequired,
  // };

  //   const createSortHandler = (property) => (event) => {
  //     handleRequestSort(event, property);
  //   };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell> */}
        {headerCells.map((head, headIndex) => (
          <TableCell
            key={`head-${headIndex}`}
            // align={headCell.numeric ? "right" : "left"}
            align={"center"}
            // padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headIndex ? order : false}
          >
            <TableSortLabel
              sx={{ fontWeight: "bold" }}
              active={orderBy === headIndex}
              direction={orderBy === headIndex ? order : "asc"}
              // onClick={createSortHandler(headCell.id)}
              onClick={() => handleSortBy(headIndex)}
            >
              {head}
              {orderBy === headIndex ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default HeaderTable;
