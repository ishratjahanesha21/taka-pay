import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiBankCard2Fill } from "react-icons/ri";
import { CiBank } from "react-icons/ci";
const AddMoney = () => {
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    return (
       <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
         <div className="w-full ">
            <div className="flex h-14  "  style={{ backgroundColor: '#000814' }}>
                <div className="w-1/4">
                    <Link to="/main" >
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2" ></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-sm mt-5 ">Add Money</p>
            </div>
            <div className="border rounded ml-2 mr-2 mt-8 p-2 bg-white border-white">
                <p className="text-gray-500 text-start  text-xs mb-4 ">এ্যাড মানি করার মাধ্যম বেছে নিন</p>
                <div className="flex justify-between border rounded p-2">
                   <div className="flex gap-4">
                   <CiBank className="text-5xl border rounded-full p-1 shadow-lg" style={{ color: '#000814' }}/>
                      <p className="text-xs text-gray-900 mt-4">ব্যাংক টু পি-ক্যাশ</p>
                   </div>
                    <button className="bg-white w-12" > <FiArrowRight className="text-gray-500 text-2xl ml-2"></FiArrowRight></button>
                </div>
                <div className="flex justify-between border rounded p-2 mt-4">
                   <div className="flex gap-4">
                   <RiBankCard2Fill className="text-5xl border rounded-full p-1 shadow-lg" style={{ color: '#000814' }}/>
                      <p className="text-xs text-gray-900 mt-4">কার্ড টু পি-ক্যাশ</p>
                   </div>
                    <button className="bg-white w-12" > <FiArrowRight className="text-gray-500 text-2xl ml-2"></FiArrowRight></button>
                </div>

            </div>
            
        </div>
       </div>
    );
};

export default AddMoney;