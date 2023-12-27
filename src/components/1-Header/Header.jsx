import React from 'react'
import Logo from '../images/Golden Path - Logo.png'
// import Phone from '../images/telephone-x-fill.svg'
// import Mail from '../images/mail.svg'
import './Header.css'
const Header = () => {
  return (
    <header className='d-flex justify-content-between  container  my-3 align-items-center'>
        <img src={Logo} alt="Logo" style={{width:"150px" , height:"35px"}} className='me-3 img' />
       

        <div className='mx-2 mail '>
                <p className='icon-email mb-4' style={{lineHeight:"10px" ,color:"#093266" }}> Info@goldenPath</p>
                <p className='icon-phone ' style={{lineHeight:"2px"  , color:"#093266"}}> +123456789</p>
            </div>

    </header>
  )
}

export default Header