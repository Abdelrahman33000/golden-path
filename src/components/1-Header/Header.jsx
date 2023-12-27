import React from 'react'
import Logo from '../images/Golden Path - Logo.png'
// import Phone from '../images/telephone-x-fill.svg'
// import Mail from '../images/mail.svg'
import './Header.css'
const Header = () => {
  return (
    <header className='d-flex justify-content-between  container  my-3 align-items-center'>
        <img src={Logo} alt="Logo" style={{width:"150px" , height:"35px"}} className='me-3 img' />
<div className='d-flex align-items-center  mail  icon-email'>
            {/* <img src={Mail} alt="Mail"  style={{width:"25px" ,}}  /> */}
            <div className='mx-2  '>
                <p style={{lineHeight:"10px"  ,color:"#093266" }}>Mail Us On</p>
                <p style={{lineHeight:"2px" , color:"#f7921e"}}>Info@goldenPath</p>
            </div>
    
</div>        
<div className='d-flex  align-items-center'>
<div className='icon-phone' />
        {/* <img src={Phone} alt="Phone"  style={{width:"25px"}} /> */}
        <div className='mx-2 mail '>
                <p style={{lineHeight:"10px" ,color:"#093266" }}>Make a call</p>
                <p style={{lineHeight:"2px"  , color:"#f7921e"}}>+123456789</p>
            </div>
        </div>        

    </header>
  )
}

export default Header