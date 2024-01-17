import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './projects.css'
import img5 from '../../components/images/cam1.jpeg'
import img2 from '../../components/images/cam2.jpg'
import img3 from '../../components/images/cam3.jpg'
import img1 from '../../components/images/cam4.jpg'
import { Link } from 'react-router-dom';
import { AddLink, ArrowBackIosNew, ArrowForwardIos, TravelExplore } from '@mui/icons-material';
import "./projects.css"
import { useTranslation } from 'react-i18next';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Projects = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { t } = useTranslation();


  return (
    
    <Box  my={5} py={5} sx={{ width: '100%' , margin:"auto" ,textAlign:"center", minHeight:"100vh"}}>

        <h1 className='project' style={{fontFamily:"Bodoni Moda"}}>   {t('Our Projects')}</h1>
      <Box    sx={{ borderColor: 'divider',display:"flex", justifyContent:"center" ,  borderBottom:"3px solid #ffa200" , borderTop:"3px solid #ffa200" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ textAlign:"center"}}>
          <Tab  className='tab' label="All" {...a11yProps(0)} />
          <Tab className='tab'label="Item one" {...a11yProps(1)} />
          <Tab className='tab' label="Item Two" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value}  index={0}>
        
        
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
      </CustomTabPanel>
      <div className='my-5' style={{textAlign:"center" }}>
  <button className='btn5 mx-3 p-2'><ArrowBackIosNew /></button>
  <button className='btn5 mx-3 py-3 px-4'> 01 </button>
  <button className='btn5 mx-3 py-3 px-4'> 02 </button>
  <button className='btn5 mx-3 p-2'><ArrowForwardIos /></button>

</div>
    </Box>



    )
}

export default Projects