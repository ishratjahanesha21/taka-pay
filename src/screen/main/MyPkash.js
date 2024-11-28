import { message } from 'antd';
import React from 'react';
import { BiSolidOffer, BiSolidContact } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const MyPkash = () => {
    const allShow = () => {
        message.error("Link Page is Under Construction")
    }
    return (
        <div className="ml-2 mr-2">
            <div className="mt-4 h-24 border-b">
                <div className="flex justify-between mt-2 pl-2 pr-2 ">
                    <p className="text-xs text-start ml-2">My Quick Pay</p>
                    <p className="text-xs text-start ml-2 " style={{ color: '#000814' }} onClick={allShow}>see all</p>
                </div>
                <div className="flex gap-4 mt-4 pl-4 pr-2">
                    <div>
                        <Link to="/my/offer">
                            <BiSolidOffer className="text-3xl text-violet-500 ml-2 mb-1"></BiSolidOffer>
                            <p className="paymentCategory-text  font-medium  text-start ">My Offer</p>
                        </Link>
                    </div>
                    <div className="">
                        <Link to="/my/number">
                            <BiSolidContact className="text-3xl text-teal-500 ml-6 mb-1"></BiSolidContact>
                            <p className="paymentCategory-text  font-medium  text-start">Priyo Number</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPkash;