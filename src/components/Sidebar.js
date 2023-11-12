import React, { useContext } from "react";
import { Link } from "react-router-dom";
// icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

// CartItem component
import CartItem from "./CartItem";

// SidebarContext
import { SidebarContext } from "../contexts/SidebarContext";
// import Cart Context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  console.log(useContext(CartContext));

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl-max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className='flex justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping bag (0)</div>
        <div
          onClick={handleClose}
          className='cursor-pointer w-8 h-8 flex justify-center items-center'
        >
          <IoMdArrowForward className='text-2xl'></IoMdArrowForward>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[480px] lg:h-[520px] overflow-y-auto border-b'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div>
        <div className='bg-gray-200 flex w-full justify-between items-center'>
          {/** total */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total: </span> $ {totalPrice}
          </div>
          {/** clear cart icon */}
          <div
            onClick={() => clearCart()}
            className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
