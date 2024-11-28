import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Cuppon = () => {
    return (
        <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
            <div className="w-full ">
            <div className="w-full flex h-16 " style={{ backgroundColor: '#000814' }}>
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                {/* <p className="text-white text-xl mt-1 ml-16">Inbox</p> */}
                <p className="text-white text-md mt-4 ml-8">কুপন</p>
            </div>
            <div className=" mt-24 ">
                <div className="m-4 border h-16  p-2">
                    <p className="text-sm text-center text-violet-500">আপনার এই মূহুর্তে কোন কুপন নেই</p>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default Cuppon;