import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300  py-6">
      <div className="container mx-auto px-4">
        {/* <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold mb-2">Reel Estate</h3>
            <p className="mb-2">
              A digital real estate platform that offers users the unique
              ability to request and schedule tours of potential property before
              buying
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/listings">Listings</Link>
              </li>
              <li className="mb-2">
                <Link to="/">Map</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <ul className="flex">
              <li className="mr-4">
                <Link to="#">
                  <FaFacebook />
                </Link>
              </li>
              <li className="mr-4">
                <Link to="#">
                  <FaTwitter />
                </Link>
              </li>
              <li className="mr-4">
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="mt-4 border-t border-gray-600 pt-4 text-center  md:grid md:grid-cols-2 md:gap-4">
          <p>© 2023 Reel Estate. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
