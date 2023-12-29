import { KeyboardArrowUp } from "@mui/icons-material";
import "./App.css";
import { Home, About, Projects, Products, Contact } from "./Pages";
import { Footer, Header, NavBar } from "./components";
import { Routes, Route } from "react-router-dom";
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
