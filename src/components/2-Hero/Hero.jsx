import React, { useEffect } from 'react'
import './Hero.css'
import Carousel from 'react-bootstrap/Carousel';
import img   from '../../components/images/Photographer.jpg';
import img2   from '../../components/images/photograph.jpg';
import img3   from '../../components/images/photograph5.jpg';
import { useState } from 'react';
import { Diversity1 } from '@mui/icons-material';
import { useTranslation } from "react-i18next";

const Hero = () => {
const [ sliders , setSliders] =useState([])

  useEffect(() => {
    fetch('https://dash-board-sspy.onrender.com/api/all-sliders')
    .then(response => response.json())
    .then(data =>{
      console.log(data.data ,"jjjjjjjjjjjjj")
      
      setSliders(data.data)

    } 
    )
  },[])

  const { t, i18n } = useTranslation();
  
  return (
    <main>

   {/* <div className=' p-5'>
       <h1>Capture Life's <br /> Brilliance</h1><br />
       Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Eligendi deleniti obcaecati veritatis officia aperiam  <br />
        dignissimos nihil maiores voluptate rerum! Totam accusantium <br />
         dolorem eveniet at minima, iusto quas mollitia labore ipsa? <br /><br /> */}
    {/* <button className='bg-dark text-light px-5 py-2 rounded-5' > Check More</button> */}
   {/* </div> */}
   <Carousel fade className='Carousel '>
    {sliders.map((slider) => 
    
    
     <Carousel.Item>
       <img  src={slider.image } alt='' text="First slide"  style={{width:"100%" , height:"550px"}} />
       <Carousel.Caption style={{textAlign:"left" , paddingBottom:"100px"}}>
       <h1 style={{width:"60%"}}> {i18n.language === "en"
                          ? slider.title_en
                          : slider.title_ar}</h1><br />
                          <p style={{width:"50%"}}> {   i18n.language === "en"
                      ? slider.description_en
                      : slider.description_ar}</p>

       {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Eligendi deleniti obcaecati veritatis officia aperiam  <br />
        dignissimos nihil maiores voluptate rerum! Totam accusantium <br />
         dolorem eveniet at minima, iusto quas mollitia labore ipsa? <br /><br />
   */}
       </Carousel.Caption>
     </Carousel.Item>
    
    )}











{/*      
     <Carousel.Item>
       <img  src={img3 } alt='' text="Second slide" style={{width:"100%" , height:"550px"}} />
  
       <Carousel.Caption style={{textAlign:"left" , paddingBottom:"100px"}}>
       <h1>Capture Life's <br /> Brilliance</h1><br />
       Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Eligendi deleniti obcaecati veritatis officia aperiam  <br />
        dignissimos nihil maiores voluptate rerum! Totam accusantium <br />
         dolorem eveniet at minima, iusto quas mollitia labore ipsa? <br /><br />
  
       </Carousel.Caption>
     </Carousel.Item> */}
     


     {/* <Carousel.Item>
       <img  src={img2 } alt='' text="Third slide" style={{width:"100%" , height:"550px"}} />
  
       <Carousel.Caption style={{textAlign:"left" , paddingBottom:"100px"}}>
         <h1>Capture Life's <br /> Brilliance</h1><br />
       Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Eligendi deleniti obcaecati veritatis officia aperiam  <br />
        dignissimos nihil maiores voluptate rerum! Totam accusantium <br />
         dolorem eveniet at minima, iusto quas mollitia labore ipsa? <br /><br />
  
       </Carousel.Caption>
     </Carousel.Item> */}

   </Carousel>
    </main>
  )
}

export default Hero
