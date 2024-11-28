import React from 'react';
import { CiLock } from 'react-icons/ci';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const TenSchools = () => {
    return (
        <div className="h-screen">
            <div className="lg:w-5/12 xl:w-4/12 2xl:w-3/12 lg:mx-auto   h-full ">
            <div className=" w-full flex  h-16  main-navbar" style={{ backgroundColor: '#000814' }}>
                <div className="w-1/4">
                    <Link to="/main" >
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2" ></FiArrowLeft>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <CiLock className="text-white text-2xl mt-4 ml-5" />
                    <p className="text-white text-sm mt-5 "> Home | 10m School ...</p>
                </div>
            </div>
            <div className="w-full">
                <iframe
                    className="w-full min-h-screen"
                    src="https://10minuteschool.com/"
                    title="Introduction To WiseGPT"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
        </div>
    );
};

export default TenSchools;