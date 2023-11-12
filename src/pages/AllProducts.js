import React, { useContext } from "react";

// import product context
import { ProductContext } from "../contexts/ProductContext";

// import product component
import Product from "../components/Product";

const AllProducts = () => {
  const { products } = useContext(ProductContext);
  console.log(products);

  return (
    <div>
      <section className='py-16'>
        <div className='container mx-auto'>
          <h1 className='font-semibold mb-1 uppercase'>All products</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
