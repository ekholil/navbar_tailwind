import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex relative p-4 bg-green-400 justify-between max-w-[1200px] mx-auto">
      <div>hello</div>
      <div className="hidden md:flex gap-4">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Service</a>
        <a href="">Resume</a>
      </div>
      <button className="md:hidden" onClick={() => setOpen(!open)} href="">
        {open ? "Close" : "Open"}
      </button>
      <div
        className={`absolute bg-blue-500 overflow-hidden transition-all duration-500 ease-in-out top-14 block left-0 w-full ${
          open ? "opacity-1 left-0 flex-col" : "opacity-0"
        }`}
      >
        <Link href="/">
          <a
            onClick={() => setOpen(!open)}
            className="border-b-[1px] p-2 border-gray-300 transition-all duration-500"
          >
            Home
          </a>
        </Link>
        <Link href="/">
          <a
            onClick={() => setOpen(!open)}
            className="border-b-[1px] p-2 border-gray-300 transition-all duration-500"
          >
            About
          </a>
        </Link>
        <Link href="/">
          <a
            onClick={() => setOpen(!open)}
            className="border-b-[1px] p-2 border-gray-300 transition-all duration-500"
          >
            Contact
          </a>
        </Link>
        <Link href="/">
          <a
            onClick={() => setOpen(!open)}
            className="border-b-[1px] p-2 border-gray-300 transition-all duration-500"
          >
            Service
          </a>
        </Link>
        <Link href="/">
          <a
            onClick={() => setOpen(!open)}
            className="border-b-[1px] p-2 border-gray-300 transition-all duration-500"
          >
            Resume
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
