import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const linkRef = useRef();
  const menuRef = useRef();
  
  const handleClick = () => {
    linkRef.current.classList.remove("active");
    menuRef.current.children[0].classList.remove("closed");
    menuRef.current.children[1].classList.remove("active");
  };

  const handleClose = () => {
    linkRef.current.classList.remove("active");
    menuRef.current.children[0].classList.remove("closed");
    menuRef.current.children[1].classList.remove("active");
  };

  return (
    <>
      <header className="bg-blue-600 p-4 text-white">
        <img
          src="https://img.innoloft.com/logo.svg"
          alt="Innoloft Logo"
          className="w-24 mx-auto"
        />
        <div className="toggleMenu" ref={menuRef}>
          <HiMenuAlt3 className="menu" onClick={handleClick} />
          <HiX className="close" onClick={handleClose} />
        </div>
      </header>
      <nav className="bg-blue-700 text-white p-4">
        <div className="toggleMenu" ref={menuRef}>
          <HiMenuAlt3 className="menu" onClick={handleClick} />
          <HiX className="close" onClick={handleClose} />
        </div>
          <ul className="flex justify-center space-x-4">
              <li><a href="#main">Main Page</a></li>
              <li><a href="#product">Product</a></li>
          </ul>
      </nav>
    </>
  );
};

export default Navbar;
