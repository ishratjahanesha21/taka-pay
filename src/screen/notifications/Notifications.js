import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Notifications = () => {
    return (
        <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
            <div className="w-full ">
                <div className="w-full flex h-16" style={{ backgroundColor: '#000814' }}>
                    <div className="w-1/4">
                        <Link to="/main">
                            <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                        </Link>
                    </div>
                    <p className="text-white text-md mt-4 ml-4">Notification</p>
                </div>
                <div>
                    <div className=" ml-2 mr-2 mt-12 border border-neutral-400 bg-neutral-400 rounded p-4">
                        <div className=" mt-4">

                            <p className="text-xl text-white text-start">অভিনন্দন  </p>
                        </div>
                        <p className="text-sm text-white  text-start mt-4">আপনি রেজিষ্ট্রেশন করে ৫০টাকা বোনাস পেয়েছেন </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Notifications;