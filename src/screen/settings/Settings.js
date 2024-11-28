import React from 'react';
import { FiArrowLeft,FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Settings = () => {
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg">
            <div className="flex h-14  "  style={{ backgroundColor: '#000814' }}>
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-xl mt-4 ml-5">সেটিংস</p>
            </div>
            <div className="w-full h-10 border border-slate-100 flex justify-between mt-10 ">
                <Link to="/update/name">
                   <p className="mt-2 ml-2">নাম পরিবর্তন করুন</p>
                </Link>
                <Link to="/update/name">
                 <FiArrowRight className="text-violet-500 text-2xl mt-2 mr-2"></FiArrowRight>
                </Link>
              
            </div>
            <div className="w-full h-10 border border-slate-100 flex justify-between mt-5 ">
                <Link to="/update/profile">
                   <p className="mt-2 ml-2">ছবি পরিবর্তন করুন</p>
                </Link>
                <FiArrowRight className="text-violet-500 text-2xl mt-2 mr-2"></FiArrowRight>
            </div>
        </div>
    );
};

export default Settings;