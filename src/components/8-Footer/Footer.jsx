import React from 'react'
import img from '../images/Golden Path - Logo.png'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='row   text-light mx-0'>
<div className='col-lg-3 px-5'>
    <img src={img} alt="footer" className='py-5 me-5'  style={{width:"200px" , height:"150px"}}/>
    
</div> <div className='bg-dark  col-lg-9 row p-5 m-0'>
         <div className='col-lg-2   m-sm-3  col-sm-4 '>
           <h4 style={{color:"#ffa200"}}>Home</h4>
           <p>Sub Link</p>
           <p>Sub Link</p>
           <p>Sub Link</p>
         </div>
    
         <div className='col-lg-2   m-sm-3  col-sm-4 '>
           <h4 style={{color:"#ffa200"}}>About</h4>
           <p>Sub Link</p>
           <p>Sub Link</p>
           <p>Sub Link</p>
         </div>

         <div className='col-lg-2   m-sm-3  col-sm-4 '>
           <h4 style={{color:"#ffa200"}}>Projects</h4>
           <p>Sub Link</p>
           <p>Sub Link</p>
           <p>Sub Link</p>
         </div>
    
         <div className='col-lg-2  m-sm-3  col-sm-4 '>
           <h4 style={{color:"#ffa200"}}>Products</h4>
           <p>Sub Link</p>
           <p>Sub Link</p>
           <p>Sub Link</p>
         </div>

         <div className='col-lg-2   m-sm-3  col-sm-4 '>
           <h4 style={{color:"#ffa200"}}>Contact Us</h4>
           <p>Sub Link</p>
           <p>Sub Link</p>
           <p>Sub Link</p>
         </div>
 </div>
    </footer>
  )
}

export default Footer
