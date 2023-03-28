import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ handleLogout, loggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed z-10 w-full top-0 bg-gray-800 p-4 px-6 md:px-12">
      <div className="mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-gray-100 font-thin text-xl tracking-tight"
            >
              Reel Estate
            </Link>
          </div>

          <div className="flex sm:hidden">
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

          <div className="hidden sm:flex">
            <Link
              to="/"
              className="text-gray-100 hover:text-gray-300 py-2 px-3"
            >
              Map
            </Link>
            <Link
              to="/listings"
              className="text-gray-100 hover:text-gray-300 py-2 px-3"
            >
              Listings
            </Link>
            {loggedIn || (
              <>
                <Link
                  to="/login"
                  className="text-gray-100 hover:text-gray-300 py-2 px-3"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="text-gray-100 hover:text-gray-300 py-2 px-3"
                >
                  Sign Up
                </Link>
              </>
            )}
            {loggedIn && (
              <>
                <Link
                  to="/meeting"
                  className="text-gray-100 hover:text-gray-300 py-2 px-3"
                >
                  Meet
                </Link>
                <Link
                  to="/add"
                  className="bg-gray-100 rounded-3xl mx-3 hover:text-gray-500 text-gray-800 p-2"
                >
                  Add Listing
                </Link>
                <Link
                  to="/login"
                  onClick={() => handleLogout()}
                  className="text-gray-100 hover:text-gray-300  py-2 px-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                </Link>
              </>
            )}
          </div>
          {isMenuOpen && (
            <div className=" sm:hidden flex flex-col w-full left-0  absolute top-20 bg-gray-800 p-16 rounded-lg items-center space-y-3">
              <button
                className="absolute top-0 left-0 p-3 text-2xl text-white "
                onClick={() => setIsMenuOpen(false)}
              >
                &times;
              </button>
              <Link
                to="/"
                className="text-gray-100 hover:text-gray-300 py-2 px-3"
              >
                Map
              </Link>
              <Link
                to="/listings"
                className="text-gray-100 hover:text-gray-300 py-2 px-3"
              >
                Listings
              </Link>
              {loggedIn && (
                <>
                  <Link
                    to="/meeting"
                    className="text-gray-100 hover:text-gray-300 py-2 px-3"
                  >
                    Meet
                  </Link>
                  <Link
                    to="/add"
                    className="bg-gray-100 rounded-3xl mx-3 hover:text-gray-500 text-gray-800 p-2"
                  >
                    Add Listing
                  </Link>
                  <Link
                    to="/login"
                    onClick={() => handleLogout()}
                    className="text-gray-100 hover:text-gray-300  py-2 px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        strokeLineCap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
