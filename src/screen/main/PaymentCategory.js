import React from 'react';
import { BsLightbulb, BsBagFill, BsBook, BsLightningCharge } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { GiChipsBag } from "react-icons/gi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Main.css';

const PaymentCategory = () => {
    return (
        <div className="ml-2 mr-2">
            <div className="flex justify-around gap-2">
                <div className="p-2 w-full border rounded-lg flex justify-center items-center">
                    <Link to="/send">
                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 flex items-center justify-center">
                                <p className="text-4xl font-thin text-red-500 mb-1 mt-2">ট</p>
                            </div>
                            <p className="text-xs font-medium text-center mt-1">Send</p>
                        </div>
                    </Link>
                </div>
                <div className="p-2 w-full border rounded-lg flex justify-center items-center">
                    <Link to="/cashout">
                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 flex items-center justify-center">
                                <BiMenuAltLeft className="text-4xl text-lime-500"></BiMenuAltLeft>
                            </div>
                            <p className="text-xs font-medium text-center mt-1">Cash Out</p>
                        </div>
                    </Link>
                </div>
                <div className="p-2 w-full border rounded-lg flex justify-center items-center">
                    <Link to="/recharge">
                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 flex items-center justify-center">
                                <BsLightningCharge className="text-4xl text-violet-500 mb-1"></BsLightningCharge>
                            </div>
                            <p className="text-xs font-medium text-center mt-1">Recharge</p>
                        </div>
                    </Link>
                </div>
                <div className="p-2 w-full border rounded-lg flex justify-center items-center">
                    <Link to="/payment/number">
                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 flex items-center justify-center">
                                <BsBagFill className="text-4xl text-blue-400 mb-1"></BsBagFill>
                            </div>
                            <p className="text-xs font-medium text-center mt-1">Payment</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="mt-8 flex justify-around gap-2">
                <div className="p-2 w-full border rounded-lg flex justify-center items-center">
                    <Link to="/add/money">
                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 flex items-center justify-center">
                                <AiOutlineSend className="text-4xl text-teal-500 mb-1"></AiOutlineSend>
                            </div>
                            <p className="text-xs text-center mt-1 font-medium">Add Money</p>
                        </div>
                    </Link>
                </div>
                <div className="p-2 w-full border rounded-lg flex justify-center items-center">
                    <Link to="/pay/bill">
                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 flex items-center justify-center">
                                <BsLightbulb className="text-4xl text-red-500 mb-1"></BsLightbulb>
                            </div>
                            <p className="text-xs text-center mt-1 font-medium">Pay Bill</p>
                        </div>
                    </Link>
                </div>
                <div className="p-2 w-full border rounded-lg flex justify-center items-center">
                    <Link to="/savings">
                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 flex items-center justify-center">
                                <GiChipsBag className="text-4xl text-teal-700 mb-1"></GiChipsBag>
                            </div>
                            <p className="text-xs text-center mt-1 font-medium">Savings</p>
                        </div>
                    </Link>
                </div>
                <div className="p-2 w-full border rounded-lg flex justify-center items-center">
                    <Link to="/apply/loan">
                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 flex items-center justify-center">
                                <FaHandHoldingUsd className="text-4xl text-fuchsia-500 mb-1"></FaHandHoldingUsd>
                            </div>
                            <p className="text-xs text-center mt-1 font-medium">Loan</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PaymentCategory;
