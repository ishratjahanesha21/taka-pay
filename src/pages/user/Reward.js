import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import coinAnimation from '../../jsons/coin.json';


const Reward = () => {
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    return (
        <div className="h-screen">
            <div className="lg:w-5/12 xl:w-4/12 2xl:w-3/12 lg:mx-auto   h-full ">
            <div className="w-full flex h-16  main-navbar" style={{ backgroundColor: '#000814' }}>
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-sm mt-4 ml-8">Rewar Points</p>
            </div>
            <div className="w-3/4 mx-auto pt-32">
                {
                    user?.point >0 ? <div className="flex  justify-between  w-full border border-violet-500 rounded h-12 ">
                        <div>
                            <p className="text-violet-500 text-sm mb-4 m-4"> {user?.point < 1000 ? "সিলভার" : user?.point > 1000 ? "গোল্ড":""}</p>
                        </div>
                        <div>
                            <div className="flex flex-1 items-center justify-center mr-4 ">
                                <Lottie animationData={coinAnimation} className=" h-12 w-12"></Lottie>
                                <p className="text-sm text-violet-500">{user?.point}</p>
                            </div>
                        </div>
                    </div> : <div className="w-full border border-red-500 rounded h-12 ">
                        <div>
                            <p className="text-red-500 text-sm mb-4 m-2">দুঃখিত আপনার কোন রিওয়ার্ড পয়েন্ট নেই</p>
                        </div>
                        
                    </div>
                }
            </div>
            <div className=" ml-2 mr-2 mt-12 border border-white bg-white rounded p-4">
                <div className="flex gap-2 mt-4">
                    <AiFillStar className="text-sm text-violet-500"></AiFillStar>
                    <p className="text-sm">নিয়মিত লেনদেন করে রিওয়ার্ড পয়েন্ট অর্জন করুন </p>
                </div>
                <div className="flex gap-2 mt-4">
                    <AiFillStar className="text-xl text-violet-500"></AiFillStar>
                    <p className="text-sm text-start">পয়েন্ট ব্যাবহার করে বিভিন্ন রিওয়ার্ড সংগ্রহ করুন আর সুবিধা উপভোগ করুন  </p>
                </div>
                <div className="flex gap-2 mt-4">
                    <AiFillStar className="text-xl text-violet-500"></AiFillStar>
                    <p className="text-sm text-start">পরবর্তী লেভেল এবং দারুণ সব অফার পেতে বেশি বেশি পয়েন্ট অর্জন করুন </p>
                </div>
            </div>
        </div>
        </div>
    );
};
export default Reward;