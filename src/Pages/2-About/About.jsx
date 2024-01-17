import React from 'react'
import CountUp from 'react-countup';

import Carousel from 'react-bootstrap/Carousel';
import img   from '../../components/images/cameraabout.png';
import img2   from '../../components/images/slide1.jpg';
import img3   from '../../components/images/Scamera.jpg';
import { Balance, Beenhere, CameraRoll, Cottage, Engineering, LaptopChromebook, LocalPhone, TaskAlt} from '@mui/icons-material'
import './About.css'

const About = () => {
  return (
 <div>
     <Carousel fade className='Carousel'>
     <Carousel.Item>
       <img  src={img } alt='' text="First slide"  style={{width:"100%" , height:"450px"}} />
       <Carousel.Caption>
         <h3>First slide label</h3>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       {/* <button className='btn5 p-3 rounded'> Read More</button> */}
  
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img  src={img3 } alt='' text="Second slide" style={{width:"100%" , height:"450px"}} />
  
       <Carousel.Caption>
         <h3>Second slide label</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         {/* <button className='btn5 p-3 rounded'> Read More</button> */}
  
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img  src={img2 } alt='' text="Third slide" style={{width:"100%" , height:"450px"}} />
  
       <Carousel.Caption>
         <h3>Third slide label</h3>
         <p>
           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
         </p>
       {/* <button className='btn5 p-3 rounded'> Read More</button> */}
  
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>

<div className='d-flex justify-content-around my-5 text-left' style={{gap:"30px" , flexWrap:"wrap"}}>
<div className='card0    rounded-5 shadow-lg' >
  <Beenhere style={{fontSize:"45px"}} />
  <h5 className='my-2'>Services</h5>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit 
  . Iusto quasi assumenda repellendus ad pariatur, enim earum reiciendis, dolore laborum, magni
   </p>  
  </div>

  <div className='card0  rounded-5 shadow-lg' >
  <Cottage style={{fontSize:"45px"}}  />
  <h5 className='my-2'>Services</h5>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi assumenda repellendus ad pariatur, enim earum reiciendis, dolore laborum, magni
   </p>    
  </div>

  <div className='card0  rounded-5 shadow-lg'>
  <CameraRoll  style={{fontSize:"45px"}}  />
  <h5 className='my-2'>Services</h5>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi assumenda repellendus ad pariatur, enim earum reiciendis, dolore laborum, magni
   </p>    
  </div>

  <div className='card0  rounded-5 shadow-lg' >
  <Balance  style={{fontSize:"45px"}}  />
  <h5 className='my-2'>Services</h5>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi assumenda repellendus ad pariatur, enim earum reiciendis, dolore laborum, magni
</p>    
  </div>


</div>

{/* <h2 style={{textAlign:"center", marginBottom:"30px" , opacity:".5"}}> Our Vision</h2> */}

<div className='my-5 align-items-center rounded-5 shadow-lg row' style={{margin:'auto', textAlign:"left" , backgroundColor:"#bcbcb761" , width:"85%"}}>
      <div className='col-lg-5' >
          <img src={img2} alt="img" className=' rounded-5 p-3 'style={{width:"100%" ,height:"300px"}}  />
      </div>
        <div className='col-lg-5 py-3 ' style={{textAlign:"justify"}}>
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quae repellendus ea! Explicabo nemo a quisquam error molestiae, reiciendis tempora veniam molestias voluptatem, magni est numquam quibusdam deserunt sapiente cumque?</p>
            {/* <button className='btn5 px-3 py-2 mb-3 rounded-4 '>Read More</button> */}
 <div className=''>
               <p> <TaskAlt /> Lorem ipsum dolor sit amet.</p>
               <p> <TaskAlt /> Lorem ipsum dolor sit amet.</p>
           <div>
                   <span className='icon-instagram me-2   icon' />
                   <span className='icon-linkedin2 me-2   icon' />
                   <span className='icon-github me-2   icon' />
                   <span className='icon-youtube me-2   icon' />
                   <span className='icon-facebook1    icon ' />
           </div>
 </div>
        </div>

    </div>




    {/* <h2 style={{textAlign:"center", marginBottom:"30px" , opacity:".5"}}> Our Mission</h2> */}

<div className='my-5 align-items-center rounded-5 shadow-lg row' style={{margin:'auto', textAlign:"left" , backgroundColor:"#bcbcb761" , width:"85%"}}>
      
        <div className='col-lg-5 py-3' style={{flexGrow:"1"}}>
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quae <br /> repellendus ea! Explicabo nemo a quisquam error molestiae, reiciendis <br /> tempora veniam molestias voluptatem,  magni est numquam quibusdam <br /> deserunt sapiente cumque?</p>
            {/* <button className='btn5 px-3 py-2 mb-3 rounded-4 '>Read More</button> */}
 <div className=''>
               <p> <TaskAlt /> Lorem ipsum dolor sit amet.</p>
               <p> <TaskAlt /> Lorem ipsum dolor sit amet.</p>
           <div>
                   <span className='icon-instagram me-2   icon' />
                   <span className='icon-linkedin2 me-2   icon' />
                   <span className='icon-github me-2   icon' />
                   <span className='icon-youtube me-2   icon' />
                   <span className='icon-facebook1    icon ' />
           </div>
 </div>
        </div>
        <div className='col-lg-5 '>
          <img src={img2} alt="img" className=' rounded-5 p-3 'style={{width:"100%" , height:'300px'}} />
      </div>

    </div>
    

<div className='count px-5 py-3 m-auto' style={{flexWrap:"wrap" , alignItems:"center" , textAlign:"center"}}>
<div className='bg-dark p-3 count1 rounded-4' style={{boxShadow:"5px 5px 10px #ffa200"}}>
  <button className='btn5 py-3 rounded-4 px-5 my-3'>COMPANY FACTS

</button>
  <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Numquam, accusamus.</p>
</div>

<div className='d-flex p-5 'style={{gap:"30px" , fontSize:"30px" , flexWrap:"wrap" }}>
  <div className='bg-light  count1 text-dark rounded-5 px-5 py-3'style={{flexDirection:"column" , textAlign:'center'}}>
    <Beenhere  style={{fontSize:"50px" , display:"block"}}/>
    <CountUp className='' start={0} end={100} delay={2} duration={20} />
    
  </div>
  
  <div className='bg-light count1 text-dark rounded-5 px-5 py-3'style={{flexDirection:"column" , textAlign:'center'}}>
    <Engineering  style={{fontSize:"50px" , display:"block"}}/>
    <CountUp className='' start={0} end={200} delay={2} duration={20} />
    
  </div>
  <div className='bg-light  count1 text-dark rounded-5 px-5 py-3'style={{flexDirection:"column" , textAlign:'center'}}>
    <LaptopChromebook  style={{fontSize:"50px" , display:"block"}}/>
    <CountUp className='' start={0} end={120} delay={2} duration={20} />
    
  </div>
  <div className='bg-light  count1 text-dark rounded-5 px-5 py-3'style={{flexDirection:"column" , textAlign:'center'}}>
    <LocalPhone  style={{fontSize:"50px" , display:"block"}}/>
    <CountUp className='' start={0} end={150} delay={2} duration={20} />
    
  </div>



</div>




</div>





 </div>


);
}

  


export default About