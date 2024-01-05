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
    

      <h3  className="ps-5 m-5 img2">
        Our Products
      </h3>
      <ProductCarousel />
      <h3  className="ps-5 m-5 img2">
        Our Projects
      </h3>
      <Products />
      <h3 className="ps-5 m-5 img2">
        Our Partners
      </h3>
      <Logo />
        <SubScribe />
    
    </div>
  );
};

export default Home;
