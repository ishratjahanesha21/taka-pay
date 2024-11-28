import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addPasswordToStore } from '../../state/transaction/sendSlice';
import { TextField, InputAdornment } from '@mui/material';
import { FiArrowLeft } from 'react-icons/fi';
import { createTakePassword } from '../../state/transaction/takePasswordSlice';
import { BiUserCircle } from 'react-icons/bi';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CustomKeyboard from '../auth/CustomKeyboard';

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 400,
    bgcolor: 'background.paper',
    border: '2px solid white',
    boxShadow: 24,
    p: 4,
    '@media (min-width: 600px)': {
        width: '50%',
    },
    '@media (min-width: 960px)': {
        width: 400,
    },
};

const CashoutPinPage = () => {
    const dispatch = useDispatch();
    const { loggeduser } = useSelector((state) => state.userDetails);
    const userToken = loggeduser.token;
    const { success, errorr } = useSelector((state) => state.takePassword);
    const { receiverphone } = useSelector((state) => state.takeAgentNumber.number);
    const passwordRef = useRef(null);
    const { amount } = useSelector(state => state.type.amount);
    const navigate = useNavigate();
    const [password, setPass] = useState(''); // Initialize with an empty string
    const data = { password };
    const [activeField, setActiveField] = useState('');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        passwordRef.current.focus();
        setActiveField('password');
    }, []);

    const handleKeyPress = (key) => {
        if (key === 'done') {
            setActiveField('');
        } else if (key === 'backspace') {
            if (activeField === 'password') {
                setPass(password.slice(0, -1));
            }
        } else {
            if (activeField === 'password') {
                setPass(password + key);
            }
        }
    };

    const handleTransfer = (e) => {
        e.preventDefault();
        if (password) {
            dispatch(createTakePassword({ data, userToken }));
            dispatch(addPasswordToStore({ password }));
        }
    };

    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (success) {
            navigate('/confirm/cashout');
        } if (errorr) {
            setOpen(true);
        }
    }, [success, navigate, errorr]);

    return (
        <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
            <div className="w-full">
                <div className="flex h-14" style={{ backgroundColor: '#000814' }}>
                    <div className="w-1/4">
                        <Link to="/main">
                            <FiArrowLeft className="text-white text-2xl mt-2 ml-2" />
                        </Link>
                    </div>
                    <p className="text-white text-xl mt-2 ml-5">Cash Out</p>
                </div>
                <div className="mt-6 w-full pl-2 pr-2">
                    <div className="bg-gray-100 h-20 border rounded-lg">
                        <p className="text-start text-sm pt-3 ml-3">প্রাপক</p>
                        <div className="flex ml-14">
                            <BiUserCircle className="h-10 w-12 text-gray-400" />
                            <p className="mt-2 text-sm">{receiverphone}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 w-full pl-2 pr-2">
                    <div className="flex justify-between bg-gray-100 h-20 border rounded-lg">
                        <div className="mt-4">
                            <p className="text-sm ml-3">পরিমান</p>
                            <p className="text-xs ml-3 mt-2">TK {amount}.00</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm ml-3">চার্জ</p>
                            <p className="text-xs ml-3 mt-2">TK 00</p>
                        </div>
                        <div className="mt-4 mr-6">
                            <p className="text-sm ml-3">সর্বমোট</p>
                            <p className="text-xs ml-3 mt-2">TK {amount}.00</p>
                        </div>
                    </div>
                </div>
                <div className="flex m-2 lg:mb-44">
                    <TextField
                        id="filled-basic"
                        label="Pin"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    {/* <LockOpenIcon /> */}
                                </InputAdornment>
                            ),
                            readOnly: true,
                        }}
                        variant="filled"
                        className="w-full"
                        value={password}
                        inputRef={passwordRef}
                        onFocus={() => setActiveField('password')}
                    />
                </div>
                <div className="w-full md:w-3/4 lg:w-7/12 xl:w-6/12 2xl:w-5/12 mx-auto fixed bottom-0 bg-white text-black">
                  
                    {
                        password.length===5 ? <button className="text-white bg-black w-full h-12 border-t-2 border-black rounded-t-lg" onClick={handleTransfer}>Confirm {amount}.00</button> : <button className="text-white  w-full h-12 border-t-2 border-gray-100 rounded-t-lg" style={{ backgroundColor: '#edede9' }} onClick={handleTransfer}>Confirm</button>
                    }
                      <CustomKeyboard onKeyPress={handleKeyPress}  className=" text-gray-900" style={{ backgroundColor: '#edede9' }}/>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p className="text-xl text-start  mb-4 text-red-500">Error!</p>
                    <p className="text-sm text-start mb-4 text-gray-500">{errorr}</p>
                    <div className="flex justify-center">
                        <button
                            className="font-mono px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform"
                            style={{ backgroundColor: '#000814' }}
                            onClick={handleClose}
                        >
                            Close
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default CashoutPinPage;
