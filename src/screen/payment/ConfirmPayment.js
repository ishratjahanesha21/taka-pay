import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearStore } from '../../state/transaction/sendSlice';
import { BiUserCircle } from 'react-icons/bi';
import { FiArrowLeft } from 'react-icons/fi';
import { createPayment } from '../../state/transaction/paymentSlice';

const ConfirmPayment = () => {
    const dispatch = useDispatch();
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const navigate = useNavigate();
    const { type, receiverType } = useSelector(state => state.type.type);
    const { receiverphone, senderphone } = useSelector(state => state.type.receiverphone);
    const { amount } = useSelector(state => state.type.amount);
    const { password } = useSelector(state => state.type.password);
    const data = { receiverphone, type, amount, receiverType, senderphone, password }
    const handleTransfer = (e) => {
        e.preventDefault();
        dispatch(createPayment({
            data, userToken
        }));
        dispatch(clearStore());
        navigate('/payment/success');
    }
    return (
        <div className="h-screen">
            <div className="lg:w-5/12 xl:w-4/12 2xl:w-3/12 lg:mx-auto   h-full ">
                <div className="flex  h-16 " style={{ backgroundColor: '#000814' }}>
                    <div className="w-1/4">
                        <Link to="/main">
                            <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                        </Link>
                    </div>
                    <p className="text-white text-xl mt-4 ">Payment</p>
                </div>
                <div className="mt-6 w-full pl-2 pr-2">
                    <div className="bg-gray-100 h-20 border rounded-lg">
                        <p className="text-start text-sm pt-3 ml-3">প্রাপক</p>
                        <div className="flex ml-14">
                            <BiUserCircle className="h-10 w-12 text-gray-400 "></BiUserCircle>
                            <p className="mt-2 text-sm">{receiverphone}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 w-full pl-2 pr-2 ">
                    <div className="flex justify-between bg-gray-100 h-20 border rounded-lg">
                        <div className="mt-4">
                            <p className="text-sm ml-3 ">পরিমান</p>
                            <p className="text-xs ml-3 mt-2">TK {amount}.00</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm ml-3 ">চার্জ</p>
                            <p className="text-xs ml-3 mt-2">TK 00</p>
                        </div>
                        <div className="mt-4 mr-6">
                            <p className="text-sm ml-3 ">সর্বমোট</p>
                            <p className="text-xs ml-3 mt-2">TK {amount}.00</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:hidden mx-auto h-24 bg-violet-500 confirm-btn" onClick={handleTransfer}>
                    <button className="text-white pl-2 pr-2 pt-8 ">পরবর্তী</button>
                </div>
                <div className="lg:w-5/12 xl:w-1/4 2xl:w-1/4 bg-violet-500 absolute bottom-0 " onClick={handleTransfer}>
                    <button className="text-white pl-2 pr-2 pt-2 mt-4">পরবর্তী</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPayment;