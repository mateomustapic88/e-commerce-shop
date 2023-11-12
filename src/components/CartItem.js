import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

import { CartContext } from "./../contexts/CartContext";

const CartItem = ({ item }) => {
  const { id, title, images, price, amount } = item;

  console.log(item);
  const img = images[0];

  const { removeFromCart } = useContext(CartContext);

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-black-200 w-full'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={img}></img>
        </Link>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            {/** title */}
            <Link
              className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'
              to={`/product/${id}`}
            >
              {title}
            </Link>

            {/** remove icon */}
            <div
              className='text-xl cursor-pointer'
              onClick={() => removeFromCart(id)}
            >
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>
          <div className='bg-gray-200 flex gap-x-2 h-[36px] text-sm'>
            <div className='flex flex-1 max-w-[100px] items-center h-full font-medium'>
              {/** quantity */}
              <div className='flex-1  h-full flex justify-center items-center cursor-pointer'>
                {/** minus */}
                <IoMdRemove />
              </div>
              <div className='flex h-full justify-center items-center px-2'>
                {amount}
              </div>
              <div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                {/** plus */}
                <IoMdAdd />
              </div>
            </div>
            {/** price */}
            <div className='flex-1 flex items-center justify-around'>
              $ {price}
            </div>
            {/** final price */}
            <div className='flex flex-1 justify-end items-center font-medium'>{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
