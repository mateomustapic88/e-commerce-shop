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

  const { addToCart } = useContext(CartContext);

  // get the product based on passed id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  console.log(product);

  // if no product
  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    );
  }

  const { title, description, price, images } = product;

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center justify-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center'>
          {/** image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 '>
            <img className='max-w-[200px] lg:max-w-sm' src={images[0]}></img>
          </div>

          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>
              {title}
            </h1>
            <div className='text-xl text-red-500 font-medium mb-6'>
              $ {price}
            </div>
            <p className='mb-8'>{description}</p>
            <button
              className='bg-primary py-4 px-8 text-white'
              onClick={() => addToCart(product, product.id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
