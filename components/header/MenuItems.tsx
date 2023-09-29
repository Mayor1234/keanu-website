'use client';
import { useState } from 'react';

import { CiMenuBurger } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';
import Menu from './Menu';

const MenuItems = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ul className="hidden h-16 lg:flex justify-center items-center gap-10">
        <Menu />
      </ul>
      <div className="h-full flex items-center justify-center flex-col  lg:hidden">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer z-50 text-[#f7f8f9] py-4 px-5 shadow-gray-800 shadow-sm rounded-md transition ease-in-out duration-200 active:bg-pry"
        >
          {isOpen ? <AiOutlineClose /> : <CiMenuBurger />}
        </div>
        {isOpen && (
          <div className="h-screen w-screen bg-neutral-950  absolute top-16 right-0 left-0 z-40 gap-8 uppercase text-sm text-gray-800 font-medium shadow-md">
            <ul
              className="flex flex-col h-[80%] gap-4 p-20 px-5 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItems;
