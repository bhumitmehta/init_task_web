"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Search from './search'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-slate-700 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and site title */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={48} height={48} className="rounded-2xl" />
          <p className="font-raleway font-semibold ml-2">djinit.ai</p>
        </div> <Search/>
        <button
          className="md:hidden block text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <div className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}>
          <div className="mt-2">
            <Link href="/" className="block py-2 flex-end">
              Homepage
            </Link>
            <Link href="/" className="block py-2 items-center">
              Contact
            </Link>
            <Link href="/" className="block py-2">
              About
            </Link>
            <Link
              href="/"
              className="block py-2 bg-slate-100 text-slate-700 hover:bg-teal-600 rounded-xl"
            >
              Blog
            </Link>
          </div>
        </div>
        <div className={`max-md:hidden `}>
           
          <Link href="/" className="no-underline md:ml-6 py-2 md:py-0">
            Homepage
          </Link>
          <Link href="/" className="no-underline md:ml-6 py-2 md:py-0">
            Contact
          </Link>
          <Link href="/" className="no-underline md:ml-6 py-2 md:py-0">
            About
          </Link>
          <Link
            href="/"
            className="no-underline md:ml-6 px-2 py-3  bg-slate-100 text-slate-700 rounded-xl"
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

