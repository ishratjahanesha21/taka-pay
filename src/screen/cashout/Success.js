import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BiUserCircle } from 'react-icons/bi';
import { clearStore } from '../../state/transaction/sendSlice';
import Lottie from "lottie-react";
import successAnimation from '../../jsons/success.json';
import useMediaQuery from '@mui/material/useMediaQuery';
import { clearAgentNumber } from '../../state/transaction/agentNumberSlice';
import CircularProgressWithLabel from '../../pages/loader/CircularProgressWithLabel';


const CashOutSuccess = () => {
    const { transactions } = useSelector(state => state.cashOut.cashout);
    const { isLoading } = useSelector(state => state.cashOut);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width:960px)');

    const [progress, setProgress] = useState(10);
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const handleClick = () => {
        dispatch(clearStore());
        dispatch(clearAgentNumber());
        navigate('/main');
    };

    const SuccessContent = () => (
        <div>
            <div className='flex flex-1 items-center justify-center'>
            <Lottie animationData={successAnimation} className="h-48 w-48" />
            </div>
            <div className="w-full pl-2 pr-2">
                <div className="bg-gray-100 h-20 border rounded-lg">
                    <p className="text-start text-sm pt-3 ml-3">প্রাপক</p>
                    <div className="flex">
                        <BiUserCircle className="h-10 w-12 text-gray-400" />
                        <p className="mt-2 text-sm">{transactions.receiverphone}</p>
                    </div>
                </div>
            </div>
            <div className="m-4">
                <div className="flex justify-between">
                    <p className="mt-5 text-start text-md" style={{ color: '#000814' }}>ট্রানজেকশন আইডি</p>
                    <p className="text-gray-900 mt-5 text-start text-md">{transactions.tranId}</p>
                </div>
                <div className="flex justify-between">
                    <p className="mt-5 text-start text-md" style={{ color: '#000814' }}>সর্বমোট</p>
                    <p className="text-gray-900 mt-5 text-start text-md">{transactions.amount}.00 TK</p>
                </div>
                <div className="flex justify-between">
                    <p className="mt-5 text-start text-md" style={{ color: '#000814' }}>চার্জ</p>
                    <p className="text-gray-900 mt-5 text-start text-md">00.00 TK</p>
                </div>
            </div>
            <div className="m-4 border">
                <p className="text-xs text-center mt-2">লেনদেন করার জন্য আপনি রিওয়ার্ডস পয়েন্ট পেয়েছেন। </p>
                <Link to="/reward">
                    <p className="text-xs text-center mt-2 mb-4 text-violet-500">রিওয়ার্ড দেখুন</p>
                </Link>
            </div>
            <div className="w-full  fixed bottom-0" style={{ backgroundColor: '#000814' }}>
                    <div className="h-12 flex items-center justify-center" onClick={handleClick}>
                        <button className="text-white">Back to home</button>
                    </div>
                </div>
        </div>
    );

    return (
        <>
            <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
                <div className="w-full flex flex-1 flex-col justify-center items-center h-full">
                    {isLoading ? (
                        <div className="flex flex-1 flex-col justify-center items-center h-full">
                            <CircularProgressWithLabel value={progress} size={150} />
                        </div>
                    ) : <div className='w-3/4 mx-auto'>
 <div className='flex flex-1 items-center justify-center'>
            <Lottie animationData={successAnimation} className="h-48 w-48" />
            </div>
            <div className="w-full pl-2 pr-2">
                <div className="bg-gray-100 h-20 border rounded-lg">
                    <p className="text-start text-sm pt-3 ml-3">প্রাপক</p>
                    <div className="flex">
                        <BiUserCircle className="h-10 w-12 text-gray-400" />
                        <p className="mt-2 text-sm">{transactions.receiverphone}</p>
                    </div>
                </div>
            </div>
            <div className="m-4">
                <div className="flex justify-between">
                    <p className="mt-5 text-start text-md" style={{ color: '#000814' }}>ট্রানজেকশন আইডি</p>
                    <p className="text-gray-900 mt-5 text-start text-md">{transactions.tranId}</p>
                </div>
                <div className="flex justify-between">
                    <p className="mt-5 text-start text-md" style={{ color: '#000814' }}>সর্বমোট</p>
                    <p className="text-gray-900 mt-5 text-start text-md">{transactions.amount}.00 TK</p>
                </div>
                <div className="flex justify-between">
                    <p className="mt-5 text-start text-md" style={{ color: '#000814' }}>চার্জ</p>
                    <p className="text-gray-900 mt-5 text-start text-md">00.00 TK</p>
                </div>
            </div>
            <div className="m-4 border">
                <p className="text-xs text-center mt-2">লেনদেন করার জন্য আপনি রিওয়ার্ডস পয়েন্ট পেয়েছেন। </p>
                <Link to="/reward">
                    <p className="text-xs text-center mt-2 mb-4 text-violet-500">রিওয়ার্ড দেখুন</p>
                </Link>
            </div>
            <div className="w-full" style={{ backgroundColor: '#000814' }}>
                    <div className="h-12 flex items-center justify-center" onClick={handleClick}>
                        <button className="text-white">Back to home</button>
                    </div>
                </div>
                        </div>}
                </div>
            </div>

        </>
    );
};
export default CashOutSuccess;
