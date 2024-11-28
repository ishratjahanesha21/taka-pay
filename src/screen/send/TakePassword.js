import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addPasswordToStore } from '../../state/transaction/sendSlice';
import { InputAdornment, TextField } from '@mui/material';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { createTakePassword } from '../../state/transaction/takePasswordSlice';
import { message } from 'antd';
const TakePassword = () => {
    const dispatch = useDispatch();
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const { success, errorr } = useSelector(
        (state) => state.takePassword
    );
    const navigate = useNavigate();
    const { receiverphone, } = useSelector(state => state.type.receiverphone);
    const { amount } = useSelector(state => state.type.amount);
    const [password, setPass] = useState();
    const data = { password }
    const handleTransfer = (e) => {
        e.preventDefault();
        if (password) {
            dispatch(createTakePassword({
                data, userToken
            }));
            // dispatch(addPasswordToStore({ password }))
        }
    }

    useEffect(() => {
        if (success) {
            navigate('/confirm/sendmoney');
        } if (errorr) {
            message.error("Please Use Correct Pin")
        }
    }, [success, navigate, errorr]);
    return (
        <div className="h-screen">
            <div className="lg:w-5/12 xl:w-5/12 2xl:w-3/12 lg:mx-auto   h-full ">
                <div className="flex  h-16 " style={{ backgroundColor: '#000814' }}>
                    <div className="w-1/4">
                        <Link to="/main">
                            <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                        </Link>
                    </div>
                    <p className="text-white text-xl mt-4 ">Send Money</p>
                </div>
                <div className="mt-6 w-full pl-2 pr-2">
                    <div className="bg-gray-100 h-20 border rounded-lg">
                        <p className="text-start text-sm pt-3 ml-3">Receiver Account</p>
                        <div className="flex ml-14">
                            <BiUserCircle className="h-10 w-12 text-gray-400 "></BiUserCircle>
                            <p className="mt-2 text-sm">{receiverphone}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 w-full pl-2 pr-2 ">
                    <div className="flex justify-between bg-gray-100 h-20 border rounded-lg">
                        <div className="mt-4">
                            <p className="text-sm ml-3 ">Amount</p>
                            <p className="text-xs ml-3 mt-2">TK {amount}.00</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm ml-3 ">Charge</p>
                            <p className="text-xs ml-3 mt-2">TK 00</p>
                        </div>
                        <div className="mt-4 mr-6">
                            <p className="text-sm ml-3 ">Total</p>
                            <p className="text-xs ml-3 mt-2">TK {amount}.00</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex mt-16 pl-2 pr-2 mb-96">
                    <TextField
                         id="filled-basic"
                        label="Pin"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOpenIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="filled"
                        className="w-full"
                        value={password} onChange={(e) => setPass(e.target.value)}
                    />
                    {
                        password ? <button className='w-12 bg-violet-500' onClick={handleTransfer}> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button> : <button className='w-12 bg-gray-500' onClick={handleTransfer} disabled> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>
                    }
                </div>
            </div>
        </div>
    );
};
export default TakePassword;