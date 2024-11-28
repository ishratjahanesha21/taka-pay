import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Games = () => {
    return (
        <div className="h-screen">
            <div className="lg:w-5/12 xl:w-4/12 2xl:w-3/12 lg:mx-auto   h-full ">
        <div className="w-full flex h-16  main-navbar" style={{ backgroundColor: '#000814' }}>
            <div className="w-1/4">
                <Link to="/main">
                    <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                </Link>
            </div>
            <p className="text-white text-sm mt-4 ml-8">গেমস </p>
        </div>
        <div className=" flex justify-center items-center mt-32 bg-red-500 text-white border rounded-lg w-3/4 mx-auto h-20">
            <p>Under Construction</p>
          </div>

    </div>
        </div>
    );
};

export default Games;