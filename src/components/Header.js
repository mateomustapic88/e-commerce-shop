import React, { useContext } from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// icons
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <header className='bg-gray-400'>
      <div>Header</div>
      <div
        className='cursor-pointer flex relative'
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsBag className='text-2xl'></BsBag>
      </div>
    </header>
  );
};

export default Header;
