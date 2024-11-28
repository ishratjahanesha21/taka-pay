import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addAmountToStore } from '../../state/transaction/sendSlice';
import { InputAdornment, TextField } from '@mui/material';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';
import CustomKeyboard from '../auth/CustomKeyboard';

const ConfirmCashout = () => {
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    const { receiverphone } = useSelector(
        (state) => state.type.receiverphone
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [amount, setAmount] = useState('');
    const [activeField, setActiveField] = useState('');

    const amountRef = useRef(null);

    useEffect(() => {
        amountRef.current.focus();
        setActiveField('amount');
    }, []);

    const handleTransfer = (e) => {
        e.preventDefault();
        dispatch(addAmountToStore({ amount }));
        navigate('/cash/out/confirm');
    }

    const handleKeyPress = (key) => {
        if (key === 'done') {
            setActiveField('');
        } else if (key === 'backspace') {
            if (activeField === 'amount') {
                setAmount(amount.slice(0, -1));
            }
        } else {
            if (activeField === 'amount') {
                setAmount(amount + key);
            }
        }
    };

    return (
        <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
            <div className="w-full">
                <div className="flex h-16" style={{ backgroundColor: '#000814' }}>
                    <div className="w-1/4">
                        <Link to="/main">
                            <FiArrowLeft className="text-white text-2xl mt-4 ml-2" />
                        </Link>
                    </div>
                    <p className="text-white text-xl mt-4">Cash Out</p>
                </div>
                <div className="border m-2 mt-8">
                    <p className="text-xs text-start m-2">Receiver Account</p>
                    <div className="flex mt-2 mb-2">
                        <BiUserCircle className="h-10 w-12 text-gray-400" />
                        <p className="mt-2 text-sm">{receiverphone}</p>
                    </div>
                </div>
                <div className="border m-2">
                    <div className="flex m-4">
                        <TextField
                             id="filled-basic"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        Tk
                                    </InputAdornment>
                                ),
                                readOnly: true,
                            }}
                            variant="filled"
                            className="w-full"
                            value={amount}
                            inputRef={amountRef}
                            onFocus={() => setActiveField('amount')}
                            // onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <p className="text-sm mb-4">Your balance is {user?.amount}.00 TK</p>
                </div>
                <div className="w-full md:w-3/4 lg:w-7/12 xl:w-6/12 2xl:w-5/12 mx-auto fixed bottom-0" >

                    {
                        amount ? <button className="text-white bg-black w-full h-12 border-t-2 border-black rounded-t-lg" onClick={handleTransfer}>Send {amount}.00</button> : <button disabled className="text-white  w-full h-12 border-t-2 border-gray-100 rounded-t-lg" style={{ backgroundColor: '#edede9' }}>Send</button>
                    }
                    <CustomKeyboard onKeyPress={handleKeyPress} className=" text-gray-900" style={{ backgroundColor: '#edede9' }}/>
                </div>
            </div>
        </div>
    );
};

export default ConfirmCashout;
