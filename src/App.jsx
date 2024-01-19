import { KeyboardArrowUp } from "@mui/icons-material";
import "./App.css";
import { Home, About, Projects, Products, Contact } from "./Pages";
import { Footer, Header, NavBar } from "./components";
import { Routes, Route } from "react-router-dom";
import Product1 from "./Pages/Product1/Product1";
import Project1 from "./Pages/projext1/Project1";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import DashboardHome from "./Pages/DashboardHome/DashboardHome";
import DashboardProduct from "./Pages/DashboardProduct/DashboardProduct";
import LayoutForm from "./components/LayoutForm/LayoutForm";
import AddProduct from "./Pages/AddProduct/AddProduct";
// import ProjectDetails from "./components/ProjectDetails";
function App() {
  return (
    <div className="App" id="up" style={{ overflowX: "hidden" }}>
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
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}

        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="home" index element={<DashboardHome />} />
          <Route path="products" element={<DashboardProduct />} />
          <Route path="add-product" element={<AddProduct />} />
          {/* <Route path="account" element={<Account />} /> */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>

        {/* <Route path="/admin" element={<AdminDashboard />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="product" element={<DashboardProduct />} />
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
  );
}

export default App;
