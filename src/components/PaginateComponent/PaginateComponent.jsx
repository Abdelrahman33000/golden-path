import React from "react";
// import { BsThreeDots } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  MoreHoriz,
} from "@mui/icons-material";
import "../../index.css";

const PaginateComponent = ({ pageCount, onPageChange }) => {
  return (
    <div
      dir="ltr"
      className="w-100 position-sticky bottom-0 d-flex justify-content-center align-items-center p-2 "
    >
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        previousLabel={<ArrowBackIosNew />}
        nextLabel={<ArrowForwardIos />}
        breakLabel={<MoreHoriz />}
        previousLinkClassName="mx-2 p-2 d-flex align-items-center justify-content-center text-decoration-none btn5"
        nextLinkClassName="mx-2 p-2 d-flex align-items-center justify-content-center text-decoration-none btn5"
        pageLinkClassName="p-2 d-flex align-items-center justify-content-center text-decoration-none btn5 p-2 px-3 mx-auto"
        breakLinkClassName="p-2 btn border-0"
        activeLinkClassName="btn5-active"
        className="d-flex justify-content-center align-items-center list-unstyled p-2 w-100 gap-1 m-0"
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default PaginateComponent;
