import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductDetails from "./ProductDetails";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        dispatch(setProducts(res.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  console.log("haire",products);
  return (
    <div style={{backgroundColor:'#4c4c6d'}}>
      <div className="container">
        <div className="row">
          {
           ( products?.length === 0 || products ==undefined) &&<div style={{height:'100vh'}} className="text-center"><img style={{backgroundColor:'transparent',width:'300px',margin:'auto',paddingTop:'100px'}} src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="" /></div>
          }
          {
            products?.map( product => <ProductDetails product={product} />)
          } 
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
