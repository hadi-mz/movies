import React, { useState } from 'react';
import { IoPricetagsOutline, IoSettingsOutline } from 'react-icons/io5';
import { FaPlay } from 'react-icons/fa';
import heroPattern from "../assets/images/navbar/NavbarBG.jpg";
import { MdOutlineCategory } from 'react-icons/md';
import { TbCategory } from 'react-icons/tb';
import { IoMdLogIn } from 'react-icons/io';
import { CiStar } from 'react-icons/ci';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header
            className="relative h-[650px] lg:min-h-screen bg-cover bg-center  overflow-hidden"
            style={{
                backgroundImage: `url(${heroPattern})`,
                clipPath: 'ellipse(100% 80% at 50% 0%)',
            }}
        >

            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 lg:px-16 ">
                <Link to={"/explore"} className="flex items-center justify-center gap-4">
                    <span className="uppercase tracking-wide text-2xl font-bold">Watch</span>
                    <FaPlay size={100} className="border p-4 rounded-full animate-bounce " />
                    <span className="uppercase tracking-wide text-2xl font-bold">Expelor</span>
                </Link>
                <div className="text-start w-full mt-4">
                    <p className="text-lg mb-2">Vivamus sit amet interdum elit</p>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Mancing Mania<br />The Movie</h1>
                    <p className="text-lg mb-6">On the air 01.11.20</p>
                </div>
            </div>
            <Navbar/>

        </header>
    );
}
