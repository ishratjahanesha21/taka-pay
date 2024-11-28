import React from 'react';
import { } from 'react-icons/bi';
import bikroy from '../../images/bikroy.png';
import ten from '../../images/10.png';
import daraz from '../../images/daraz.png';
import toffee from '../../images/toffee.jpg';
import bdjobs from '../../images/bdjobs.jpg';
import skilljobs from '../../images/skilljobs.png';
import rabbit from '../../images/rabbit.jpg';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '90%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid white',
    height: 400,
    boxShadow: 24,
    p: 4,
};
const SUggestion = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const allShow = () => {
        // message.error("Link Page is Under Construction")
        handleOpen()
    }
    return (
        <div className="ml-2 mr-2  ">
            <div className="mt-4 h-24 border-b">
                <div className="flex justify-between mt-2 pl-2 pr-2 ">
                    <p className="text-xs text-start ml-2">Shopping</p>
                    <p className="text-xs text-start ml-2 "style={{ color: '#000814' }} onClick={allShow}>see all</p>
                </div>
                <div className="flex  mt-2 pl-4 pr-2 mb-2">
                    <div>
                        <Link to="/bikroy">
                            <img src={bikroy} alt="" className="h-10 " />
                            <p className="paymentCategory-text  font-medium  text-start mt-1">বিক্রয় ডট.কম</p>
                        </Link>
                    </div>
                    <div className="ml-4">
                        <Link to="/daraz">
                            <img src={daraz} alt="" className="h-10" />
                            <p className="paymentCategory-text  font-medium  text-start mt-1">দারাজ</p>
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
                    <p className="text-xs text-start ml-2">সাজেশন  </p>
                    <div className="flex  justify-between mt-2 pl-4 pr-2 mb-2">
                        <div>
                            <Link to="/main">
                                <img src={bikroy} alt="" className="h-10 " />
                                <p className="paymentCategory-text  font-medium  text-start">বিক্রয় ডট.কম</p>
                            </Link>
                        </div>
                        <div className="ml-4">
                            <Link to="/main">
                                <img src={ten} alt="" className="h-10 " />
                                <p className="paymentCategory-text  font-medium  text-start">টেন মিনিট স্কুল</p>
                            </Link>
                        </div>
                        <div className="ml-4">
                            <Link to="/main">
                                <img src={daraz} alt="" className="h-10" />
                                <p className="paymentCategory-text  font-medium  text-start">দারাজ</p>
                            </Link>
                        </div>

                    </div>
                    <div className="flex justify-between mt-4 pl-4 pr-2 mb-2">
                        <div>
                            <Link to="/main">
                                <img src={toffee} alt="" className="h-10 " />
                                <p className="paymentCategory-text  font-medium  text-start">টফি</p>
                            </Link>
                        </div>
                        <div className="ml-4">
                            <Link to="/main">
                                <img src={bdjobs} alt="" className="h-10 " />
                                <p className="paymentCategory-text  font-medium  text-start">বিডিজবস</p>
                            </Link>
                        </div>
                        <div className="ml-4">
                            <Link to="/main">
                                <img src={rabbit} alt="" className="h-10" />
                                <p className="paymentCategory-text  font-medium  text-start">Rabbithole</p>
                            </Link>
                        </div>
                       
                    </div>
                    <div className="flex gap-8 mt-4 pl-4 pr-2 mb-2">
                        
                        <div className="">
                            <Link to="/main">
                                <img src={skilljobs} alt="" className="h-10" />
                                <p className="paymentCategory-text  font-medium  text-start">স্কিলজবস</p>
                            </Link>
                        </div>
                        <div className="ml-4">
                            <Link to="/main">
                                {/* <img src={railway} alt="" className="h-10" /> */}
                                <p className="paymentCategory-text  font-medium  text-start">বাংলাদেশ রেলওয়ে</p>
                            </Link>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    );
};

export default SUggestion;