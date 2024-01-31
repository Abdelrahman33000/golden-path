import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import TableLayout from "../../Components/TableLayout/TableLayout";

const PartnerTableBoard = () => {
  const [listOfPartners, setListOfPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const headersPartner = ["#_id", "name_short", "image"];

  useEffect(() => {
    getPartnersFromAPI();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [listOfPartners]);

  async function getPartnersFromAPI() {
    await fetch("https://dash-board-sspy.onrender.com/api/all-partners")
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
        setListOfPartners(result.data);
      })

      .catch((error) => console.log(error, "error"));
  }

  async function deletePartnerFromAPI(partnerID) {
    // console.log(listOfProducts[productIndex]._id, "id");
    console.log(partnerID, "id index");
    await fetch(
      `https://dash-board-sspy.onrender.com/api/partner?id=${partnerID}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data delete");
        setListOfPartners(
          listOfPartners.filter((partner) => partner._id !== partnerID)
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
          listOfData={listOfPartners}
          headerCells={headersPartner}
          handleDeleteItem={deletePartnerFromAPI}
          // handleUpdateItem={updateProductsToAPI}
          setIsLoading={setIsLoading}
          title={"Partner"}
          detailHeaders={
            [
              // "title_en",
              // "title_ar",
              // // "category_en",
              // // "category_ar",
              // "description_en",
              // "description_ar",
              // // "in_home",
              // "image",
            ]
          }
        />
      )}
    </div>
  );
};

export default PartnerTableBoard;
