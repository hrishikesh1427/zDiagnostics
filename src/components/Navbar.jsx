import React, { useEffect, useState } from "react";
import LogoNav from "../assets/LogoNav.png";
import { RiCloseFill, RiMenu3Line } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(
    window.innerWidth < 768
  );
  const [isMenuOpen, setIsMenuOpen] = useState(!isSmallDevice);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsSmallDevice(true);
      setIsMenuOpen(false);
    } else {
      setIsSmallDevice(false);
      setIsMenuOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false); // Close the dropdown when toggling the menu
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false); // Close the dropdown after an item is clicked
  };

  return (
    <nav className="relative bg-white shadow-xl border-gray-700 min-h-[50px] px-10 max-md:px-4 p-2 flex items-center justify-between flex-wrap sticky top-0 left-0 z-20">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex gap-4 items-center">
          <img src={LogoNav} alt="Logo" className="w-12 h-12" />
          <div className="flex flex-col">
            <HashLink
              className="text-secondary text-2xl font-bold max-sm:text-xl"
              to="/"
            >
              Easy Diagnostic
            </HashLink>
            <span className="text-xs text-primary font-semibold">
              Believing in Better Health.
            </span>
          </div>
        </div>
        <div className="md:hidden">
          {isMenuOpen ? (
            <RiCloseFill
              className="w-8 h-8 text-secondary"
              onClick={handleMenuClick}
            />
          ) : (
            <RiMenu3Line
              className="w-8 h-8 text-secondary"
              onClick={handleMenuClick}
            />
          )}
        </div>
      </div>
      <ul
        className={`flex-col md:flex-row md:flex gap-5 text-black text-md items-center transition-all ease-in-out duration-[.5s] w-full md:w-auto ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <li className="cursor-pointer hover:underline">
          <HashLink to="/#home">
            Home
          </HashLink>
        </li>
        <li className="relative cursor-pointer hover:underline">
          <button
            onClick={handleDropdownClick}
            className="flex items-center gap-2 focus:outline-none"
          >
            Our Product
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 gap-5 md:mt-0 bg-white border border-gray-300 shadow-lg w-full md:w-48 text-black rounded-md overflow-hidden z-10">
              <li className="hover:bg-gray-100">
                <HashLink to="/#about" className="block px-4 py-2" onClick={handleDropdownItemClick}>
                  Easy Diagnostic
                </HashLink>
              </li>
              <li className="hover:bg-gray-100">
                <HashLink to="https://easytracker.co.in/" className="block px-4 py-2" onClick={handleDropdownItemClick}>
                  Easy Tracker
                </HashLink>
              </li>
              <li className="hover:bg-gray-100">
                <HashLink to="https://yuva.easytracker.co.in/" className="block px-4 py-2" onClick={handleDropdownItemClick}>
                  Yuva
                </HashLink>
              </li>
            </ul>
          )}
        </li>
        <li className="cursor-pointer hover:underline">
          <HashLink to="/#pricing">
            Pricing
          </HashLink>
        </li>
        <li className="cursor-pointer hover:underline">
          <HashLink to="/demo">
            App FAQ
          </HashLink>
        </li>
        <li className="cursor-pointer hover:underline bg-secondary text-background font-medium rounded-xl px-4 py-2">
          <HashLink to="/#contact">
            Request demo
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
