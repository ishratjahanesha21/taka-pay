import React from 'react';
import Lottie from "lottie-react";
import cashbackAnimation from '../../jsons/cashback.json';
const Cashback = () => {
    return (
        <div className="h-64 ml-2 mr-2 mt-8">
             <Lottie animationData={cashbackAnimation} className="h-56 w-full border"></Lottie>
        </div>
    );
};

export default Cashback;