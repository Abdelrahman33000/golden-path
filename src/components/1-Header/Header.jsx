import React from 'react'
import Logo from '../images/Golden Path - Logo.png'
// import Phone from '../images/telephone-x-fill.svg'
// import Mail from '../images/mail.svg'
import './Header.css'
const Header = () => {
  return (
    <header className='d-flex justify-content-between mx-2   my-3 align-items-center'>
        <img src={Logo} alt="Logo" style={{width:"150px" , height:"35px"}} className='me-3 img' />
       

        <div className=' mail '>
                <p className='icon-email my-3' style={{ color:"#093266" ,lineHeight:"0px", fontSize:"12px"}}> Info@goldenPath</p>
                <p className='icon-phone ' style={{ color:"#093266" ,lineHeight:"10px", fontSize:"12px"}}> +123456789</p>
            </div>

    </header>
  )
}

export default Header