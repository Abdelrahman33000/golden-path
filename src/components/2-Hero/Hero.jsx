import React from 'react'
import './Hero.css'
import Carousel from 'react-bootstrap/Carousel';
import img   from '../../components/images/Photographer.jpg';
import img2   from '../../components/images/photograph.jpg';
import img3   from '../../components/images/photograph5.jpg';

const Hero = () => {
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
     <Carousel.Item>
       <img  src={img } alt='' text="First slide"  style={{width:"100%" , height:"550px"}} />
       <Carousel.Caption style={{textAlign:"left" , paddingBottom:"100px"}}>
       <h1>Capture Life's <br /> Brilliance</h1><br />
       Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Eligendi deleniti obcaecati veritatis officia aperiam  <br />
        dignissimos nihil maiores voluptate rerum! Totam accusantium <br />
         dolorem eveniet at minima, iusto quas mollitia labore ipsa? <br /><br />
       {/* <button className='btn5 p-3 rounded'> Read More</button> */}
  
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img  src={img3 } alt='' text="Second slide" style={{width:"100%" , height:"550px"}} />
  
       <Carousel.Caption style={{textAlign:"left" , paddingBottom:"100px"}}>
       <h1>Capture Life's <br /> Brilliance</h1><br />
       Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Eligendi deleniti obcaecati veritatis officia aperiam  <br />
        dignissimos nihil maiores voluptate rerum! Totam accusantium <br />
         dolorem eveniet at minima, iusto quas mollitia labore ipsa? <br /><br />
         {/* <button className='btn5 p-3 rounded'> Read More</button> */}
  
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img  src={img2 } alt='' text="Third slide" style={{width:"100%" , height:"550px"}} />
  
       <Carousel.Caption style={{textAlign:"left" , paddingBottom:"100px"}}>
         <h1>Capture Life's <br /> Brilliance</h1><br />
       Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Eligendi deleniti obcaecati veritatis officia aperiam  <br />
        dignissimos nihil maiores voluptate rerum! Totam accusantium <br />
         dolorem eveniet at minima, iusto quas mollitia labore ipsa? <br /><br />
       {/* <button className='btn5 p-3 rounded'> Read More</button> */}
  
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
    </main>
  )
}

export default Hero
