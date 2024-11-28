import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { addPhoneToStore, addtypeToStore } from '../../state/transaction/sendSlice';
import { useDispatch, useSelector } from 'react-redux';
import { takeAgentNumber } from '../../state/transaction/agentNumberSlice';
import CustomKeyboard from '../auth/CustomKeyboard';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TailSpin } from 'react-loader-spinner';
import flag from '../../images/bangladesh.png';
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
const Cashout = () => {
    const { loggeduser } = useSelector((state) => state.userDetails);
    const user = loggeduser.user;
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [receiverphone, setPhone] = useState('');
    const senderphone = user.phone;
    const type = 'Cash Out';
    const receiverType = "Received Money";
    const data = { receiverphone };
    const [activeField, setActiveField] = useState('');

    const receiverphoneRef = useRef(null);

    useEffect(() => {
        receiverphoneRef.current.focus();
        setActiveField('receiverphone');
    }, []);

    const handleKeyPress = (key) => {
        if (key === 'done') {
            setActiveField('');
        } else if (key === 'backspace') {
            if (activeField === 'receiverphone') {
                setPhone(receiverphone.slice(0, -1));
            }
        } else {
            if (activeField === 'receiverphone') {
                setPhone(receiverphone + key);
            }
        }
    };

    const handleStore = (e) => {
        e.preventDefault();
        if (receiverphone) {
            dispatch(takeAgentNumber({ data, userToken }));
            dispatch(addPhoneToStore({ receiverphone, senderphone }));
            dispatch(addtypeToStore({ type, receiverType }));
        }
    };

    const { success, errorr, isLoading } = useSelector((state) => state.takeAgentNumber);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        if (success) {
            navigate('/cash/out/money');
        }
        if (errorr) {
            setOpen(true);
        }
    }, [success, navigate, errorr]);

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
                <div className="w-full flex mt-16 pl-2 pr-2">
                    <TextField
                        id="filled-basic"
                        label={<Box display="flex" alignItems="center">
                            Phone
                            <img
                                src={flag}
                                alt="phone icon"
                                style={{ width: '28px', height: '28px', marginRight: '8px' }}
                            />

                        </Box>}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                </InputAdornment>
                            ),
                            readOnly: true,
                        }}
                        variant="filled"
                        className="w-full"
                        value={receiverphone}
                        inputRef={receiverphoneRef}
                        onFocus={() => setActiveField('receiverphone')}
                    />
                </div>
                <div>
                    <p className="text-start text-xs" style={{ margin: '8px', color: '#B0BEC5' }}>Enter 11 digit agent number</p>
                    <button className='w-11/12  h-12 mt-4 text-gray-900 font-semibold border border-gray-200 rounded-lg' >Scan QR</button>
                </div>


                <div className="w-full md:w-3/4 lg:w-7/12 xl:w-6/12 2xl:w-5/12 mx-auto fixed bottom-0">

                    {isLoading ? (
                        <button className="text-white bg-black w-full
                         h-12 border-t-2 border-black rounded-t-lg flex justify-center items-center" ><TailSpin
                                visible={true}
                                height={24}
                                width={24}
                                color="#ffffff"
                                ariaLabel="tail-spin-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            /></button>
                    ) : (
                        // <button className="text-white bg-black w-full h-12 border-t-2 border-black rounded-t-lg" onClick={handleStore}>Proceed</button>
                        <div>
                            {receiverphone.length === 11 ? (
                                <button className="text-white bg-black w-full h-12 border-t-2 border-gray-100 rounded-t-lg" onClick={handleStore}>
                                    Proceed
                                </button>
                            ) : (
                                <button className="text-white  w-full h-12 border-t-2 border-gray-100 rounded-t-lg" style={{ backgroundColor: '#edede9' }} disabled onClick={handleStore}>
                                    Proceed
                                </button>
                            )}</div>
                    )}
                    <CustomKeyboard onKeyPress={handleKeyPress} className=" text-gray-900" style={{ backgroundColor: '#edede9' }} />
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p className="text-xl text-start mb-4 text-red-500">Error!</p>
                    <p className="text-sm text-start mb-4 text-gray-500">This is not agent number</p>
                    <div className="flex justify-center">
                        <button
                            className="font-mono w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform"
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

export default Cashout;
