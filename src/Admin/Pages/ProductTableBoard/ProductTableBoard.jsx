import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import TableLayout from "../../Components/TableLayout/TableLayout";

const ProductTableBoard = () => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const headersProduct = ["#id", "name_en", "name_ar", "in_home"];

  useEffect(() => {
    getProductsFromAPI();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [listOfProducts]);

  async function getProductsFromAPI() {
    await fetch("https://dash-board-sspy.onrender.com/api/all-products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data get");
        const updatedData = data.data.map((product) => {
          const category = product.category;
          delete product.category;
          return {
            ...product,
            category_en: category.name_en,
            category_ar: category.name_ar,
          };
        });
        setListOfProducts(updatedData);
      })
      .catch((error) => console.log(error, "error"));
  }

  async function deleteProductsFromAPI(productID) {
    // console.log(listOfProducts[productIndex]._id, "id");
    console.log(productID, "id index");
    await fetch(
      `https://dash-board-sspy.onrender.com/api/product?id=${productID}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data delete");
        setListOfProducts(
          listOfProducts.filter((product) => product._id !== productID)
        );
      })
      .catch((error) => console.log(error, "error"));
  }

  // async function updateProductsToAPI(productData) {
  //   // console.log(listOfProducts[productIndex]._id, "id");
  //   console.log(productID, "id index");
  //   await fetch(
  //     `https://dash-board-sspy.onrender.com/api/product?id=${productID}`,
  //     {
  //       method: "PATCH",
  //       body: { ...productData },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data, "data delete");
  //     })
  //     .catch((error) => console.log(error, "error"));
  // }

  // async function createNewProductAPI(productData) {
  //   // console.log(listOfProducts[productIndex]._id, "id");

  //   await fetch(`https://dash-board-sspy.onrender.com/api/product`, {
  //     mode: "no-cors",
  //     method: "POST",
  //     body: { ...productData },
  //     headers: {
  //       "Access-Control-Allow-Origin": "http://localhost:3000",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data, "data delete");
  //     })
  //     .catch((error) => console.log(error, "error"));
  // }

  return (
    <div className="min-vh-100">
      {isLoading ? (
        <Loader />
      ) : (
        // <LayoutTableDashboard
        //   listOfData={listOfProducts}
        //   headerCells={headersProduct}
        //   handleDeleteItem={deleteProductsFromAPI}
        //   // handleUpdateItem={updateProductsToAPI}
        //   setIsLoading={setIsLoading}
        //   title={"Products"}
        // />
        <TableLayout
          listOfData={listOfProducts}
          headerCells={headersProduct}
          handleDeleteItem={deleteProductsFromAPI}
          // handleUpdateItem={updateProductsToAPI}
          setIsLoading={setIsLoading}
          title={"Product"}
          detailHeaders={[
            "name_en",
            "name_ar",
            "category_en",
            "category_ar",
            "description_en",
            "description_ar",
            "in_home",
            "image",
          ]}
        />
      )}
    </div>
  );
};

export default ProductTableBoard;
