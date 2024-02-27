import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
export const GlobalContext = createContext(0);

const GlobalContextProvider = (props) => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  const [slidersList, setSlidersList] = useState([]);
  const [partnersList, setPartnersList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [projectsList, setProjectsList] = useState([]);
  const [categoryProductsList, setCategoryProductsList] = useState([]);
  const [categoryProjectsList, setCategoryProjectsList] = useState([]);

  async function dealWithAPIData({ endpoint }) {
    const baseUrl = "https://hyateka7la.com/api/v1";
    return await fetch([baseUrl, endpoint].join("/"), {
      headers: {
        lang: i18n.language,
      },
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log(error, "error getting data"));
  }

  useEffect(() => {
    setIsLoading(true);

    getSlidersListApi();
    getPartnersListApi();
    getProductsListApi();
    getProjectsListApi();
    getCategoryProductsListApi();
    getCategoryProjectsListApi();

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [i18n.language]);

  function getSlidersListApi() {
    dealWithAPIData({ endpoint: "sliders" }).then((result) =>
      setSlidersList([...result?.data])
    );
  }

  function getPartnersListApi() {
    dealWithAPIData({ endpoint: "partners" }).then((result) =>
      setPartnersList([...result?.data])
    );
  }

  function getProductsListApi() {
    dealWithAPIData({ endpoint: "products" }).then((result) =>
      setProductsList([...result?.data])
    );
  }

  function getProjectsListApi() {
    dealWithAPIData({ endpoint: "projects" }).then((result) =>
      setProjectsList([...result?.data])
    );
  }

  function getCategoryProductsListApi() {
    dealWithAPIData({ endpoint: "categories-for-products" }).then((result) =>
      setCategoryProductsList([...result?.data])
    );
  }

  function getCategoryProjectsListApi() {
    dealWithAPIData({ endpoint: "categories-for-projects" }).then((result) =>
      setCategoryProjectsList([...result?.data])
    );
  }

  const emailGlobal = "info@golden-paths.net";
  const phoneGlobal = "+966556201096";

  return (
    <GlobalContext.Provider
      value={{
        dealWithAPIData,
        isLoading,
        slidersList,
        partnersList,
        productsList,
        projectsList,
        categoryProductsList,
        categoryProjectsList,
        emailGlobal,
        phoneGlobal,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
