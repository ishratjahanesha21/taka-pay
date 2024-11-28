import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MonthlyLimit = () => {
    return (
        <div className="h-screen">
            <div className="lg:w-5/12 xl:w-4/12 2xl:w-3/12 lg:mx-auto   h-full ">
                <div className="flex h-14  "  style={{ backgroundColor: '#000814' }}>
                    <div className="w-1/4">
                        <Link to="/main">
                            <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                        </Link>
                    </div>
                    <p className="text-white text-xl mt-4 ">লিমিট
                    </p>
                </div>
                <div className="m-4 flex justify-between items-center border-b">
                    <Link to="/limit">
                        <p className=" text-sm">
                            দৈনিক লিমিট
                        </p>
                    </Link>
                    <Link >
                        <p className="text-fuchsia-500 text-sm">
                            মাসিক লিমিট
                        </p>
                    </Link>

                </div>
                <div className=" ml-4 mr-4 mt-4">
                    <div className="flex gap-4">
                        <div className="border rounded h-12 p-2 w-full">
                            <p className="text-sm">এজেন্ট থেকে ক্যাশ ইন</p>
                        </div>
                        <div className="border rounded h-12 p-2 w-full">
                            <p className="text-sm">৪৫০  বার </p>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <div className="border rounded h-12 p-2 w-full">
                            <p className="text-sm">ক্যাশ আউট ১</p>
                        </div>
                        <div className="border rounded h-12 p-2 w-full">
                            <p className="text-sm">৪৫০  বার </p>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <div className="border rounded h-12 p-2 w-full">
                            <p className="text-sm"> সেন্ড মানি আন লিমিটেড</p>
                        </div>
                        <div className="border rounded h-12 p-2 w-full">
                            <p className="text-sm">লিমিটেড</p>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <div className="border rounded h-12 p-2 w-full">
                            <p className="text-sm"> পে বিল  </p>
                        </div>
                        <div className="border rounded h-12 p-2 w-full">
                            <p className="text-sm">১৫০০বার</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonthlyLimit;