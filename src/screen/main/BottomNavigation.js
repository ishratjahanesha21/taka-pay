import React from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiHome2Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
const BottomNavigations = () => {
  return (
    <div className="w-full mx-auto md:w-3/4 lg:w-7/12 xl:w-6/12 2xl:w-5/12  h-14 border-t rounded-t-lg  bg-stone-100 bottom-navigation">
      <div className="flex justify-between items-center pl-6 pr-6 pt-4">
        <div className="">
          <Link to="/">
            <RiHome2Line className="text-gray-900 text-2xl flex justify-center" />
          </Link>
        </div>
        <div className="">
          <Link to="/transactions">
            <FaMoneyBillTransfer className="text-gray-400 text-2xl flex justify-center" />
          </Link>
        </div>
        <div className="">
          <Link to="/settings/list">
            <FiSettings className="text-gray-400 text-2xl flex justify-center" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigations;