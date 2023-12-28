import React from 'react'
import Logo from '../images/Golden Path - Logo.png'
// import Phone from '../images/telephone-x-fill.svg'
// import Mail from '../images/mail.svg'
import './Header.css'
const Header = () => {
  return (
    <header className='d-flex justify-content-between mx-5   my-3 align-items-center'>
        <img src={Logo} alt="Logo" style={{width:"150px" , height:"35px"}} className='me-3 img' />
       

        <div className=' mail '>
                <p className='icon-email mb-4' style={{ color:"#093266" , fontSize:"12px"}}> Info@goldenPath</p>
                <p className='icon-phone ' style={{ color:"#093266" , fontSize:"12px"}}> +123456789</p>
            </div>

    </header>
  )
}

export default Header