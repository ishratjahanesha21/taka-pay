import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoneToStore, addtypeToStore, clearStore } from '../../state/transaction/sendSlice';
import { AiOutlineScan } from "react-icons/ai";
import { message } from 'antd';
import { useEffect } from 'react';
import { createTakeNumber } from '../../state/transaction/takeNumberSlice';
const SendMoney = () => {
    const { loggeduser, } = useSelector(
        (state) => state.userDetails
    );
    const user = loggeduser.user;
    const userToken = loggeduser.token;
    const { success, errorr } = useSelector(
        (state) => state.takeReciverNumber
    );
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [receiverphone, setPhone] = useState('');
    const senderphone = user.phone
    const type = 'Send Money';
    const receiverType = "Received Money";
    const data = { receiverphone }
    const handleStore = (e) => {
        e.preventDefault();
        // if (receiverphone) {
        //     dispatch(createTakeNumber({
        //         data, userToken
        //     }));
        //     dispatch(addPhoneToStore({ receiverphone, senderphone }));
        //     dispatch(addtypeToStore({ type, receiverType }));
        // }
        // else {
        //     message.error("নাম্বার প্রদান করুণ")
        // }
        message.error("সেন্ড মানি সম্ভব না")
    }
    useEffect(() => {
        if (success) {
            navigate('/sendmoney');
        } if (errorr) {
            message.error("এই নাম্বারে সেন্ড মানি সম্ভব না")
        }
    }, [success, navigate, errorr]);

    const handleBack = (e) => {
        dispatch(clearStore());
    }
    return (
        <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
            <div className="w-full ">
            <div>
                <div className="flex h-14  "  style={{ backgroundColor: '#000814' }}>
                <div className="w-1/4">
                    <Link to="/main" onClick={handleBack}>
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2" ></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4">Send Money</p>
            </div>
            <div className="w-full flex mt-16 pl-2 pr-2">
                <TextField
                     id="filled-basic"
                    label="Account Number"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocalPhoneIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                    className="w-full"
                    value={receiverphone} onChange={(e) => setPhone(e.target.value)}
                    required
                />
                {
                    receiverphone.length === 11 && receiverphone !== user?.phone ? <button className="bg-violet-500 w-12" onClick={handleStore}> <FiArrowRight className="text-white text-2xl ml-2"></FiArrowRight></button> : <button className="w-12 bg-gray-500" disabled onClick={handleStore}> <FiArrowRight className="text-white text-2xl ml-2"></FiArrowRight></button>
                }
            </div>
            <p className="text-start text-xs m-2 text-gray-400">Enter 11 digit personal account number</p>
            <button className="flex  items-center justify-center gap-4 h-8 w-3/4 mx-auto border border-violet-500 mt-8 rounded-lg text-xs p-1">
                <AiOutlineScan className="text-violet-600 text-xl"></AiOutlineScan> Tap to scan QR code</button>
            </div>
        </div>
        </div>
    );
};
export default SendMoney;