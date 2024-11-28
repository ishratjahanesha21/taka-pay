import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Support = () => {
    return (
        <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
            <div className="">
            <div className="w-full flex h-14" style={{ backgroundColor: '#000814' }}>
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-8">সাপোর্ট</p>
            </div>
            <div className=" pt-16 ">
                <div className="m-4  p-2 bg-white border border-white ">
                    <p className="text-xs text-start text-gray-900">যে কোন তথ্য বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করূণ</p>
                    <div className="flex items-center justify-center  mt-4 gap-4">
                        <p className="text-violet-500 text-xs text-start">ফোন </p>
                        <p>+8801122334455</p>
                    </div>
                    <div className="flex items-center justify-center  mt-4 gap-4">
                        <p className="text-violet-500 text-xs text-start"> ইমেইল</p>
                        <p>support.takapay@gmail.com</p>
                    </div>
                </div>
            </div>
            <p className="text-start text-xs text-violet-500 ml-4">কাউন্টার সেবা</p>
            <div className="border bg-white border-white m-4 flex justify-between">
                <div className="p-4">
                    <p className="text-xs text-start font-bold">Daffodil Smart City </p>
                    <p className="text-xs text-start mt-2">Ashulia,Savar,Dhaka </p>
                    <p className="text-xs text-start mt-2">কাউন্টার নাম্বার ১</p>
                    <p className="text-xs text-start mt-2">সময়সীমা 9.00Am - 4.00PM </p>
                </div>
                <a href="https://maps.app.goo.gl/woXVrWLi8HggNe2VA" target="_blank" rel="noopener noreferrer" className="mt-4  text-xs text-violet-500">ম্যাপ</a>
            </div>

        </div>
        </div>
    );
};

export default Support;