import React, { useState } from 'react';
import left from "../img/left.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white fixed top-0 py-4 px-[4vw] flex justify-between items-center backdrop-blur-md w-full z-50
    laptop:bg-transparent ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo text-2xl font-medium tablet:text-3xl">
        <a href="#">
        Krypton </a></div>

        {/* Navigation Links */}
        <div
          className={`transition-transform transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } fixed top-0 right-0 h-screen w-[60%] bg-[#141414]/70 backdrop-blur-md flex flex-col items-start gap-8 p-6 laptop:p-0 laptop:bg-transparent  laptop:static laptop:flex-row laptop:translate-x-0  laptop:h-auto laptop:items-center laptop:justify-between `}
        >
          <ul className="flex flex-col gap-6 laptop:flex-row laptop:gap-8">
            <li>
              <a href="#learn" className="hover:text-gray-300 text-xl laptop:text-2xl">
                Learn
              </a>
            </li>
            <li>
              <a href="https://wa.me/qr/HNITN35X4YHEG1" className="hover:text-gray-300 text-xl laptop:text-2xl">
                Build
              </a>
            </li>
            <li>
              <a href="#explore" className="hover:text-gray-300 text-xl laptop:text-2xl">
                Explore
              </a>
            </li>
          </ul>



          <div className="mt-6 laptop:mt-0">
          <div className="flex flex-row gap-[10px] justify-center items-center cursor-pointer  text-white text-2xl">
           <a href="https://chat.whatsapp.com/HnnuYN7tfwXE6fR6TF8f3A" >Explore Tokens</a>{" "}
            <img className="" src={left} alt="" />
          </div>
        </div>
        </div>

        {/* Hamburger Button */}
        <button
          className="laptop:hidden z-50"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
