import React from 'react'
import Img from '../images/cam.png'
const About = () => {
  return (
    <div className='row my-5' >
        <img src={Img} alt="Img" className='col-lg-5 shadow-lg  rounded-5 mb-5' />
        <div className='col-lg-6  '>
            <h1 className='px-5 ' style={{color:"#093266"}}>About Golden paths</h1>
            <p className='px-5 py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Explicabo ipsam dolorem repudiandae,
                  quasi tenetur harum iure possimus eos, 
                vero voluptatem soluta ullam optio iusto perferendis atque? Illo porro eligendi modi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam iste consectetur
                 consequatur excepturi fugiat, debitis distinctio accusantium beatae corporis magnam aliquid maiores
                 amet nemo natus illum quis voluptatem exercitationem?</p>
        </div>
    </div>
  )
}

export default About
