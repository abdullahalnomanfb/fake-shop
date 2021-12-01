import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const ProductComponent = () => {
  const singlePeoduct = useSelector((state) => state.allProducts);

  const { image, title } = singlePeoduct;
  console.log("object", singlePeoduct.title);
  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    // const fetchDetailsProducts = async () => {
    //   try {
    //     const res = await axios.get(
    //       `https://fakestoreapi.com/products/${productId}`
    //     );
    //     dispatch(selectedProduct(res.data));
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    // fetchDetailsProducts();
    return () => {
      dispatch(selectedProduct(productId))
    };
  }, []);

  return (
    <div className="mt-5">
      {
        (singlePeoduct.title === undefined) && <h1>Loading....</h1>
      }
      <h1>This is product Component {productId}</h1>
      <p>{title}</p>
      <img className="img-fluid w-25" src={image} alt="" />
    </div>
  );
};

export default ProductComponent;
