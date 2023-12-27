import React from 'react'
import img from '../images/cam2.jpg'
import './Subscribe.css'
const SubScribe = () => {
  return (
    <div className='my-5 align-items-center rounded-5 shadow-lg row' style={{margin:'auto', textAlign:"center" , backgroundColor:"#bcbcb761" , width:"85%"}}>
      <div className='col-lg-5'>
          <img src={img} alt="img" className=' rounded-5 p-3 me-5'style={{width:"100%"}} />
      </div>
        <div className='col-lg-5 py-3'>
            <h1>SubScribe Our NewsLetter</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, ut.</p>
            <input type="email" placeholder='Email' className='rounded-5 p-2 w-50 my-2'  style={{outline:"none" , border:"none" }} />
            <button className='btn btn-outline-info mx-3'>SubScribe</button>
 <div className='d-flex justify-content-around my-3'>
               <p>Stay Connected</p>
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
  )
}

export default SubScribe