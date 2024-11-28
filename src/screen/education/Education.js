import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaSchool } from "react-icons/fa";
import { MdModelTraining } from "react-icons/md";
import { IoIosSchool, IoMdBook } from "react-icons/io"
import { InputAdornment, TextField } from '@mui/material';


const Education = () => {
    return (
        <div className="h-screen">
            <div className="lg:w-5/12 xl:w-4/12 2xl:w-3/12 lg:mx-auto   h-full ">
            <div className="flex h-14  "  style={{ backgroundColor: '#000814' }}>
                <div className="w-1/4">
                    <Link to="/main" >
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2" ></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-sm mt-5 ">Education Fee</p>
            </div>
            <div className="border rounded ml-2 mr-2 mt-8 p-2 bg-white border-white">
                <p className="text-gray-500 text-start  text-xs mb-4 ">প্রতিষ্ঠান খুঁজুন</p>
                <div className="flex ">
                    <div className="w-full flex mt-6 pl-2 pr-2">

                        <TextField
                             id="filled-basic"
                            label="প্রতিষ্ঠানের নাম দিন"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        {/* <LocalPhoneIcon /> */}
                                    </InputAdornment>
                                ),
                            }}
                            variant="filled"
                            className="w-full"
                            // value={receiverphone} onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <button className="w-12 bg-gray-500"> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>

                    </div>
                </div>

            </div>
            <div className="m-2 bg-white border-white ">
                <p className="text-sm text-start text-gray-500 pl-2">সব প্রতিষ্ঠান</p>
            </div>
            <div className="m-2 bg-white border-white ">
                <div className="flex justify-around pt-4 pb-8">
                    <div>
                        <Link to="/send">

                            <div className="flex">
                                <FaSchool className="text-4xl border rounded-full p-1 text-violet-500  mb-1">ট</FaSchool>

                            </div>
                            <p className="paymentCategory-text font-medium">স্কুল</p>
                        </Link>
                    </div>
                    <div >
                        <Link to="/cashout">
                            <div className="flex">
                                <IoMdBook className="text-4xl border rounded-full p-1  text-violet-500   mb-1">ট</IoMdBook>

                            </div>
                            <p className="paymentCategory-text  font-medium  text-start" >কলেজ </p>
                        </Link>
                    </div>
                    <div >
                        <Link to="/recharge">
                            <IoIosSchool className="text-4xl border rounded-full p-1 text-violet-500  mb-1"></IoIosSchool>
                            <p className="paymentCategory-text font-medium  text-start">ইউনিভার্সিটি </p></Link>
                    </div>
                    <div >
                        <Link to="/payment/number">
                            <MdModelTraining className="text-4xl border rounded-full p-1 text-violet-500  mb-1"></MdModelTraining>
                            <p className="paymentCategory-text font-medium  text-start">ট্রেনিং</p>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
        </div>
    );
};

export default Education;