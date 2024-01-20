import { useEffect, useState } from "react";
import TableLayout from "../../components/TableLayout/TableLayout";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const CategoryTableBoard = () => {
  const { pathname } = useLocation();
  // console.log(history, "History");
  const temp = pathname.trim().split("/");
  console.log(
    `${temp[temp.length - 1].split("-")[0].substring(0, 1).toUpperCase()}${temp[
      temp.length - 1
    ]
      .split("-")[0]
      .substring(1)}`,
    "History"
  );
  const [listOfCategories, setListOfCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const headersCategory = ["#id", "name"];

  useEffect(() => {
    getCategoriesFromAPI();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [listOfCategories]);

  async function getCategoriesFromAPI() {
    await fetch(
      "https://dash-board-sspy.onrender.com/api/all-category?type=product"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data get");
        setListOfCategories(data.data);
      })
      .catch((error) => console.log(error, "error"));
  }

  async function deleteCategoriesFromAPI(productID) {
    // console.log(listOfProducts[productIndex]._id, "id");
    console.log(productID, "id index");
    await fetch(
      `https://dash-board-sspy.onrender.com/api/category?id=${productID}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data delete");
        setListOfCategories(
          listOfCategories.filter((product) => product._id !== productID)
        );
      })
      .catch((error) => console.log(error, "error"));
  }

  return (
    <div className="min-vh-100">
      {isLoading || listOfCategories.length == 0 ? (
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
          listOfData={listOfCategories}
          headerCells={headersCategory}
          handleDeleteItem={deleteCategoriesFromAPI}
          // handleUpdateItem={updateProductsToAPI}
          setIsLoading={setIsLoading}
          title={`${temp[temp.length - 1]
            .split("-")[0]
            .substring(0, 1)
            .toUpperCase()}${temp[temp.length - 1]
            .split("-")[0]
            .substring(1)} Category`}
          // title={temp[temp.length-1].splite}
        />
      )}
    </div>
  );
};

export default CategoryTableBoard;
