import React from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from '../../utilities/helper';

const Transaction = ({ transaction }) => {
    const { loggeduser, } = useSelector(
        (state) => state.userDetails
    );
    const user = loggeduser.user;
    return (
        <div className="card col-span-12  md:col-span-3  gap-4 lg:col-span-4  2xl:col-span-3 ">
            <div className="text-start flex justify-between gap-5">

                <div className="flex">
                    <div>
                        {
                            user._id === transaction.senduserId ? <div>
                                <img src={transaction.receiveuserAvatar} alt="" className="h-10 w-10 mt-2" />
                            </div> : null
                        }
                        {
                            user._id === transaction.receiveuserId ? <div>
                                <img src={user?.avatar?.url} alt="" className="h-10 w-10 mt-2" />
                            </div> : null
                        }
                    </div>
                    <div>
                        {
                            user._id === transaction.senduserId ? <div>
                                <p className="text-xs font-thin ml-2 mt-1">{transaction.type}</p>

                                <p className="text-xs font-thin ml-2 mt-1">{transaction.receiverphone}</p>

                            </div> : null
                        }
                        {
                            user._id === transaction.receiveuserId ? <div>
                                <p className="text-xs font-thin ml-2 mt-1">{transaction.receiverType}</p>

                                <p className="text-xs font-thin ml-2 mt-1">{transaction.senderphone}</p>

                            </div> : null
                        }


                        {/* <p className="text-xs font-thin ml-2">{transaction.type}</p> */}
                        {/* {
                            transaction.type === 'Send Money' ? <p className="text-sm  text-red-400 font-thin ml-2">সেন্ড মানি </p> : null
                        } */}
                        {/* {
                            transaction.type === 'Cash Out' ? <p className="text-sm  text-rose-500 font-thin ml-2">ক্যাশ আউট </p> : null
                        } */}
                        {/* {
                            transaction.type === 'Mobile Recharge ' ? <p className="text-sm  text-rose-500 font-thin ml-2">রিচার্জ </p> : null
                        } */}
                        {/* <p className="text-xs font-thin ml-2 mt-1">{transaction.phone}</p> */}
                        <p className="text-xs font-thin ml-2 mt-1">Trans ID : {transaction.tranId}</p>
                    </div>
                </div>
                {/* {
                    transaction.type === 'Send Money' ? <p className="text-sm  text-red-400 font-semibold"> - {transaction.amount}.00 TK</p> : null
                }
                {
                    transaction.type === 'Cash Out' ? <p className="text-sm  text-rose-500 font-semibold"> - {transaction.amount}.00 TK</p> : null
                }
                {
                    transaction.type === 'Mobile Recharge ' ? <p className="text-sm  text-rose-500 font-semibold"> - {transaction.amount}.00 TK</p> : null
                } */}

                <div >
                    {
                        user._id === transaction.senduserId ? <div>
                            <p className="text-xs font-medium mt-2 text-start text-red-500">- {transaction.amount}.00TK</p>

                        </div> : null
                    }
                    {
                        user._id === transaction.receiveuserId ? <div>
                            <p className="text-xs font-medium mt-2 text-start text-green-500">+ {transaction.amount}.00TK</p>

                        </div> : null
                    }
                    <div>
                        <p className="text-xs font-thin text-start mt-5">{formatDate(transaction.createdAt)}</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Transaction;