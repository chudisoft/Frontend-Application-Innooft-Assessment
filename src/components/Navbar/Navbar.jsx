import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const handleClose = () => {
    setShow(!show);
  };

  return (
    <>
      <header className="bg-blue-600 p-4 text-white">
        <img
          src="https://img.innoloft.com/logo.svg"
          alt="Innoloft Logo"
          className="w-24 mx-auto"
        />
        <div className="toggleMenu">
          {!show && <HiMenuAlt3 className="menu" onClick={handleClick} />}
          {show && <HiX className="close" onClick={handleClose} />}
        </div>
      </header>
      <nav className={`${show ? '' : 'hide'} bg-blue-700 text-white p-4 side-nav`}>
        <div className="toggleMenu">
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
