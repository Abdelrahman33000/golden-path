import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import TableLayout from "../../Components/TableLayout/TableLayout";

const ProjectTableBoard = () => {
  const [listOfProjects, setListOfProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const headersProject = ["#id",  "name_en", "name_ar", "in_home"];

  useEffect(() => {
    getProjectsFromAPI();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [listOfProjects]);

  async function getProjectsFromAPI() {
    await fetch("https://dash-board-sspy.onrender.com/api/all-projects", {})
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data get");
        setListOfProjects(data.data);
      })
      .catch((error) => console.log(error, "error"));
  }

  async function deleteProjectsFromAPI(projectID) {
    // console.log(listOfprojects[projectIndex]._id, "id");
    console.log(projectID, "id index");
    await fetch(
      `https://dash-board-sspy.onrender.com/api/project?id=${projectID}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data delete");
        setListOfProjects(
          listOfProjects.filter((project) => project._id !== projectID)
        );
      })
      .catch((error) => console.log(error, "error"));
  }

  return (
    <div className="min-vh-100">
      {isLoading || listOfProjects.length == 0 ? (
        <Loader />
      ) : (
        <TableLayout
          listOfData={listOfProjects}
          headerCells={headersProject}
          handleDeleteItem={deleteProjectsFromAPI}
          // handleUpdateItem={updateProductsToAPI}
          setIsLoading={setIsLoading}
          title={"Project"}
        />
      )}
    </div>
  );
};

export default ProjectTableBoard;
