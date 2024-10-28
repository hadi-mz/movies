// import React, { useState } from 'react'
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { IoPricetagsOutline, IoSettingsOutline } from 'react-icons/io5';
// import NavbarLogo from "../assets/images/navbar/NavbarLogo.png";
// import { MdOutlineCategory } from 'react-icons/md';
// import { TbCategory } from 'react-icons/tb';
// import { CiStar } from 'react-icons/ci';
// import { IoMdLogIn } from 'react-icons/io';
// import { Color } from 'antd/es/color-picker';
// export default function Navbar() {
//     let [isMenuOpen, setIsMenuOpen] = useState(false);

//     return (
//         <div className="fixed z-20 top-0 left-0 w-full flex items-center justify-between lg:justify-around gap-8 px-4 lg:px-8 py-4">
//             <img src={NavbarLogo} alt="Logo" className="w-16 lg:w-20" />
//             <button className="hidden lg:flex text-white font-semibold py-2 px-8 rounded-full bg-[#E91E63]">Featured</button>

//             <div className="lg:hidden flex items-center ">
//                 <GiHamburgerMenu
//                     size={30}
//                     className="text-white cursor-pointer z-40 bg-black bg-opacity-50 p-2 rounded-lg"
//                     onClick={() => {
//                         console.log("Before:", isMenuOpen);
//                         setIsMenuOpen(!isMenuOpen);
//                         console.log("After:", isMenuOpen);
//                     }}
//                 />
//             </div>

//             <nav className="hidden lg:flex items-center space-x-6 text-white">
//                 <a href="#" className="hover:text-pink-500">Top Categories</a>
//                 <a href="#" className="hover:text-pink-500">All Categories</a>
//                 <a href="#" className="hover:text-pink-500">Pricing</a>
//             </nav>

//             <div className="hidden lg:flex items-center space-x-4">
//                 <button className="text-white hover:text-pink-500">LOGIN</button>
//                 <button className="bg-blue-300 text-bold text-blue-600 py-1 px-4 rounded-full">REGISTER</button>
//                 <IoSettingsOutline className="text-white text-2xl cursor-pointer" />
//             </div>
//             <div
//                 className={`absolute top-0 right-0 h-full bg-black bg-opacity-90 w-2/3 text-white  flex flex-col items-end lg:hidden transform transition-transform duration-300 ease-in-out z-20
//                 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
//             >
//                 <ul className="space-y-6 p-3 flex flex-col items-start py-12 gap-4 mt-6 w-full  bg-black bg-opacity-80">
//                     <li className='flex items-center gap-2'><MdOutlineCategory size={20} /><a href="#" className="text-white hover:text-gray-700">Top Categories</a></li>
//                     <li className='flex items-center gap-2'><TbCategory size={20} /><a href="#" className="text-white hover:text-gray-700">All Categories</a></li>
//                     <li className='flex items-center gap-2'><IoPricetagsOutline size={20} /><a href="#" className="text-white hover:text-gray-700">Pricing</a></li>
//                     <li className='flex items-center gap-2'><CiStar size={20} /><a href="#" className="text-white hover:text-gray-700">Favorites</a></li>
//                     <li className='flex items-center gap-2'><IoMdLogIn /><button className="text-white hover:text-pink-500">LOGIN</button></li>
//                     <li className='flex items-center gap-2'><button className="bg-blue-500 text-white py-1 px-4 rounded-full hover:bg-blue-600">REGISTER</button></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }






import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoPricetagsOutline, IoSettingsOutline } from 'react-icons/io5';
import NavbarLogo from "../assets/images/navbar/NavbarLogo.png";
import { MdOutlineCategory } from 'react-icons/md';
import { TbCategory } from 'react-icons/tb';
import { CiStar } from 'react-icons/ci';
import { IoMdLogIn } from 'react-icons/io';

export default function Navbar({ textColor = 'text-white'}) {
    let [isMenuOpen, setIsMenuOpen] = useState(false);
    let [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) setIsScrolled(true);
            else setIsScrolled(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`fixed z-20 top-0 left-0 w-full flex items-center justify-between lg:justify-around gap-8 px-4 lg:px-8 transition-all duration-300
      ${isScrolled ? 'bg-gradient-to-r from-[rgba(255,182,193,0.2)] via-[rgba(235,112,235,0.2)] to-[rgba(103,217,255,0.2)]' : 'bg-transparent'}`}>

            <img src={NavbarLogo} alt="Logo" className="w-16 lg:w-20 " />
            <button className="hidden lg:flex text-white font-semibold py-2 px-8 rounded-full bg-[#E91E63]">Featured</button>

            <div className="lg:hidden flex items-center ">
                <GiHamburgerMenu
                    size={30}
                    className="text-white cursor-pointer z-40"
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                    }}
                />
            </div>

            <nav className={`hidden lg:flex items-center space-x-6 ${textColor}`}>
                <a href="#" className={`hover:text-pink-500 ${isScrolled ? "text-black font-medium" : "bg-transparent"}`}>Top Categories</a>
                <a href="#" className={`hover:text-pink-500 ${isScrolled ? "text-black font-medium" : "bg-transparent"}`}>All Categories</a>
                <a href="#" className={`hover:text-pink-500 ${isScrolled ? "text-black font-medium" : "bg-transparent"}`}>Pricing</a>
            </nav>

            <div className="hidden lg:flex items-center space-x-4 text-white ">
                <button className={` hover:text-pink-500 ${isScrolled ? "text-black font-medium" : "bg-transparent"}`}>LOGIN</button>
                <button className="bg-blue-300 text-bold text-blue-600 py-1 px-4 rounded-full">REGISTER</button>
                <IoSettingsOutline className={`text-2xl cursor-pointer ${isScrolled ? "font-medium text-black" : "bg-transparent "}`} />
            </div>
            <div
                className={`absolute top-0 right-0 h-full bg-black bg-opacity-90 w-2/3 text-white  flex flex-col items-end lg:hidden transform transition-transform duration-300 ease-in-out z-20
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <ul className="space-y-6 p-3 flex flex-col items-start py-12 gap-4 mt-6 w-full bg-black bg-opacity-80">
                    <li className='flex items-center gap-2'><MdOutlineCategory size={20} /><a href="#" className="text-white hover:text-gray-700">Top Categories</a></li>
                    <li className='flex items-center gap-2'><TbCategory size={20} /><a href="#" className="text-white hover:text-gray-700">All Categories</a></li>
                    <li className='flex items-center gap-2'><IoPricetagsOutline size={20} /><a href="#" className="text-white hover:text-gray-700">Pricing</a></li>
                    <li className='flex items-center gap-2'><CiStar size={20} /><a href="#" className="text-white hover:text-gray-700">Favorites</a></li>
                    <li className='flex items-center gap-2'><IoMdLogIn /><button className="text-white hover:text-pink-500">LOGIN</button></li>
                    <li className='flex items-center gap-2'><button className="bg-blue-500 text-white py-1 px-4 rounded-full hover:bg-blue-600">REGISTER</button></li>
                </ul>
            </div>
        </div >
    );
}
