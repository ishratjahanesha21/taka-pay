import React from 'react';
import './Loader.css';
import Lottie from "lottie-react";
import preloaderAnimation from '../../jsons/loader.json';
import './Loader.css'
const PreLoader = () => {
    return (
        <div className="flex flex-col items-center justify-center mx-auto min-h-screen">
            {/* <Lottie animationData={preloaderAnimation} className=" h-32 w-32"></Lottie>
            <p className='text-gray-900 text-xl font-mono '>QuickPay</p> */}
        </div>
    );
};

export default PreLoader;