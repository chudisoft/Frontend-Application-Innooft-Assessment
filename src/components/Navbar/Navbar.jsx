import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import './Navbar.css';

const Navbar = ({handleCloseClick}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(!show);
    handleCloseClick(!show);
  };

  return (
    <>
      <header className="bg-blue-600 p-4 text-white flex space-x-4">
        <img
          src="https://img.innoloft.com/logo.svg"
          alt="Innoloft Logo"
          className="w-24 mx-auto"
        />
        <span className="toggleMenu">
          {!show && <HiMenuAlt3 className="menu" onClick={handleClose} />}
          {show && <HiX className="close" onClick={handleClose} />}
        </span>
      </header>
      <nav className={`${show ? 'shown' : ''} bg-blue-700 text-white side-nav`}>
        <div className='d-flex'>
          <div className="w-100 flex flex-row-reverse space-x-4 space-x-reverse">
            <span className="toggleMenu">
              <HiX className="close" onClick={handleClose} />
            </span>
          </div>
          <ul>
              <li><a href="/">Main Page</a></li>
              <li><a href="/product">Product</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
