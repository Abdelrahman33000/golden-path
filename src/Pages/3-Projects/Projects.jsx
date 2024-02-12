import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./projects.css";

import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Component1 from "./Component";
import { GlobalContext } from "../../Context/GlobalContext";
import PaginateComponent from "../../components/PaginateComponent/PaginateComponent";
import Loader from "../../components/Loader/Loader";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Projects = () => {
  const { projectsList, categoryProjectsList } = useContext(GlobalContext);

  const pageItemsCount = 8;
  const [paginatePageCount, setPaginateCount] = useState(
    Math.ceil(projectsList.length / pageItemsCount)
  );
  const { t } = useTranslation();

  const [pageNumber, setPageNumber] = useState(1);
  const [projectsSliceList, setProjectsSliceList] = useState([]);
  const [label, setLabel] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setProjectsSliceList([...projectsList]);
  }, [projectsList]);

  useEffect(() => {
    if (label == 0 && projectsList.length !== 0) {
      setProjectsSliceList([...projectsList]);
    } else {
      setProjectsSliceList([
        ...projectsList.filter(
          ({ category_id }) => category_id == categoryProjectsList[label - 1].id
        ),
      ]);
    }
  }, [label]);

  useEffect(() => {
    if (projectsSliceList.length !== 0) {
      setPaginateCount(Math.ceil(projectsSliceList.length / pageItemsCount));
    } else {
      setPaginateCount(1);
    }
  }, [label, projectsSliceList]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      my={5}
      py={5}
      sx={{
        width: "100%",
        margin: "auto",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <h1 className="project" style={{ fontFamily: "Bodoni Moda" }}>
        {t("Our Projects")}
      </h1>
      <Box
        sx={{
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
          borderBottom: "3px solid #ffa200",
          borderTop: "3px solid #ffa200",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ textAlign: "center" }}
        >
          <Tab
            className="tab"
            onClick={() => {
              setLabel(0);
            }}
            label={t("CategoryAll")}
            {...a11yProps(0)}
          />
          {categoryProjectsList.map((category, index) => (
            <Tab
              className="tab"
              onClick={() => {
                setLabel(index + 1);
              }}
              key={category.id}
              label={category.name}
              {...a11yProps(`${index + 1}`)}
            />
          ))}
        </Tabs>
      </Box>

      {projectsList.length == 0 ? (
        <Loader />
      ) : (
        <>
          <div className="col-lg-9 mx-auto">
            <Component1
              value={value}
              projects={projectsSliceList.slice(
                pageItemsCount * (pageNumber - 1),
                pageItemsCount * pageNumber
              )}
              index={label}
            />
          </div>

          <div className="my-2">
            <PaginateComponent
              pageCount={paginatePageCount}
              onPageChange={(page) => setPageNumber(page.selected + 1)}
            />
          </div>
        </>
      )}
    </Box>
  );
};

export default Projects;
