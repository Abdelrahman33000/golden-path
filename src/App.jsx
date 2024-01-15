import { KeyboardArrowUp } from "@mui/icons-material";
import "./App.css";
import { Home, About, Projects, Products, Contact } from "./Pages";
import { Footer, Header, NavBar } from "./components";
import { Routes, Route } from "react-router-dom";
import Product1 from "./Pages/Product1/Product1";
import Project1 from "./Pages/projext1/Project1";
// import ProjectDetails from "./components/ProjectDetails";
function App() {
  return (
    <div className="App" id="up" style={{overflowX:"hidden"}}>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product1" element={<Product1 />} />
        <Route path="/project1" element={<Project1 />} />
        {/* <Route path="/products/:productsId" element={<ProjectDetails />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <a href="#up">
        <button className="scroll2Top p-1  "> <KeyboardArrowUp /> </button>
      </a>
    </div>
  );
}

export default App;
