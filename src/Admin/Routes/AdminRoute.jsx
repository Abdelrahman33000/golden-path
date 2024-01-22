import { Routes, Route } from "react-router-dom";
import HomeDashboard from "../Pages/HomeDashboard/HomeDashboard";
import ProductTableBoard from "../Pages/ProductTableBoard/ProductTableBoard";
import ProjectTableBoard from "../Pages/ProjectTableBoard/ProjectTableBoard";
import AddProduct from "../Pages/AddProduct/AddProduct";
import CategoryTableBoard from "../Pages/CategoryTableBoard/CategoryTableBoard";
import AddCategory from "../Pages/AddCategory/AddCategory";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";

const AdminRoute = () => {
  return (
    <Routes>
      <Route element={<AdminDashboard />}>
        <Route index element={<HomeDashboard />} />
        <Route path="product" element={<ProductTableBoard />} />
        <Route path="project" element={<ProjectTableBoard />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="add-project" element={<AddProduct />} />
        <Route path="product-category" element={<CategoryTableBoard />} />
        <Route path="project-category" element={<CategoryTableBoard />} />
        <Route
          path="add-product-category"
          element={<AddCategory categoryType={"product"} />}
        />
        <Route
          path="add-project-category"
          element={<AddCategory categoryType={"project"} />}
        />

        {/* <Route path="/products/:productsId" element={<ProjectDetails />} /> */}
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
      </Route>
    </Routes>
  );
};

export default AdminRoute;
