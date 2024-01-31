import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import TableLayout from "../../Components/TableLayout/TableLayout";

const SliderTableBoard = () => {
  const [listOfSliders, setListOfSliders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const headersSlider = ["#_id", "title_en", "title_ar", "image"];

  useEffect(() => {
    getSlidersFromAPI();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [listOfSliders]);

  async function getSlidersFromAPI() {
    await fetch("https://dash-board-sspy.onrender.com/api/all-sliders")
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "data get");
        // const updatedData = data.data.map((product) => {
        //   const category = product.category;
        //   delete product.category;
        //   return {
        //     ...product,
        //     category_en: category.name_en,
        //     category_ar: category.name_ar,
        //   };
        // });
        setListOfSliders(result.data);
      })

     
      .catch((error) => console.log(error, "error"));
  }

  async function deleteSliderFromAPI(sliderID) {
    // console.log(listOfProducts[productIndex]._id, "id");
    console.log(sliderID, "id index");
    await fetch(
      `https://dash-board-sspy.onrender.com/api/slider?id=${sliderID}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data delete");
        setListOfSliders(
          listOfSliders.filter((slider) => slider._id !== sliderID)
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
          listOfData={listOfSliders}
          headerCells={headersSlider}
          handleDeleteItem={deleteSliderFromAPI}
          // handleUpdateItem={updateProductsToAPI}
          setIsLoading={setIsLoading}
          title={"Slider"}
          detailHeaders={[
            "title_en",
            "title_ar",
            // "category_en",
            // "category_ar",
            "description_en",
            "description_ar",
            // "in_home",
            "image",
          ]}
        />
      )}
    </div>
  );
};

export default SliderTableBoard;
