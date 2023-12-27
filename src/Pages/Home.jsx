import React from "react";
import "./Home.css";
import {
  About,
  Footer,
  Hero,
  Logo,
  ProductCarousel,
  Products,
  SubScribe,
} from "../components";
const Home = () => {
  const lists = [
    { name: " Home", id: "/" },
    { name: " About", id: "#About" },
    { name: " Service", id: "#Service " },
    { name: " Product", id: "#Product " },
    { name: " Partners", id: "#Partners " },
    { name: " Contact", id: "#Contact" },
  ];
  return (
    <div>
      <nav className="bg-dark p-3  p-sm-0 py-sm-2 " >
        {lists.map((list) => (
          <a
            className=" list   p-4"
            href={list.id}
            key={list.id}
            style={{ textDecoration: "none" }}
          >
            {list.name}
          </a>
        ))}
      </nav>
      <Hero />
      <div id="About">
        <About />
      </div>

      <h1 className="ps-5 my-5" id="Service">
        Our Products
      </h1>
      <ProductCarousel />
      <h1 className="ps-5 my-5" id="Product">
        Our Projects
      </h1>
      <Products />
      <h1 id="Partners" className="ps-5 my-5">
        Our Partners
      </h1>
      <Logo />
      <div id="Contact">
        <SubScribe />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
