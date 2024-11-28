import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { GiReceiveMoney } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import MySavings from '../../pages/user/Savings';

const Savings = () => {
    return (
        <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
            <div className="w-full ">
                <div className="flex h-14  "  style={{ backgroundColor: '#000814' }}>
                    <div className="w-1/4">
                        <Link to="/main">
                            <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                        </Link>
                    </div>
                    <p className="text-white text-xl mt-4 ">Savings</p>
                </div>
                <div className=" m-4 p-2  border-b">
                    <div className="w-1/4 mx-auto mt-2">
                        <GiReceiveMoney className=" h-12 w-16 text-violet-500"></GiReceiveMoney>
                    </div>
                    <p className="text-xs text-start pl-8 mt-4">জমানো টাকার সহজ হিসাব দেখুন</p>
                    <p className="text-xs text-start pl-8 mt-2">১০০ টাকা থেকে সেভিংস শুরু হোক ট্রাস্ট-পে তে </p>
                    <p className="text-xs text-start pl-8 mt-2">সাধারন সেভিংস </p>
                    <p className="text-xs text-start pl-8 mt-2 mb-2">ইসলামিক সেভিংস </p>
                </div>
               <div className="scrollable-content h-64 m-4">
               <MySavings ></MySavings>
               </div>
                <div className="w-full mt-4 md:w-3/4 mx-auto" style={{ backgroundColor: '#000814' }}>
                    <div className="h-12 flex items-center justify-center" >
                    <Link to="/create/savings">
                        <button className="text-white ">Create new</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Savings;