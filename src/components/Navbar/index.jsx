"use client"

import Link from "next/link";
import InputComponent from "./InputComponent";
import UserButton from "./UserButton";
import { useState } from "react";

const Navbar = () => {

  const [isMenuOpen,setIsMenuOpen] = useState(false)
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header>
      <div className="w-full h-14 flex justify-between items-center p-2 bg-color-secondary">
        <Link href="/" className="font-bold md:text-xl sm:text-md text-sm text-color-primary">
          ZuttoNime
        </Link>
        <button onClick={handleMenu} className="block sm:hidden text-color-primary focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
          {isMenuOpen ?
            <path className="menu-open" d="M6 18L18 6M6 6l12 12"></path>
            :
            <path className="menu-closed" d="M4 6h16M4 12h16m-7 6h7"></path>
          }
          </svg>
        </button>
        <div
          className={`${isMenuOpen ? "block absolute gap-10 top-12 right-3 p-5 bg-color-secondary z-50 border-2 border-color-dark-4 rounded-md" : "hidden"
            } sm:flex sm:gap-5 sm:flex-row flex flex-col items-center`}
        >
            <InputComponent />
            <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
