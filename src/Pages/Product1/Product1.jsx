import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img7 from "../../components/images/cam3.jpg";
import { GlobalContext } from "../../Context/GlobalContext";
import { useTranslation } from "react-i18next";
import Loader from "../../components/Loader/Loader";

const Product1 = () => {
  const { product_id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const { dealWithAPIData, isLoading } = useContext(GlobalContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dealWithAPIData({ endpoint: `products/${product_id}` }).then((result) => {
      console.log(result, "product detail");
      setProductDetail(result?.data);
    });
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
          <p>
            {(productDetail.description && !productDetail.shortDescription) ||
              (!productDetail.description && productDetail.shortDescription)}
          </p>
          {/* <p>  
    <Link to={"#"} style={{textDecoration:"none" , color:"#000"}}  className='btn5 py-1 px-3 rounded-3'>Read More</Link> 
    </p> */}

          <div className="container-fluide  my-5 mx-auto shadow-lg   rounded-4 mt-2 col-lg-12">
            <form action={"#"} className="contact ">
              <div className="d-flex justify-content-around mt-5  ">
                <div className="me-3 form-control">
                  <div>
                    <label>Full Name</label>
                  </div>
                  <input
                    type="text"
                    className="inp mt-3"
                    style={{ outline: "none" }}
                    required
                  />
                </div>
                <div className="me-2  form-control">
                  <div>
                    <label>Email</label>
                  </div>
                  <input type="text" className="inp mt-3" required />
                </div>
              </div>

              <div className="d-flex me-3  justify-content-around my-5">
                <div className="me-2 form-control ">
                  <div>
                    <label>Phone Num</label>
                  </div>
                  <input type="email" className="inp mt-3" required />
                </div>
                <div className="  form-control">
                  <div>
                    <label>Subject</label>
                  </div>
                  <input type="tel" className="inp mt-3" required />
                </div>
              </div>
              <div className="m-3">
                <div className="mt-5 mb-3 text-light">
                  {/* <label>Message:</label> */}
                </div>
                <textarea
                  placeholder="Message"
                  className="form-control rounded-5  p-4  w-100"
                  style={{ backgroundColor: "#b4b4ad" }}
                  required
                ></textarea>
              </div>

              <div
                className=" my-5 px-3"
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button className="btn5 p-3 my-3 rounded-4 w-100">
                  Request Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product1;
