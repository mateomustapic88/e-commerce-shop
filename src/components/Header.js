import React, { useContext, useState } from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// cart context
import { CartContext } from "../contexts/CartContext";
// icons
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  // header state
  // const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <header className='bg-gray-400'>
      <div className='container py-4 mx-auto flex items-center justify-between h-full'>
        <Link to='/'>
          <div>Home</div>
        </Link>
        <Link to='/allProducts'>
          <div>All Products</div>
        </Link>
        {/** cart */}
        <div
          className='cursor-pointer flex relative max-w-[50px]'
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className='text-2xl'></BsBag>
          <div className='absolute right-1 bottom-0  text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
