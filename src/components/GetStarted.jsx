
import React from 'react';
import Footer from "../components/Footer"
import { Link } from 'react-router-dom';
export default function GetStarted() {

    return (
        <div className="relative w-full flex justify-center overflow-hidden mt-12 bg-gradient-to-br from-pink-100 via-pink-50 to-blue-100 lg:bg-white ">
            <svg
                className="absolute w-full  lg:flex hidden "
                width="1440"
                height="820"
                viewBox="0 0 1440 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 66.2653C0 66.2653 283.196 158.185 548.438 158.185C813.679 158.185 949.748 33.1607 1106.44 6.33552C1263.13 -20.4896 1440 66.2653 1440 66.2653V800H0V66.2653Z"
                    fill="#E91E63"
                    fillOpacity="0.1"
                />
                <mask
                    id="mask0_0_314"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="1"
                    width="1490"
                    height="799"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 66.2657C0 66.2657 283.196 158.185 548.438 158.185C813.679 158.185 949.748 33.161 1106.44 6.33588C1263.13 -20.4893 1440 66.2657 1440 66.2657V800H0V66.2657Z"
                        fill="white"
                    />
                </mask>
                <g mask="url(#mask0_0_314)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M-155.812 55.9463L297.222 55.9463C297.222 55.9463 234.562 55.9463 313.312 173.564C359.198 242.096 432 317.621 432 388.188C432 466.804 379.619 515.886 352.969 612.156C327.301 704.878 413.24 803.972 413.24 803.972H-155.812V55.9463Z"
                        fill="#E91E63"
                    />
                    <path
                        d="M1330.49 -304.224L1878.24 -312.885L1796.85 856.795L1278.86 804.777C1278.92 804.684 1278.99 804.591 1279.05 804.498C1285.14 795.724 1293.72 783.071 1303.72 767.511C1323.69 736.414 1349.39 693.599 1372.17 646.863C1394.9 600.217 1414.94 549.196 1423.27 501.774C1431.57 454.57 1428.57 409.052 1402.68 375.385C1388.83 357.374 1374.19 340.809 1360.21 325.001L1360.16 324.936C1346.12 309.062 1332.81 294.007 1321.15 278.609C1297.91 247.911 1281.91 216.689 1281.16 177.535C1280.32 133.893 1298.89 101.687 1322.31 64.6525C1323.72 62.415 1325.15 60.1618 1326.6 57.8896C1348.9 22.7793 1374.07 -16.8545 1386.06 -72.6112C1398.57 -130.764 1381.91 -192.653 1362.88 -239.127C1353.3 -262.52 1342.98 -282.364 1335.04 -296.368C1333.42 -299.235 1331.89 -301.861 1330.49 -304.224Z"
                        stroke="url(#paint0_linear_0_314)"
                        strokeWidth="19"
                    />
                </g>
                <defs>
                    <linearGradient
                        id="paint0_linear_0_314"
                        x1="942.069"
                        y1="257.245"
                        x2="1540.1"
                        y2="1034.9"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E91E63" />
                        <stop offset="1" stopColor="#304FFE" />
                    </linearGradient>
                </defs>
            </svg> 
            <div className="w-full relative flex flex-col items-center justify-start lg:justify-center  z-10 text-center px-6 lg:mt-28">
                <h1 className="lg:text-3xl text-xl font-bold text-gray-900 mt-24 pb-6">What are you waiting for ?</h1>
                <Link to={"/explore"} className="bg-blue-600 text-white font-semibold lg:px-10 lg:py-3 px-6 py-2 rounded-full hover:bg-blue-700 transition">
                    GET STARTED
                </Link>

                <Footer />

            </div>

        </div>
    );
}
