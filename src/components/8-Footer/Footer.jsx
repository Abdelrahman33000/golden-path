import React from 'react'
import img from '../images/Golden Path - Logo.png'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='row   text-light'style={{flexGrow:"1"}}>
<div className='col-lg-3 px-5'>
    <img src={img} alt="footer" className='py-5 me-5'  style={{width:"250px" , height:"200px"}}/>
    
</div> <div className='bg-dark col-lg-9 row p-5 ms-1'>
         <div className='col-lg-2   m-sm-3  col-sm-4 '>
           <h3>Home</h3>
           <p>Sub Link</p>
           <p>Sub Link</p>
           <p>Sub Link</p>
         </div>
    
         <div className='col-lg-3   m-sm-3  col-sm-4 '>
           <h3>About</h3>
           <p>Sub Link</p>
           <p>Sub Link</p>
           <p>Sub Link</p>
         </div>
    
         <div className='col-lg-3  m-sm-3  col-sm-4 '>
           <h3>Products</h3>
           <p>Sub Link</p>
           <p>Sub Link</p>
           <p>Sub Link</p>
         </div>

         <div className='col-lg-2   m-sm-3  col-sm-4 '>
           <h3>Contact Us</h3>
           <p>Sub Link</p>
           <p>Sub Link</p>
           <p>Sub Link</p>
         </div>
 </div>
    </footer>
  )
}

export default Footer
