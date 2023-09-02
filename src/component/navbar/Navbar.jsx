import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex justify-between items-center p-8 md:p-8 sm:p-8 ">
      <div className=" flex flex-1 justify-start items-center">
        <div className=" mr-8 ">
          <img src={logo} />
        </div>
        <div className="hidden lg:flex md:hidden sm:hidden ">
          <p className='text-white font-custom font-medium text-base leading-6 capitalize mx-4 cursor-pointer'><a href="#home">Home</a></p>
          <p className='text-white font-custom font-medium text-base leading-6 capitalize mx-4 cursor-pointer'><a href="#wgpt3">What is GPT3?</a></p>
          <p className='text-white font-custom font-medium text-base leading-6 capitalize mx-4 cursor-pointer'><a href="#possibility">Open AI</a></p>
          <p className='text-white font-custom font-medium text-base leading-6 capitalize mx-4 cursor-pointer'><a href="#features">Case Studies</a></p>
          <p className='text-white font-custom font-medium text-base leading-6 capitalize mx-4 cursor-pointer'><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className=" flex justify-end items-center lg:flex md:hidden sm:hidden">
        <p className='text-white font-custom font-medium text-base leading-6 capitalize mx-4 cursor-pointer'>Sign in</p>
        <button className='px-4 py-2 text-white bg-red-500 font-custom font-medium text-base leading-6 border-none outline-none cursor-pointer rounded-md' type="button">Sign up</button>
      </div>
      <div className=" flex ml-4 relative sm:flex lg:hidden md:flex">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="  flex text-start   bg-cyan-950 py-8 px-8 absolute right-0 top-10 mt-4 min-w-56 rounded-md shadow-md">
          <div className="">
            <p className='text-white font-custom font-medium text-base leading-6  mx-4 cursor-pointer my-4 md:text-base whitespace-nowrap'><a href="#home">Home</a></p>
            <p className='text-white font-custom font-medium text-base leading-6  mx-4 cursor-pointer my-4 md:text-base whitespace-nowrap'><a href="#wgpt3">What is GPT3?</a></p>
            <p className='text-white font-custom font-medium text-base leading-6  mx-4 cursor-pointer my-4 md:text-base whitespace-nowrap'><a href="#possibility">Open AI</a></p>
            <p className='text-white font-custom font-medium text-base leading-6  mx-4 cursor-pointer my-4 md:text-base whitespace-nowrap'><a href="#features">Case Studies</a></p>
            <p className='text-white font-custom font-medium text-base leading-6  mx-4 cursor-pointer my-4 md:text-base whitespace-nowrap'><a href="#blog">Library</a></p>
          </div>
          <div className=" hidden md:flex sm:flex">
            <p>Sign in</p>
            <button className='px-4 py-2 text-white bg-red-500 font-custom font-medium text-base leading-6 border-none outline-none cursor-pointer rounded-md' type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
