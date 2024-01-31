import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import TableLayout from "../TableLayout/TableLayout";

const CategoryTableBoard = ({ itemType }) => {
  const [listOfCategories, setListOfCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const headersCategory = ["#_id", "name_en", "name_ar"];

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
      `https://dash-board-sspy.onrender.com/api/all-category?type=${itemType.toLowerCase()}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data get");
        setListOfCategories(data.data);
      })
      .catch((error) => console.log(error, "error"));
  }

  async function deleteCategoriesFromAPI(itemID) {
    // console.log(listOfitems[itemIndex]._id, "id");
    console.log(itemID, "id index");
    await fetch(
      `https://dash-board-sspy.onrender.com/api/category?id=${itemID}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data delete");
        setListOfCategories(
          listOfCategories.filter((item) => item._id !== itemID)
        );
      })
      .catch((error) => console.log(error, "error"));
  }

  return (
    <div className="min-vh-100">
      {isLoading ? (
        <Loader />
      ) : (
        <TableLayout
          listOfData={listOfCategories}
          headerCells={headersCategory}
          handleDeleteItem={deleteCategoriesFromAPI}
          setIsLoading={setIsLoading}
          title={`${itemType} Category`}
          detailHeaders={
            [
              // "name_en",
              // "name_ar",
              // "name_ar",
              // "category",
              // "date",
              // "client_en",
              // "client_ar",
              // "location_en",
              // "location_ar",
              // "description_en",
              // "description_ar",
              // "in_home",
              // "image",
            ]
          }
        />
      )}
    </div>
  );
};

export default CategoryTableBoard;
