import React, { useContext, useState } from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// cart context
import { CartContext } from "../contexts/CartContext";
// icons
import { BsBag } from "react-icons/bs";

const Header = () => {
  // header state
  // const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const { itemAmount } = useContext(CartContext);

  return (
    <header className='bg-gray-400'>
      <div className='container py-4 shadow-md mx-auto flex items-center justify-between h-full'>
        <div>Logo mock</div>
        {/** cart */}
        <div
          className='cursor-pointer flex relative max-w-[50px]'
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className='text-2xl'></BsBag>
          <div className='absolute right-2 bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
