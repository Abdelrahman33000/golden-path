import React, { useContext, useEffect } from "react";
import "./Hero.css";
import Carousel from "react-bootstrap/Carousel";
import img from "../../components/images/Photographer.jpg";
import img2 from "../../components/images/photograph.jpg";
import img3 from "../../components/images/photograph5.jpg";
import { useState } from "react";
import { Diversity1 } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../Context/GlobalContext";

const Hero = () => {
  const [slidersList, setSlidersList] = useState([]);
  const { t, i18n } = useTranslation();
  const { dealWithAPIData } = useContext(GlobalContext);

  useEffect(() => {
    console.log("getting sliders");
    dealWithAPIData({ endpoint: "sliders" }).then((result) => {
      console.log(result, "result sliders xxx");
      setSlidersList([...result.data]);
    });
  }, []);

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
      <Carousel fade className="Carousel ">
        {slidersList.map((slider) => (
          <Carousel.Item>
            <div className="bg-dark">
              <img
                // src={slider.background}
                src={slider.img}
                alt=""
                text="First slide"
                style={{
                  width: "100%",
                  height: "550px",

                  opacity: "0.5",
                  // backgroundColor: "black",
                }}
              />
            </div>

            <Carousel.Caption
              style={{
                textAlign: "left",
                paddingBottom: "100px",
              }}
            >
              <h1 style={{ width: "60%" }}>{slider.title}</h1>
              <br />
              <p style={{ width: "50%" }}>{slider.text}</p>

              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Eligendi deleniti obcaecati veritatis officia aperiam  <br />
        dignissimos nihil maiores voluptate rerum! Totam accusantium <br />
         dolorem eveniet at minima, iusto quas mollitia labore ipsa? <br /><br />
   */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}

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
  );
};

export default Hero;
