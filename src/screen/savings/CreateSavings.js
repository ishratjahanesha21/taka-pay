import React from 'react';
import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createSavings } from '../../state/savings/savingsSlice';
import { useEffect } from 'react';
import { message } from 'antd';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
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
const CreateSavings = () => {
    const { loggeduser, } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const [amount, setAmount] = useState('');
    const [durations, setDuration] = useState('');
    const data=({amount,durations})
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(amount && durations){
            dispatch(createSavings({
                data, userToken
            }));
        }else{
            message.error("জমার ধরন , টাকার পরিমান সিলেক্ট করুন")
        }
    }
    const { successs, errorr } = useSelector(
        (state) => state.savings
    );
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        if (successs) {
            setOpen(true);
            // message.success("সেভিংস ক্রিয়েটেড")
        }if(errorr){
            // message.error(errorr)
            setOpen(true);
        }
    }, [successs,errorr]);
    const handleGo = () => {
        handleClose();
    };
    return (
        <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
            <div className="w-full">
            <div className="flex h-14  "  style={{ backgroundColor: '#000814' }}>
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-xl mt-4 ">Savings </p>
            </div>
            <div className=" m-4">
                <p className="text-start text-xs">সেভিংস স্কিম নির্বাচন করূণ</p>

                <div className=" mt-4 p-2">
                    <p className="text-start text-xs">জমার ধরন</p>
                    <select className="w-full h-12 border border-gray-100 rounded mt-2" value={amount} onChange={(e) => setAmount(e.target.value)}  >
                        <option  className="text-sm">টাকার পরিমান সিলেক্ট করুন</option>
                        <option >500 </option>
                        <option >1000</option>
                        <option >1500 </option>
                        <option >2000 </option>
                    </select>
                </div>
                <div className=" mt-4 p-2">
                    <p className="text-start text-xs">সময়কাল (বছর)</p>
                    <select className="w-full h-12 border border-gray-100  rounded mt-2" value={durations} onChange={(e) => setDuration(e.target.value)}  >
                        <option  >সময়কাল (বছর) সিলেক্ট করুন</option>
                        <option >1</option>
                        <option >2</option>
                        <option >3 </option>
                       
                    </select>
                </div>
            </div>
            <div className="w-full md:w-3/12 mx-auto" style={{ backgroundColor: '#000814' }}>
                    <div className="h-12 flex items-center justify-center" >
                    <Link to="/create/savings">
                    <button className="text-white " onClick={handleSubmit}>Create savings</button>
                </Link>
                    </div>
                </div>
        </div>
        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {successs ? (
                        <>
                            <p className="text-xl text-center mb-4 text-green-500">Success!</p>
                            <p className="text-md text-center mb-4 text-gray-500">savings created .</p>
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
                            <p className="text-sm text-center mb-4 text-gray-500">{errorr}</p>
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

export default CreateSavings;