import React from "react";
import "./Home.css";
import {
  About,
  Hero,
  Logo,
  ProductCarousel,
  Products,
  SubScribe,
} from "../../components";
const Home = () => {
  // const lists = [
  //   { name: " Home", id: "/" },
  //   { name: " About", id: "#About" },
  //   { name: " Service", id: "#Service " },
  //   { name: " Product", id: "#Product " },
  //   { name: " Partners", id: "#Partners " },
  //   { name: " Contact", id: "#Contact" },
  // ];
  return (
    <div className="home">
    
      <Hero />
        <About />
    

      <h1 style={{color:"#093266"}} className="ps-5 my-5">
        Our Products
      </h1>
      <ProductCarousel />
      <h1 style={{color:"#093266"}} className="ps-5 my-5">
        Our Projects
      </h1>
      <Products />
      <h1 style={{color:"#093266"}} className="ps-5 my-5">
        Our Partners
      </h1>
      <Logo />
        <SubScribe />
    
    </div>
  );
};

export default Home;
