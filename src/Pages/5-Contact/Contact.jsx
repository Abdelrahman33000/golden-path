import React from "react";
import "./ContactUs.css";

import Lottie from "lottie-react";

import contact from "../../animation/contact.json";

const ContactUs = () => {
  return (
    <div className="container-fluide  mt-0">



      <div className="  text-center p-4">
        <h2>
          <b className="" >Contact Us</b>{" "}
        </h2>
        <p>We’re always here for you to
give best service</p>
      </div>

      <div className="container-fluide side rounded-5   mt-5 ">
        <div className="row">
          {/* side */}

          <div className="side1  mx-3  mb-5 rounded-4 mt-2 shadow-lg  col-lg-3">
        <Lottie animationData={contact}   />

            <h4 className="p-4">Call Back Request</h4>
            <h6 className="mx-4 mb-4">Simply leave your contact number, We will call you back.

</h6>
<div className="mx-4" >
  
  <p className="  icon-message  ">  info@gmail.com</p> <br />
  <p className=" icon-mobile " > +123456789</p>
  <div className='d-flex justify-content-between my-3 px-2 py-3'>
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

          <div className="container-fluide  my-5 ms-2 shadow-lg   rounded-4 mt-2 col-lg-8">
            <form action={"#"} className="contact ">
              <div className="d-flex justify-content-around mt-5  ">
                <div className="me-3 form-control">
                  <div>
                    <label>Full Name</label>
                  </div>
                  <input type="text" className="inp mt-3" style={{outline:"none"}} required />
                </div>
                <div className="me-3  form-control">
                  <div>
                    <label>Email</label>
                  </div>
                  <input type="text" className="inp mt-3" required />
                </div>
              </div>

              <div className="d-flex me-3  justify-content-around my-5">
                <div className="me-3 form-control ">
                  <div>
                    <label>Phone Number</label>
                  </div>
                  <input type="email" className="inp mt-3" required />
                </div>
                <div className="  form-control">
                  <div>
                    <label>Subject</label>
                  </div>
                  <input type="tel" className="inp mt-3" required />
                </div>
              </div>
<div className="me-3">
              <div className="mt-5 mb-3 text-light">
                <label>Message:</label>
              </div>
              <textarea placeholder="Message" className="form-control rounded-5  p-4  w-100" style={{backgroundColor:"#b4b4ad" }} required></textarea>
              </div>

              <div
                className=" my-5 px-3"
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  
                }}
              >
                <button className="btn5 p-3 rounded-4 w-100">Submit</button>
              </div>
            </form>
          </div>


        </div>
      </div>


<iframe title="USA" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7075996.015790168!2d24.49644870755294!3d30.005968900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585721b6b5448d%3A0x808c7d87826a88a7!2sNewYorker!5e0!3m2!1sen!2seg!4v1703787357411!5m2!1sen!2seg"  height="450" style={{width:"100vw" , border:"2px solid #000"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};
export default ContactUs;
