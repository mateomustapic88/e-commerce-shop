import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';

const Product = ({ product }) => {
  console.log(product);

  const { id, title, category, price, images } = product;

  const previewImage = images[0];

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={previewImage}
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <button>Add to cart</button>
          <button>Second button</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
