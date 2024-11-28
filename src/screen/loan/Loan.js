import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { TbUserCancel } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Loan = () => {
    return (
      <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
          <div className="w-full">
            <div className="flex h-14  "  style={{ backgroundColor: '#000814' }}>
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-xl mt-4 ">Loan</p>
            </div>
            <div className="border m-4 rounded-lg p-2 shadow-md bg-white border-white">
               <div className="w-1/4 mx-auto mt-4">
               <TbUserCancel className=" h-12 w-16 text-red-500"></TbUserCancel>
               </div>
                <p className="text-md text-center mt-4">দুংখিত  এখনও লোন চালু হয়নি</p>
                <p className="text-xs text-center mt-4">আর্থিক প্রতিষ্ঠানের লোন প্রদানের নীতিমালার অধীনে লোন নেওয়ার জন্য নিয়মিত ব্যাবহার করূণ। </p>
                <Link to="/main">
                {/* <p className="text-sm text-violet-500 text-center mt-4 mb-4">হোম-এ ফিরে যাই</p> */}
                <button className="mt-4 mb-4 text-violet-500 text-xs border border-violet-500 p-1 rounded-md">হোম-এ ফিরে যাই</button>
                </Link>

            </div>
        </div>
      </div>
    );
};

export default Loan;
