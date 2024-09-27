import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-primaryColor text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Vision Africa Group</h3>
            <p className="text-gray-400">
              Leading importers and distributors of electronics and electrical appliances in Nigeria. We provide high-quality, reliable products to meet the needs of our clients.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">Products</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">About Us</a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">Shipping & Delivery</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">Returns & Exchanges</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">Warranty Information</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  {/* You can replace these with actual icons */}
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Copyright Info */}
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vision Africa Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


