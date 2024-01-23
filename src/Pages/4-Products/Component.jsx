import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

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
  
const Component = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <div>
       <TabPanel value={props.value} index={props.index} >
<div className='d-flex' style={{gap:"30px" , flexWrap:"wrap"}}>
{props.products.map((product) =>
  <div key={product._id} className='card  mx-auto rounded-5 shadow-lg' style={{ display:"flex" ,alignItems:"center" , justifyContent:"space-between" , flexDirection:"column" , overflow:"hidden" , width:"300px" ,padding:"10px" , height:"400px"}}>
          {<img src={product?.image} alt="" width={"100%"} height={200} className='rounded-5' /> }
      <h3 style={{padding:"10px 0"}}>{`${i18n.language=== "en" ? product.name_en :  product.name_ar}`}</h3>
       <p style={{opacity:".5" , fontSize:"15px" , width:"100%" , textAlign:"justify" , padding:"0 20px" ,textOverflow:"ellipsis" , overflowY:"hidden"}}>
       {`${i18n.language=== "en" ? product.description_en :  product.description_ar}`}
 
<div className='d-flex justify-content-center my-3'>
  
</div>    </p>
<Link to={`/productDetails/${product._id}`} style={{textDecoration:"none" , color:"#000"}}  className='btn5 py-1 px-3 rounded-3'>Read More</Link> 
  
  </div>
  )}




</div>

       </TabPanel>
    </div>
  )
}

export default Component
