import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const params = useParams();
  return <div>ProjectDetail{params.productsId}</div>;
};

export default ProjectDetails;
