import React from 'react'
import Logo from '../images/Golden Path - Logo.png'
import Phone from '../images/telephone-x-fill.svg'
import Mail from '../images/mail.svg'
const Header = () => {
  return (
    <header className='d-flex justify-content-between mx-5  my-3 align-items-center'>
        <img src={Logo} alt="Logo" style={{width:"150px" , height:"35px"}} className='me-3' />
<div className='d-flex align-items-center me-3 '>
            <img src={Mail} alt="Mail"  style={{width:"25px"}}  />
            <div className='mx-2 '>
                <p style={{lineHeight:"10px" , opacity:".7" ,color:"#2611e4" }}>Mail Us On</p>
                <p style={{lineHeight:"2px"}}>Info@goldenPath</p>
            </div>
    
</div>        
<div className='d-flex '>

        <img src={Phone} alt="Phone"  style={{width:"25px"}} />
        <div className='mx-2'>
                <p style={{lineHeight:"10px" , opacity:".7" ,color:"#2611e4" }}>Make a call</p>
                <p style={{lineHeight:"2px"}}>+ 123 456 789</p>
            </div>
        </div>        

    </header>
  )
}

export default Header