import React, { useState } from 'react';
import left from "../img/left.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    
  <nav className=" text-white fixed top-0 py-[2em] px-[4vw] flex justify-between items-center bg-[#141414]
  tablet:py-[1.5em] w-full z-50">
   <div className="container mx-auto flex justify-between items-center ">
     <div className="logo absolute top-[.5em] left-[2vw] font-medium not-italic text-2xl 
     tablet:text-3xl ">Krypton</div>
     <div className="navigations  rounded 	   flex flex-col  w-[55%] gap-[2em] absolute  right-0 top-[.5em]
     laptop:w-[60%] laptop:bg-transparent laptop:justify-between
     transition ease-in-out delay-1000 ">
     <ul className={isOpen ? 
       'nav-links flex flex-col flex-start mt-[2.5em] h-[40vh] px-[1em] gap-[1em]  laptop:flex-row bg-[#141414]   ' : 'nav-links hidden laptop:flex laptop:justify-around laptop:w-[40%]  laptop:mt-[1%]'}>
       <li className="nav-link"><a href="#" className=" hover:text-gray-300 tablet:text-2xl ">Learn</a></li>
       <li className="nav-link"><a href="#" className=" hover:text-gray-300 tablet:text-2xl ">Build</a></li>
       <li className="nav-link"><a href="#" className=" hover:text-gray-300 tablet:text-2xl ">Explore</a></li>
     </ul>

     <button className={isOpen ? 'nav-link flex -mt-[55%] mb-[3em] px-[1em] ' : 'hidden laptop:flex laptop:absolute laptop:top-[2%] laptop:right-[2vw] '}>
<a href="#" className=" hover:text-gray-300 text-laptop tablet:text-2xl    ">Get Krypton </a><img className='ml-[.5em] pt-2
        tablet:w-[.7em] laptop:w-[.4em] laptop:pt-3 ' src={left} alt="" />
       
</button>


    </div>
     <button className="toggle-button absolute top-[1.2em] right-[3.5vw] z-10 laptop:hidden" onClick={toggleMenu}>
       {isOpen ? (
         <svg viewBox="0 0 24 24" className="w-6 h-6 tablet:w-8 tablet:h-8 stroke-white">
           <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
         </svg>
       ) : (
         <svg viewBox="0 0 24 24" className="w-6 h-6 tablet:w-8 tablet:h-8 stroke-white">
           <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
         </svg>
       )}
     </button>
   </div>
 </nav>

  );
}

export default Nav;