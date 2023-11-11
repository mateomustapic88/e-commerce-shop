import React, { useContext } from 'react';

// import product context
import { ProductContext } from '../contexts/ProductContext';

// import product component
import Product from '../components/Product';

const Home = () => {
  const { products } = useContext(ProductContext);
  console.log(products);

  // filter products with rating over 4.5
  const bestRatedProducts = products.filter((product) => {
    return product.rating >= 4.5;
  });
  console.log(bestRatedProducts);

  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {bestRatedProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
