import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed z-10 w-full top-0 bg-gray-800 p-4 px-6 md:px-12">
      <div className="mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="/"
              className="text-gray-100 font-thin text-xl tracking-tight"
            >
              Reel Estate
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 5H5a1 1 0 100 2h14a1 1 0 100-2zM19 11H5a1 1 0 100 2h14a1 1 0 100-2zM19 17H5a1 1 0 100 2h14a1 1 0 100-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm16 5H4v2h16v-2zm0 5H4v2h16v-2z"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden md:flex">
            <a
              href="/map"
              className="text-gray-100 hover:text-gray-300 py-2 px-3"
            >
              Map
            </a>
            <a
              href="/listings"
              className="text-gray-100 hover:text-gray-300 py-2 px-3"
            >
              Listings
            </a>
            <div className="relative">
              <input
                type="text"
                className="bg-gray-700 rounded-full text-sm placeholder-gray-400 px-4 py-2 pr-10 focus:outline-none focus:shadow-outline w-64"
                placeholder="Search cities"
              />
              <div className="absolute right-0 top-0 mt-2 mr-4">
                <svg
                  className="h-4 w-4 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.043 14.35a7.5 7.5 0 111.414-1.414l4.242 4.243a1 1 0 11-1.414 1.414l-4.242-4.243zM7.5 13.5a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
