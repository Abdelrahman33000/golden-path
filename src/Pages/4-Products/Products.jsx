import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./products.css"
// import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';


import img7 from '../../components/images/cam3.jpg'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const Products = () => {
  const top100Films = [
    { title: 'pro1', year: 1994 },
    { title: 'pro2', year: 1972 },
    { title: 'pro3', year: 1974 },
    { title: 'pro4', year: 2008 },
    { title: 'pro5', year: 1957 },
    { title: "pro6", year: 1993 },
    { title: 'pro7', year: 1994 },
    {
      title: 'pro8',
      year: 2003,
    },
  ]

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (


   <div className='my-5' style={{minHeight:"100vh"}}>
   <div className='d-flex align-items-center 'style={{flexWrap:"wrap"}}>
      <div className=' ms-2' style={{flexGrow:"1"}}>
         <h3 className=''>Categories</h3>
         <input type="search" className=' rounded-5 ' placeholder='Search...' style={{outline:"none" , border:"none" ,backgroundColor:"#d2cccc"}} />
        
      </div>

      <Autocomplete className='pe-5 my-2 ms-2'
      id="filter-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      sx={{ width: 300 , zIndex: 0 }}
      renderInput={(params) => <TextField {...params} label="Custom filter" />}
    />

    


   </div>
     <Box 
       sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
     >
       <Tabs
         orientation="vertical"
         variant="scrollable"
         value={value}
         onChange={handleChange}
         aria-label="Vertical tabs example"
         sx={{ borderRight: 1, borderColor: 'divider' , minWidth:"100px" }}
       >
         <Tab label="Item One" {...a11yProps(0)} />
         <Tab label="Item Two" {...a11yProps(1)} />
         <Tab label="Item Three" {...a11yProps(2)} />
         <Tab label="Item Four" {...a11yProps(3)} />
         <Tab label="Item Five" {...a11yProps(4)} />
         <Tab label="Item Six" {...a11yProps(5)} />
         <Tab label="Item Seven" {...a11yProps(6)} />
       </Tabs>
       <TabPanel value={value} index={0} >
<div className='d-flex' style={{gap:"30px" , flexWrap:"wrap"}}>
  <div className='card  cd5 rounded-5 shadow-lg' style={{ display:"flex" ,justifyContent:"center" ,alignItems:"center" }}>
  <img src={img7} alt='' width={200} className='rounded-5 p-2' />
  
        {/* <Rating name="read-only" value={5} readOnly className='my-2' /> */}
  <h5>Product 1</h5>
  <p> <button className='btn5 py-1 px-3 rounded-3'>Request now</button></p>
  
  </div>

  <div className='card  cd5 rounded-5 shadow-lg' style={{ display:"flex" ,justifyContent:"center" ,alignItems:"center" }}>
  <img src={img7} alt='' width={200} className='rounded-5 p-2' />
  
        {/* <Rating name="read-only" value={5} readOnly className='my-2' /> */}
  <h5>Product 1</h5>
  <p> <button className='btn5 py-1 px-3 rounded-3'>Request now</button></p>
  
  </div>

  <div className='card  cd5 rounded-5 shadow-lg' style={{ display:"flex" ,justifyContent:"center" ,alignItems:"center" }}>
  <img src={img7} alt='' width={200} className='rounded-5 p-2' />
  
        {/* <Rating name="read-only" value={5} readOnly className='my-2' /> */}
  <h5>Product 1</h5>
  <p> <button className='btn5 py-1 px-3 rounded-3'>Request now</button></p>
  
  </div>

  <div className='card  cd5 rounded-5 shadow-lg' style={{ display:"flex" ,justifyContent:"center" ,alignItems:"center" }}>
  <img src={img7} alt='' width={200} className='rounded-5 p-2' />
  
        {/* <Rating name="read-only" value={5} readOnly className='my-2' /> */}
  <h5>Product 1</h5>
  <p> <button className='btn5 py-1 px-3 rounded-3'>Request now</button></p>
  
  </div>

  <div className='card  cd5 rounded-5 shadow-lg' style={{ display:"flex" ,justifyContent:"center" ,alignItems:"center" }}>
  <img src={img7} alt='' width={200} className='rounded-5 p-2' />
  
        {/* <Rating name="read-only" value={5} readOnly className='my-2' /> */}
  <h5>Product 1</h5>
  <p> <button className='btn5 py-1 px-3 rounded-3'>Request now</button></p>
  
  </div>


  <div className='card  cd5 rounded-5 shadow-lg' style={{ display:"flex" ,justifyContent:"center" ,alignItems:"center" }}>
  <img src={img7} alt='' width={200} className='rounded-5 p-2' />
  
        {/* <Rating name="read-only" value={5} readOnly className='my-2' /> */}
  <h5>Product 1</h5>
  <p> <button className='btn5 py-1 px-3 rounded-3'>Request now</button></p>
  
  </div>



</div>

       </TabPanel>
       <TabPanel value={value} index={1}>
       
       
       
<div className='d-flex' style={{gap:"30px" , flexWrap:"wrap"}}>
  <div className='card  cd5 rounded-5 shadow-lg' style={{ display:"flex" ,justifyContent:"center" ,alignItems:"center" }}>
  <img src={img7} alt='' width={200} className='rounded-5 p-2' />
  
        {/* <Rating name="read-only" value={5} readOnly className='my-2' /> */}
  <h5>Product 1</h5>
  <p> <button className='btn5 py-1 px-3 rounded-3'>Request now</button></p>
  
  </div>

  <div className='card  cd5 rounded-5 shadow-lg' style={{ display:"flex" ,justifyContent:"center" ,alignItems:"center" }}>
  <img src={img7} alt='' width={200} className='rounded-5 p-2' />
  
        {/* <Rating name="read-only" value={5} readOnly className='my-2' /> */}
  <h5>Product 1</h5>
  <p> <button className='btn5 py-1 px-3 rounded-3'>Request now</button></p>
  
  </div>

  <div className='card  cd5 rounded-5 shadow-lg' style={{ display:"flex" ,justifyContent:"center" ,alignItems:"center" }}>
  <img src={img7} alt='' width={200} className='rounded-5 p-2' />
  
        {/* <Rating name="read-only" value={5} readOnly className='my-2' /> */}
  <h5>Product 1</h5>
  <p> <button className='btn5 py-1 px-3 rounded-3'>Request now</button></p>
  
  </div>



</div>


       </TabPanel>
       <TabPanel value={value} index={2}>
        
        
        
<div className='d-flex' style={{gap:"30px" , flexWrap:"wrap"}}>
  <div className='card  cd5 rounded-5 shadow-lg' style={{ display:"flex" ,justifyContent:"center" ,alignItems:"center" }}>
  <img src={img7} alt='' width={200} className='rounded-5 p-2' />
  
        {/* <Rating name="read-only" value={5} readOnly className='my-2' /> */}
  <h5>Product 1</h5>
  <p> <button className='btn5 py-1 px-3 rounded-3'>Request now</button></p>
  
  </div>

  <div className='card  cd5 rounded-5 shadow-lg' style={{ display:"flex" ,justifyContent:"center" ,alignItems:"center" }}>
  <img src={img7} alt='' width={200} className='rounded-5 p-2' />
  
        {/* <Rating name="read-only" value={5} readOnly className='my-2' /> */}
  <h5>Product 1</h5>
  <p> <button className='btn5 py-1 px-3 rounded-3'>Request now</button></p>
  
  </div>





</div>
       </TabPanel>
       <TabPanel value={value} index={3}>
         Item Four
       </TabPanel>
       <TabPanel value={value} index={4}>
         Item Five
       </TabPanel>
       <TabPanel value={value} index={5}>
         Item Six
       </TabPanel>
       <TabPanel value={value} index={6}>
         Item Seven
       </TabPanel>
     </Box>
   </div>


    )
}

export default Products