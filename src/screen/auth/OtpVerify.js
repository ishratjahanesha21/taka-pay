import React, { useState, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { verifyOTP, verifyOTPClean } from '../../state/user/verifyOTPSlice';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TailSpin } from "react-loader-spinner";
import CustomKeyboard from "./CustomKeyboard";

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

const OtpVerify = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [otpString, setOtp] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(false);
    const [activeField, setActiveField] = useState(0); // Track active OTP field
    const phone = localStorage.getItem("phone");
    const password = localStorage.getItem("password");
    const { isLoading, success, errorMessage } = useSelector((state) => state.otpVerification);

    useEffect(() => {
        const savedEndTime = localStorage.getItem("otpEndTime");
        if (savedEndTime) {
            const endTime = new Date(savedEndTime);
            const currentTime = new Date();
            const diff = Math.ceil((endTime - currentTime) / 1000);
            if (diff > 0) {
                setTimer(diff);
                setCanResend(false);
            } else {
                setTimer(0);
                setCanResend(true);
            }
        }
    }, []);

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            setCanResend(true);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleResend = () => {
        const newEndTime = new Date(new Date().getTime() + 60 * 1000);
        localStorage.setItem("otpEndTime", newEndTime);
        setTimer(60);
        setCanResend(false);
    };

    const handleKeyPress = (key) => {
        if (key === 'done') {
            setActiveField(-1);
        } else if (key === 'backspace') {
            handleChange(activeField, '');
            if (activeField > 0) {
                setActiveField(activeField - 1);
            }
        } else if (/^[0-9]$/.test(key)) {
            handleChange(activeField, key);
            if (activeField < otpString.length - 1) {
                setActiveField(activeField + 1);
            }
        }
    };

    const handleChange = (index, value) => {
        if (/^[0-9]$/.test(value) || value === "") {
            const newOtp = [...otpString];
            newOtp[index] = value;
            setOtp(newOtp);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otp = otpString.join("");
        if (otp) {
            dispatch(verifyOTP({ phone, otp, password }));
        }
    };

    useEffect(() => {
        if (success || errorMessage) {
            setOpen(true);  // Open modal on success or error
        }
    }, [success, errorMessage, dispatch]);

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const handleGo = () => {
        handleClose();
        navigate('/account/login');
        dispatch(verifyOTPClean());
    };

    return (
        <div className="flex justify-center h-screen">
            <div className="lg:w-5/12 xl:w-5/12 2xl:w-3/12 lg:border rounded-lg h-full ">
                <div className="lg:w-3/4 mx-auto flex flex-col mt-8">
                    <div className="text-start">
                        <div>
                            <Link to="/">
                                <p className="flex text-sm gap-2" style={{ color: '#000814' }}>
                                    <IoMdArrowBack className="text-xl" />
                                </p>
                            </Link>
                        </div>
                        <div className="pt-8">
                            <p className="text-xl font-mono" style={{ color: '#000814' }}>
                                Verification Code
                            </p>
                            <p className="text-xs pt-2 text-gray-500">
                                We have sent a code to <span style={{ color: '#000814' }}>{phone}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <form className="mt-12 lg:w-3/4 mx-auto" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                            {otpString.map((digit, index) => (
                                <div key={index} className="w-16 h-16">
                                    <input
                                        className="w-12 h-12 flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-md bg-white font-medium focus:bg-gray-50 focus:ring-1 ring-black"
                                        type="text"
                                        maxLength="1"
                                        value={digit}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                        id={`otp-input-${index}`}
                                        style={{ color: digit ? "black" : "black" }}
                                        placeholder="0"
                                        required
                                        readOnly
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <div className="text-start text-sm font-medium text-gray-500">
                                {canResend ? (
                                    <button
                                        onClick={handleResend}
                                        className="text-xs"
                                        style={{ color: '#000814' }}
                                    >
                                        Resend OTP
                                    </button>
                                ) : (
                                    <p className="text-gray-500 text-xs">
                                        Did not receive your OTP <span style={{ color: '#000814' }}>{timer.toString().padStart(2, "0")}</span>
                                    </p>
                                )}
                            </div>

                        </div>
                    </div>
                </form>
            </div>
            <div className="w-full lg:w-3/12 lg:mx-auto fixed bottom-0">
                <div>
                    {isLoading ? (
                        <button className="font-mono mt-4 w-full px-6 py-3 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform flex justify-center items-center border-t rounded-t-lg" style={{ backgroundColor: '#000814' }}>
                            <TailSpin
                                visible={true}
                                height={24}
                                width={24}
                                color="#ffffff"
                                ariaLabel="tail-spin-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                        </button>
                    ) : (
                        <div>
                            <button className="border-t rounded-t-lg font-mono mt-4 w-full px-6 py-3 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform" style={{ backgroundColor: '#000814' }} onClick={handleSubmit}>
                                Verify Account
                            </button>
                        </div>
                    )}
                </div>
                <CustomKeyboard onKeyPress={handleKeyPress} className="bg-white text-gray-900" style={{ backgroundColor: '#edede9' }}/>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {success ? (
                        <>
                            <p className="text-xl text-center mb-4 text-green-500">Success!</p>
                            <p className="text-md text-center mb-4 text-gray-500">OTP verification is successful.</p>
                            <div className="flex justify-center">
                                <button
                                    className="font-mono w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform"
                                    style={{ backgroundColor: '#000814' }}
                                    onClick={handleGo}
                                >
                                    Done
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="text-xl text-center mb-4 text-red-500">Error!</p>
                            <p className="text-sm text-center mb-4 text-gray-500">{errorMessage}</p>
                            <div className="flex justify-center">
                                <button
                                    className="font-mono w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform"
                                    style={{ backgroundColor: '#000814' }}
                                    onClick={handleClose}
                                >
                                    Close
                                </button>
                            </div>
                        </>
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default OtpVerify;
