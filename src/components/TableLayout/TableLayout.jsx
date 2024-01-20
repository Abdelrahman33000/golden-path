import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Paper,
  IconButton,
  Collapse,
  Button,
} from "@mui/material";
import {
  Add,
  DeleteOutlineOutlined,
  MenuOutlined,
  EditNote,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Subtitles,
} from "@mui/icons-material";

import ToolbarTable from "./../ToolbarTable/ToolbarTable";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TableLayout = ({
  listOfData,
  headerCells,
  handleDeleteItem,
  setIsLoading,
  title,
}) => {
  const subTitle = title.toLowerCase().replace(" ", "-");

  const [page, setPage] = useState(0);
  const [colapseIndex, setColapseIndex] = useState(-1);
  const navigator = useNavigate();

  // const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const rowsPerPage = 8;
  const drawerWidth = 240;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleColapse = (rowIndex) => {
    if (rowIndex == colapseIndex) {
      setColapseIndex(-1);
    } else {
      setColapseIndex(rowIndex);
    }
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - listOfData.length) : 0;

  const navigateToAdd = (type, data) => {
    // if (subTitle.includes("-")) {
    //   // category
    //   if (type == "edit") {
    //     navigator(`/admin/add-${subTitle.split("-")[1]}`, {
    //       state: {
    //         category: { ...data },
    //       },
    //     });
    //   } else {
    //     navigator(`/admin/add-${subTitle.split("-")[1]}`);
    //   }
    // } else {
    if (type == "edit") {
      if (subTitle.includes("category")) {
        navigator(`/admin/add-${subTitle}`, {
          state: {
            category: { ...data },
          },
        });
      } else {
        navigator(`/admin/add-${subTitle}`, {
          state: {
            [subTitle]: { ...data },
          },
        });
      }
    } else {
      navigator(`/admin/add-${subTitle}`);
    }
    // }
    console.log(title, subTitle, "title");
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 1,
          }}
        >
          <ToolbarTable title={title} />
          <Button
            // sx={{ justifySelf: "center" }}
            variant="contained"
            endIcon={<Add />}
            onClick={navigateToAdd}
          >
            {`add ${title}`}
          </Button>
          {/* 
          <TablePagination
            sx={{
              "& .MuiTablePagination-displayedRows": {
                margin: 0,
                fontWeight: "bold",
              },
            }}
            component="div"
            count={listOfData.length}
            rowsPerPageOptions={[8]}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
          /> */}
        </Box>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <TableHead>
              <TableRow>
                <TableCell />
                {headerCells.map((head, headIndex) => (
                  <TableCell
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: 18 }}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {listOfData
                .slice(rowsPerPage * page, rowsPerPage * (page + 1))
                .map((row, rowIndex) => (
                  <>
                    <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
                      <TableCell>
                        {!title.toLowerCase().includes("category") && (
                          <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => handleColapse(rowIndex)}
                          >
                            {rowIndex == colapseIndex ? (
                              <KeyboardArrowUp />
                            ) : (
                              <KeyboardArrowDown />
                            )}
                          </IconButton>
                        )}
                      </TableCell>

                      {headerCells.map((head, headIndex) => (
                        <TableCell
                          onClick={() =>
                            title.toLowerCase().includes("category")
                              ? null
                              : handleColapse(rowIndex)
                          }
                          align="center"
                        >
                          {head == "#id"
                            ? rowIndex + 1 + page * rowsPerPage
                            : row[head]?.toString()}
                        </TableCell>
                      ))}
                      <TableCell
                        padding="none"
                        align="center"
                        sx={{ backgroundColor: "lightgray", minWidth: "100px" }}
                      >
                        <IconButton
                          onClick={() => {
                            handleDeleteItem(row._id);
                            setIsLoading(true);
                          }}
                        >
                          <DeleteOutlineOutlined />
                        </IconButton>
                        <IconButton onClick={() => navigateToAdd("edit", row)}>
                          <EditNote />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{
                          paddingBottom: 0,
                          paddingTop: 0,
                        }}
                        colSpan={7}
                      >
                        <Collapse
                          in={rowIndex == colapseIndex}
                          timeout="auto"
                          unmountOnExit
                        >
                          <Box sx={{ margin: 1 }}>
                            <Typography
                              variant="h4"
                              gutterBottom
                              component="div"
                            >
                              Details
                            </Typography>
                            <Table size="small" aria-label="purchases">
                              {/* <TableHead>
                              <TableCell sx={{ fontWeight: "bold" }}>Key</TableCell>
                              <TableCell sx={{ fontWeight: "bold" }}>Value</TableCell>
                            </TableHead> */}
                              <TableBody>
                                {Object.entries(row).map(
                                  (item, entryIndex) =>
                                    entryIndex !== 0 && (
                                      <TableRow>
                                        <TableCell sx={{ fontWeight: "bold" }}>
                                          {item[0]}
                                        </TableCell>
                                        <TableCell
                                          sx={{
                                            width: "90%",
                                            lineBreak: "anywhere",
                                          }}
                                        >
                                          {item[0] == "image" ? (
                                            <img
                                              src={`https://dash-board-sspy.onrender.com/src/uploads/${item[1]}`}
                                              width={"auto"}
                                              height={"100px"}
                                            />
                                          ) : (
                                            item[1].toString()
                                          )}
                                        </TableCell>
                                      </TableRow>
                                    )
                                )}
                              </TableBody>
                            </Table>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 1,
          }}
        >
          <TablePagination
            sx={{
              "& .MuiTablePagination-displayedRows": {
                margin: 0,
                fontWeight: "bold",
              },
            }}
            component="div"
            count={listOfData.length}
            rowsPerPageOptions={[8]}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
          />
        </Typography>
      </Paper>
    </Box>
  );
};

export default TableLayout;
