import React from "react";
import LayoutForm from "../../components/LayoutForm/LayoutForm";
import { useLocation } from "react-router-dom";

const AddProduct = () => {
  let { state } = useLocation();

  console.log(state, "state");
  return (
    <div>
      <LayoutForm data={state} />
    </div>
  );
};

export default AddProduct;
