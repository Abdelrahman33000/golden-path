import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext(0);

const GlobalContextProvider = (props) => {
  // const [slidersList, setSlidersList] = useState();
  // const [partnersList, setPartnersList] = useState();
  // const [productsList, setProductsList] = useState();
  // const [projectsList, setProjectsList] = useState();
  // const [categoryProductsList, setCategoryProductsList] = useState();
  // const [categoryProjectsList, setCategoryProjectsList] = useState();

  useEffect(() => {
    // getSlidersListApi();
    // getPartnersListApi();
    // getProductsListApi();
    // getProjectsListApi();
    // getCategoryProductsListApi();
    // getCategoryProjectsListApi();
  }, []);

  async function dealWithAPIData({ endpoint, version = "v1" }) {
    const baseUrl = "https://hyateka7la.com/api";
    console.log(
      version == 0
        ? [baseUrl, endpoint].join("/")
        : [baseUrl, version, endpoint].join("/"),
      "url"
    );
    return await fetch(
      version == 0
        ? [baseUrl, endpoint].join("/")
        : [baseUrl, version, endpoint].join("/"),
      {
        // method: method ? method : "GET",
        // headers: headers,
        // headers: {
        //   // "Content"
        // },
        // body: method ? JSON.stringify({ ...bodyObj }) : null,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "result getting data");
        return result;
      })
      .catch((error) => console.log(error, "error getting data"));
  }

  // function getSlidersListApi() {
  //   dealWithAPIData({ endpoint: "sliders" }).then((result) => {
  //     setSlidersList([...result?.data]);
  //   });
  // }

  // function getPartnersListApi() {
  //   dealWithAPIData({ endpoint: "partners" }).then((result) => {
  //     setPartnersList([...result?.data]);
  //   });
  // }

  // function getProductsListApi() {
  //   dealWithAPIData({ endpoint: "products" }).then((result) => {
  //     setProductsList([...result?.data]);
  //   });
  // }

  // function getProjectsListApi() {
  //   dealWithAPIData({ endpoint: "projects" }).then((result) => {
  //     setProjectsList([...result?.data]);
  //   });
  // }

  // function getCategoryProductsListApi() {
  //   dealWithAPIData({ endpoint: "categories/has-products" }).then((result) => {
  //     setCategoryProductsList([...result?.data]);
  //   });
  // }

  // function getCategoryProjectsListApi() {
  //   dealWithAPIData({ endpoint: "categories/has-projects" }).then((result) => {
  //     setCategoryProjectsList([...result?.data]);
  //   });
  // }

  return (
    <GlobalContext.Provider
      value={{
        dealWithAPIData,
        // slidersList,
        // partnersList,
        // productsList,
        // projectsList,
        // categoryProductsList,
        // categoryProjectsList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
