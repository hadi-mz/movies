import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

export default function Footer({ variant = 'default' }) {
  return (
    <div className={`w-full  py-8 px-4 sm:px-8 lg:px-20 mt-20 relative ${variant === "white" ? "bg-none"
        : "bg-gradient-to-r from-[rgba(255,182,193,0.2)] via-[rgba(235,112,235,0.2)] to-[rgba(103,217,255,0.2)]"
      }`}>

      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">

        {/* Logo */}
        <div className="mb-6 sm:mb-0 lg:flex hidden  flex-col gap-4">
          <div className="w-16 h-16 bg-pink-500 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-3xl text-white font-bold">b</span>
          </div>
          <p className='font-bold text-white'>VIDEO</p>

        </div>

        {/* Footer Links */}
        <div className={`flex flex-wrap text-center sm:text-left justify-center gap-10 ${variant === "white" ? "text-white" : "text-gray-800"}`}>
          <div>
            <h2 className="font-semibold mb-2">COMPANY</h2>
            <ul className="space-y-1">
              <li>Donec dignissim</li>
              <li>Curabitur egestas</li>
              <li>Nam posuere</li>
              <li>Aenean facilisis</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">SERVICES</h2>
            <ul className="space-y-1">
              <li>Cras convallis</li>
              <li>Vestibulum faucibus</li>
              <li>Quisque lacinia purus</li>
              <li>Aliquam nec ex</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">LEGAL</h2>
            <ul className="space-y-1">
              <li>Suspisse porttitor</li>
              <li>Nam posuere</li>
              <li>Curabitur egestas</li>
            </ul>
          </div>
        </div>

        {/* Social Icons and Language Dropdown */}
        <div className="flex flex-col items-center space-y-6 mt-6 sm:mt-0">
          <div className="flex space-x-4 text-blue-600">
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <FaInstagram />
            </a>
          </div>

          {/* Language Selector */}
          <div className="relative inline-block">
            <button className="flex items-center px-4 py-2 bg-gray-100 text-blue-600 rounded-md border border-blue-500 focus:outline-none hover:bg-blue-50">
              <BiWorld className="mr-2" />
              <span>English - En</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
