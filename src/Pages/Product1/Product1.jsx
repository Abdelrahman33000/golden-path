import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import { useTranslation } from "react-i18next";
import Loader from "../../components/Loader/Loader";
import EmailFormComponent from "../../components/EmailFormComponent/EmailFormComponent";

const Product1 = () => {
  const { product_id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const { dealWithAPIData, isLoading } = useContext(GlobalContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dealWithAPIData({ endpoint: `products/${product_id}` }).then((result) =>
      setProductDetail(result?.data)
    );
  }, [i18n.language]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <h1
        className="project bg-dark text-light text-center p-5"
        style={{ fontFamily: "Bodoni Moda" }}
      >
        {t("ProductDetails")}
      </h1>

      <div className="my-5 d-flex justify-content-center text-center">
        <div className=" rounded-5 mx-5  " style={{ width: "70%" }}>
          <img
            src={productDetail.img}
            width={"100%"}
            alt=""
            className="rounded-5 p-2 "
            onError={(e) => {
              e.target.src =
                "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
              e.target.onError = null;
            }}
          />

          <h5>{productDetail.name}</h5>
          {/* <p>
            {(productDetail.description && !productDetail.shortDescription) ||
              (!productDetail.description && productDetail.shortDescription)}
          </p> */}
          <p>{productDetail.shortDescription}</p>

          <div className="container-fluide  my-5 mx-2 shadow-lg p-2   rounded-4 mt-2 ">
            <EmailFormComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product1;
