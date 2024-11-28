import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearStore } from '../../state/transaction/sendSlice';
import { BiUserCircle } from 'react-icons/bi';
import Lottie from "lottie-react";
import successAnimation from '../../jsons/success.json';
import senderAnimation from '../../jsons/transfer.json';
const PaymentSuccess = () => {
    const { transactions } = useSelector(state => state.payment.payment);
    const { isLoading } = useSelector(state => state.payment);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        dispatch(clearStore());
        navigate('/main');
        window.location.reload();
    }
    return (
        <div className="h-screen">
            <div className="lg:w-5/12 xl:w-4/12 2xl:w-3/12 lg:mx-auto   h-full ">
                <div className="flex">
                </div>
                {
                    isLoading ? <div className="flex flex-1 justify-center items-center min-h-screen">
                        {/* <img src={cycle} alt="" className="rocket" /> */}
                        <Lottie animationData={senderAnimation} className=" h-52 w-52"></Lottie>
                    </div> : null
                }
                {
                    transactions ? <div>
                        <div className='flex flex-1 items-center justify-center'>
                            <Lottie animationData={successAnimation} className=" h-48 w-48"></Lottie>
                        </div>
                        <div className="mt-6 w-full pl-2 pr-2">
                            <div className="bg-gray-100 h-20 border rounded-lg">
                                <p className="text-start text-sm pt-3 ml-3">প্রাপক</p>
                                <div className="flex ">
                                    <BiUserCircle className="h-10 w-12 text-gray-400 "></BiUserCircle>
                                    <p className="mt-2 text-sm">{transactions.receiverphone}</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="m-4">
                            <div className="flex justify-between">
                                <p className=" mt-5  text-start text-violet-500 text-md">ট্রানজেকশন আইডি</p>
                                <p className="text-gray-900 mt-5 f text-start text-md">{transactions.tranId}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className=" mt-5  text-start text-violet-500 text-md">সর্বমোট</p>
                                <p className="text-gray-900 mt-5  text-start text-md ">{transactions.amount}.00 TK</p>
                            </div>
                            <div className="flex justify-between">
                                <p className=" mt-5  text-start text-violet-500 text-md">চার্জ</p>
                                <p className="text-gray-900 mt-5  text-start text-md">00.00 TK</p>
                            </div>
                        </div>
                        <div className="m-4 border ">
                            <p className="text-xs text-center mt-2">লেনদেন করার জন্য আপনি রিওয়ার্ডস পয়েন্ট পেয়েছেন। </p>
                            <Link to="/reward">
                                <p className="text-xs text-center mt-2 mb-4 text-violet-500">রিওয়ার্ড দেখুন</p>
                            </Link>
                        </div>
                        <div className="w-full lg:hidden h-12 bg-violet-500 success-btn">
                            <button onClick={handleClick} className="text-white pl-2 pr-2 pt-2 ">পরবর্তী</button>
                        </div>
                        <div className="hidden w-full  lg:block h-12 bg-violet-500 mt-44">
                            <button onClick={handleClick} className="text-white pl-2 pr-2 pt-2 ">পরবর্তী</button>
                        </div>
                    </div> : null
                }
            </div>
        </div>
    );
};

export default PaymentSuccess;