import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import {useState} from 'react';
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import { addPhoneToStore, addtypeToStore } from '../../state/transaction/sendSlice';
import { useDispatch, useSelector } from 'react-redux';

const ForgotPassword = () => {
    const navigate=useNavigate()
    const [phone,setPhone]=useState('');

    const handleStore = (e) => {
        e.preventDefault();
        if(phone){
        navigate('/verify');
        }else{
            alert('enter phone')
        }
    }
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg ">
        <div className="flex h-14  "  style={{ backgroundColor: '#000814' }}>
            <div className="w-1/4">
                <Link to="/main">
                    <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                </Link>
            </div>
            <p className="text-white text-xl mt-4 ">পাসওয়ার্ড রিকোভার</p>
        </div>
        <div className="w-full flex mt-16 pl-2 mb-96">

            <TextField
                 id="filled-basic"
                label="এম-পে একাউন্ট"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LocalPhoneIcon />
                        </InputAdornment>
                    ),
                }}
                variant="filled"
                className="w-full"
                value={phone} onChange={(e) => setPhone(e.target.value)}
            />
            <button className="w-12 bg-violet-500" onClick={handleStore}> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>

        </div>
    </div>
    );
};

export default ForgotPassword;
