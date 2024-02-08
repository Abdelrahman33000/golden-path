import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./projects.css";
import img5 from "../../components/images/cam1.jpeg";
import img2 from "../../components/images/cam2.jpg";
import img3 from "../../components/images/cam3.jpg";
import img1 from "../../components/images/cam4.jpg";
import { Link } from "react-router-dom";
import {
  AddLink,
  ArrowBackIosNew,
  ArrowForwardIos,
  TravelExplore,
} from "@mui/icons-material";
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
  //   const { t } = useTranslation();

  //   const [project , setProject] =useState([])

  //   const { t, i18n } = useTranslation();

  //   console.log(i18n.language ,"kjjkj");
  //   React.useEffect(() => {
  //     fetch('https://dash-board-sspy.onrender.com/api/all-Project?page=1')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.data)
  //       const data1 = data.data
  //       setProject(data1);

  //     })

  //   }, [])

  // const [projectsList, setProjects] = useState([]);

  // const [projectPager, setProjectPager] = useState([]);

  const { t, i18n } = useTranslation();

  const [pageNumber, setPageNumber] = useState(1);
  const [paginatePageCount, setPaginateCount] = useState(1);
  const [projectsSliceList, setProjectsSliceList] = useState([]);
  const [label, setLabel] = useState(0);
  const [value, setValue] = useState(0);

  const { dealWithAPIData, isLoading, projectsList, categoryProjectsList } =
    useContext(GlobalContext);

  const pageItemsCount = 8;

  useEffect(() => {
    setProjectsSliceList([...projectsList]);
    setPaginateCount(Math.ceil(projectsList.length / pageItemsCount));
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
    setPaginateCount(Math.ceil(projectsSliceList.length / pageItemsCount));
  }, [label]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log(i18n.language, "kjjkj");
  // useEffect(() => {
  //   fetch("https://dash-board-sspy.onrender.com/api/all-projects")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.data, "hello");
  //       const data1 = data.data;
  //       setProjects(data1);
  //       setProjectPager(data1);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("https://dash-board-sspy.onrender.com/api/all-category?type=project")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.data);
  //       const data2 = data.data;
  //       setCategories(data2);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (label == 0) {
  //     setProjectPager(projects);
  //   } else {
  //     const category = categories[label - 1];
  //     console.log(category, "jjjjjjjjjjjjjj");
  //     console.log(projects, "jjjjjjjkkkkkkkkkk");

  //     // عدلى دى يااااا زلفى
  //     const data = projects.filter(
  //       (item) => item.category._id === category._id
  //     );
  //     setProjectPager(data);
  //   }
  // }, [label]);

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
              // pageCount={5}
              onPageChange={(page) => {
                console.log(page, "page");
                setPageNumber(page.selected + 1);
              }}
            />
          </div>
        </>
      )}

      {/* <div className="my-5" style={{ textAlign: "center" }}>
        <button className="btn5 mx-3 p-2">
          <ArrowBackIosNew />
        </button>
        <button className="btn5 mx-3 py-3 px-4"> 01 </button>
        <button className="btn5 mx-3 py-3 px-4"> 02 </button>
        <button className="btn5 mx-3 p-2">
          <ArrowForwardIos />
        </button>
      </div> */}
    </Box>
  );
};

export default Projects;

