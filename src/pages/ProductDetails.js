import React, { useContext } from "react";
// use params
import { useParams } from "react-router-dom";
// import contexts
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // get the product id from url
  const { id } = useParams();

  console.log(id);

  const { products } = useContext(ProductContext);
  console.log(products);

  return <div>Product Details Page</div>;
};

export default ProductDetails;
