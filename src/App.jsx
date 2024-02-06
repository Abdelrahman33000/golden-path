import { KeyboardArrowUp } from "@mui/icons-material";
import "./App.css";
import { Home, About, Projects, Products, Contact, Login } from "./Pages";
import { Footer, Header, NavBar } from "./components";
import { Routes, Route } from "react-router-dom";
import Product1 from "./Pages/Product1/Product1";
import Project1 from "./Pages/projext1/Project1";
import GlobalContextProvider from "./Context/GlobalContext";
// import HomeDashboard from "./Admin/Pages/HomeDashboard/HomeDashboard";
// import AdminDashboard from "./Admin/Pages/Dashboard/AdminDashboard";
// import ProductTableBoard from "./Admin/Pages/ProductTableBoard/ProductTableBoard";
// import AddProduct from "./Admin/Pages/AddProduct/AddProduct";
// import ProjectTableBoard from "./Admin/Pages/ProjectTableBoard/ProjectTableBoard";
// import AddProject from "./Admin/Pages/AddProject/AddProject";
// import ProductCategory from "./Admin/Pages/ProductCategory/ProductCategory";
// import ProjectCategory from "./Admin/Pages/ProjectCategory/ProjectCategory";
// import AddCategory from "./Admin/Pages/AddCategory/AddCategory";
// import SliderTableBoard from "./Admin/Pages/SliderTableBoard/SliderTableBoard";
// import AddSlider from "./Admin/Pages/AddSlider/AddSlider";
// import PartnerTableBoard from "./Admin/Pages/PartnerTableBoard/PartnerTableBoard";
// import AddPartner from "./Admin/Pages/AddPartner/AddPartner";
// import ChangePassword from "./Admin/Pages/ChangePassword/ChangePassword";
// import ProjectDetails from "./components/ProjectDetails";
function App() {
  return (
    <GlobalContextProvider>
      <div className="App" id="up" style={{ overflowX: "hidden" }}>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productDetails/:product_id" element={<Product1 />} />
          <Route path="/ProjectDetails/:project_id" element={<Project1 />} />
          {/* <Route path="/project1" element={<Project1 />} /> */}
          {/* <Route path="/products/:productsId" element={<ProjectDetails />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/admin" element={<AdminDashboard />} /> */}

          {/* <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<HomeDashboard />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="product" element={<ProductTableBoard />} />
            <Route path="project" element={<ProjectTableBoard />} />
            <Route path="slider" element={<SliderTableBoard />} />
            <Route path="partner" element={<PartnerTableBoard />} />
    
            <Route path="add-product/:id" element={<AddProduct />} />
            <Route path="add-project/:id" element={<AddProject />} />
            <Route path="add-slider/:id" element={<AddSlider />} />
            <Route path="add-partner/:id" element={<AddPartner />} />
    
            <Route path="product-category" element={<ProductCategory />} />
            <Route path="project-category" element={<ProjectCategory />} />
    
            <Route
              path="add-product-category/:id"
              element={<AddCategory categoryType={"product"} />}
            />
            <Route
              path="add-project-category/:id"
              element={<AddCategory categoryType={"project"} />}
            />
    
            <Route
              path="*"
              element={
                <div className="min-vh-100 bg-primary-subtle d-flex align-items-center justify-content-center">
                  <h2 className="fw-bolder">Comming Soon ..</h2>
                </div>
              }
            />
          </Route> */}
        </Routes>

        <Footer />
        <a href="#up">
          <button className="scroll2Top p-1  ">
            {" "}
            <KeyboardArrowUp />{" "}
          </button>
        </a>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
