import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showHamburger, setShowHamburger] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setShowHamburger(!showHamburger);
  };

  return (
    <nav className="w-full 2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10 2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5  flex flex-col lg:flex-row items-start lg:items-center justify-between bg-[#0064B0] text-white pt-5">
      <div className="flex items-center">
        <img src={logo} alt="Hyscaler Logo" className="w-32 h-auto" />
      </div>
      <div className="lg:hidden ml-auto">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-blue-100 focus:outline-none mr-4"
        >
          {showHamburger ?<RxHamburgerMenu/> :<RxCross1 /> }
        </button>
      </div>
      <div
        className={`${
          menuVisible ? "lg:flex" : "hidden"
        } lg:flex flex-col lg:flex-row justify-start items-stretch w-full lg:w-auto lg:space-x-6`}
      >
        <ul className="flex flex-col lg:flex-row lg:justify-between lg:w-auto text-lg font-semibold lg:space-x-6 mt-2  xxs:leading-10 sm:leading-10 ">
          <li className="cursor-pointer hover:text-blue-300">Services</li>
          <li className="cursor-pointer hover:text-blue-300">Case Studies</li>
          <li className="cursor-pointer hover:text-blue-300">About us</li>
          <li className="cursor-pointer hover:text-blue-300">Blog</li>
          <li className="cursor-pointer hover:text-blue-300">Contact</li>
        </ul>
        <div className="bg-[#fff] text-[#1255A1] w-[170px] h-[50px] rounded-[6px] text-lg font-semibold hover:rounded-none cursor-pointer mt-4 lg:mt-0 flex justify-center items-center">
          Get Consulting
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







{/* 

import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showHamburger, setShowHamburger] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setShowHamburger(!showHamburger);
  };

  return (
    <nav className="w-full px-4 py-2 lg:px-16 lg:py-4 flex flex-col lg:flex-row items-center lg:items-stretch justify-between bg-[#0064B0] text-white">
      <div className="flex items-center ">
        <img src={logo} alt="Hyscaler Logo" className="w-[160px] h-auto" />
      </div>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-blue-100 focus:outline-none mr-4"
        >
          {showHamburger ? "☰" : "✕"}
        </button>
      </div>
      <div
        className={`${
          menuVisible ? "lg:flex" : "hidden"
        } lg:flex flex-col lg:flex-row justify-start lg:justify-end items-stretch lg:items-center w-full lg:w-auto lg:space-x-6`}
      >
        <ul className="flex flex-col lg:flex-row lg:justify-between lg:w-auto text-lg font-semibold lg:space-x-6">
          <li className="cursor-pointer hover:text-blue-300">Services</li>
          <li className="cursor-pointer hover:text-blue-300">Case Studies</li>
          <li className="cursor-pointer hover:text-blue-300">About us</li>
          <li className="cursor-pointer hover:text-blue-300">Blog</li>
          <li className="cursor-pointer hover:text-blue-300">Contact</li>
        </ul>
        <div className="bg-[#fff] text-[#1255A1] w-[170px] h-[50px] rounded-[6px] text-lg font-semibold hover:rounded-none cursor-pointer mt-4 lg:mt-0 flex justify-center items-center">
          Get Consulting
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 */}