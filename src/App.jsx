import { KeyboardArrowUp } from "@mui/icons-material";
import "./App.css";
import { Home, About, Projects, Products, Contact } from "./Pages";
import { Footer, Header, NavBar } from "./components";
import { Routes, Route } from "react-router-dom";
import Product1 from "./Pages/Product1/Product1";
import Project1 from "./Pages/projext1/Project1";
import GlobalContextProvider from "./Context/GlobalContext";
import { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import { useTranslation } from "react-i18next";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [i18n.language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <GlobalContextProvider>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="App" id="up" style={{ overflowX: "hidden" }}>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productDetails/:product_id" element={<Product1 />} />
            <Route path="/ProjectDetails/:project_id" element={<Project1 />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
          <a href="#up">
            <button className="scroll2Top p-1  ">
              <KeyboardArrowUp />
            </button>
          </a>
        </div>
      )}
    </GlobalContextProvider>
  );
}

export default App;