{
  /* <CustomTabPanel value={value}  index={0}>
        
        
      <div class="container">
    <div class="row">
        <div class="col-md-4 col-sm-6">
            <div class="box">
                <img src={img5} alt='' />
                <div class="box-content">
                <h3 class="title">Project </h3>
                    <span class="post">Web designer</span>
                </div>
                <ul class="icon">
                <li><Link to="/Project1"><AddLink /></Link></li>
                <li><Link href="#"><TravelExplore /></Link></li>
                </ul>
            </div>
        </div>

        <div class="col-md-4 col-sm-6">
            <div class="box">
                <img src={img2} alt='' />
                <div class="box-content">
                <h3 class="title">Project </h3>
                    <span class="post">Web designer</span>
                </div>
                <ul class="icon">
                <li><Link href="#"><AddLink /></Link></li>
                <li><Link href="#"><TravelExplore /></Link></li>
                </ul>
            </div>
        </div>

        <div class="col-md-4 col-sm-6">
            <div class="box">
                <img src={img3} alt='' />
                <div class="box-content">
                <h3 class="title">Project </h3>
                    <span class="post">Web designer</span>
                </div>
                <ul class="icon">
                    <li><Link href="#"><AddLink /></Link></li>
                    <li><Link href="#"><TravelExplore /></Link></li>
                </ul>
            </div>
        </div>
        
        <div class="col-md-4 col-sm-6">
            <div class="box">
            <img src={img1} alt='' />
                <div class="box-content">
                <h3 class="title">Project </h3>
                    <span class="post">Web designer</span>
                </div>
                <ul class="icon">
                <li><Link href="#"><AddLink /></Link></li>
                    <li><Link href="#"><TravelExplore /></Link></li>
                </ul>
            </div>
        </div>

        <div class="col-md-4 col-sm-6">
            <div class="box">
            <img src={img3} alt='' />
                <div class="box-content">
                <h3 class="title">Project </h3>
                    <span class="post">Web designer</span>
                </div>
                <ul class="icon">
                <li><Link href="#"><AddLink /></Link></li>
                    <li><Link href="#"><TravelExplore /></Link></li>
                </ul>
            </div>
        </div>

        <div class="col-md-4 col-sm-6">
            <div class="box">
            <img src={img2} alt='' />
                <div class="box-content">
                <h3 class="title">Project </h3>
                    <span class="post">Web designer</span>
                </div>
                <ul class="icon">
                <li><Link href="#"><AddLink /></Link></li>
                    <li><Link href="#"><TravelExplore /></Link></li>
                </ul>
            </div>
        </div>

        <div class="col-md-4 col-sm-6">
            <div class="box">
            <img src={img5} alt='' />
                <div class="box-content">
                <h3 class="title">Project </h3>
                    <span class="post">Web designer</span>
                </div>
                <ul class="icon">
                <li><Link href="#"><AddLink /></Link></li>
                    <li><Link href="#"><TravelExplore /></Link></li>
                </ul>
            </div>
        </div>

        <div class="col-md-4 col-sm-6">
            <div class="box">
            <img src={img1} alt='' />
                <div class="box-content">
                <h3 class="title">Project </h3>
                    <span class="post">Web designer</span>
                </div>
                <ul class="icon">
                <li><Link href="#"><AddLink /></Link></li>
                    <li><Link href="#"><TravelExplore /></Link></li>
                </ul>
            </div>
        </div>

        <div class="col-md-4 col-sm-6">
            <div class="box">
            <img src={img5} alt='' />
                <div class="box-content">
                <h3 class="title">Project </h3>
                    <span class="post">Web designer</span>
                </div>
                <ul class="icon">
                <li><Link href="#"><AddLink /></Link></li>
                    <li><Link href="#"><TravelExplore /></Link></li>
                </ul>
            </div>
        </div>


    </div>


  </div>







      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        
        
      <div class="container">
    <div class="row">
        <div class="col-md-4 col-sm-6">
            <div class="box">
                <img src={img5} alt='' />
                <div class="box-content">
                <h3 class="title">Project </h3>
                    <span class="post">Web designer</span>
                </div>
                <ul class="icon">
                <li><Link href="#"><AddLink /></Link></li>
                <li><Link href="#"><TravelExplore /></Link></li>
                </ul>
            </div>
        </div>

        <div class="col-md-4 col-sm-6">
            <div class="box">
                <img src={img2} alt='' />
                <div class="box-content">
                <h3 class="title">Project </h3>
                    <span class="post">Web designer</span>
                </div>
                <ul class="icon">
                <li><Link href="#"><AddLink /></Link></li>
                <li><Link href="#"><TravelExplore /></Link></li>
                </ul>
            </div>
        </div>

        <div class="col-md-4 col-sm-6">
            <div class="box">
                <img src={img3} alt='' />
                <div class="box-content">
                <h3 class="title">Project </h3>
                    <span class="post">Web designer</span>
                </div>
                <ul class="icon">
                    <li><Link href="#"><AddLink /></Link></li>
                    <li><Link href="#"><TravelExplore /></Link></li>
                </ul>
            </div>
        </div>
        
    

   

     

    


  


    </div>


  </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>        
        
        <div class="container">
      <div class="row">
          <div class="col-md-4 col-sm-6">
              <div class="box">
                  <img src={img5} alt='' />
                  <div class="box-content">
                  <h3 class="title">Project </h3>
                      <span class="post">Web designer</span>
                  </div>
                  <ul class="icon">
                  <li><Link href="#"><AddLink /></Link></li>
                  <li><Link href="#"><TravelExplore /></Link></li>
                  </ul>
              </div>
          </div>
  
          <div class="col-md-4 col-sm-6">
              <div class="box">
                  <img src={img2} alt='' />
                  <div class="box-content">
                  <h3 class="title">Project </h3>
                      <span class="post">Web designer</span>
                  </div>
                  <ul class="icon">
                  <li><Link href="#"><AddLink /></Link></li>
                  <li><Link href="#"><TravelExplore /></Link></li>
                  </ul>
              </div>
          </div>
  
          <div class="col-md-4 col-sm-6">
              <div class="box">
                  <img src={img3} alt='' />
                  <div class="box-content">
                  <h3 class="title">Project </h3>
                      <span class="post">Web designer</span>
                  </div>
                  <ul class="icon">
                      <li><Link href="#"><AddLink /></Link></li>
                      <li><Link href="#"><TravelExplore /></Link></li>
                  </ul>
              </div>
          </div>
          
          <div class="col-md-4 col-sm-6">
              <div class="box">
              <img src={img1} alt='' />
                  <div class="box-content">
                  <h3 class="title">Project </h3>
                      <span class="post">Web designer</span>
                  </div>
                  <ul class="icon">
                  <li><Link href="#"><AddLink /></Link></li>
                      <li><Link href="#"><TravelExplore /></Link></li>
                  </ul>
              </div>
          </div>
  
          <div class="col-md-4 col-sm-6">
              <div class="box">
              <img src={img3} alt='' />
                  <div class="box-content">
                  <h3 class="title">Project </h3>
                      <span class="post">Web designer</span>
                  </div>
                  <ul class="icon">
                  <li><Link href="#"><AddLink /></Link></li>
                      <li><Link href="#"><TravelExplore /></Link></li>
                  </ul>
              </div>
          </div>
  
          <div class="col-md-4 col-sm-6">
              <div class="box">
              <img src={img2} alt='' />
                  <div class="box-content">
                  <h3 class="title">Project </h3>
                      <span class="post">Web designer</span>
                  </div>
                  <ul class="icon">
                  <li><Link href="#"><AddLink /></Link></li>
                      <li><Link href="#"><TravelExplore /></Link></li>
                  </ul>
              </div>
          </div>
  
      
  
      
  
       
  
  
      </div>
  
  
    </div>
      </CustomTabPanel> */
}
