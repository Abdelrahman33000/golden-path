import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../images/cam.png'
import './about.css'
const About = () => {
  return (
    <div className='row my-5' >
        <img src={Img} alt="Img" className='col-lg-5 shadow-lg  rounded-5 mb-5' />
        <div className='col-lg-6  '>
            <h5 className='px-5 py-3 ms-5 img5' >About Golden paths</h5>
            <p className='px-5 py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Explicabo ipsam dolorem repudiandae,
                  quasi tenetur harum iure possimus eos, 
                vero voluptatem soluta ullam optio iusto perferendis atque? Illo porro eligendi modi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam iste consectetur
                 consequatur excepturi fugiat, debitis distinctio accusantium beatae corporis magnam aliquid maiores
                 amet nemo natus illum quis voluptatem exercitationem?</p>

       <button className='btn5 mx-5 p-3 rounded' style={{display:"flex" , justifyContent:"center"}}>
        <Link to='/about' style={{textDecoration:"none" , color:"#fff"}}>
        Read More

        </Link>
         
         </button>

        </div>
    </div>
  )
}

export default About
