import React from 'react';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { BsTicket } from 'react-icons/bs';
import { AiFillInsurance } from 'react-icons/ai';
import { CgGames } from 'react-icons/cg';
import { TbGridDots } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import railway from '../../images/railway.jpg';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { message } from 'antd';
const style = {
    position: 'absolute',
    top: '65%',
    left: '49%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid white',
    height: 400,
    boxShadow: 24,
    p: 4,
};
const Others = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const allShow = () => {
        message.error("Link Page is Under Construction")
    }
    return (
        <div className="mt-4">
            <div className="ml-2 mr-2 border-b ">
                <div className="mb-2">
                    <div className="flex justify-between mt-2 pl-2 pr-2 ">
                        <p className="text-xs text-start ml-2">Tickets</p>
                        <p className="text-xs text-start ml-2 " onClick={handleOpen} style={{ color: '#000814' }}>see all</p>
                    </div>
                    <div className="flex justify-between mt-4 pl-4 pr-2 ">
                    <div className="">
                        <Link to="/railway">
                            <img src={railway} alt="" className="h-10" />
                            <p className="paymentCategory-text  font-medium  text-start mt-1">বাংলাদেশ রেলওয়ে</p>
                        </Link>
                    </div>
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
                    <p className="text-xs text-start ">অন্যান্য সেবাসমূহ </p>
                    <div className="flex justify-between mt-2 pl-4 pr-2 ">
                        <div>
                            <Link to="/main">
                                <BsTicket className="text-3xl text-amber-500  mb-1"></BsTicket>
                                <p className="paymentCategory-text  text-lime-950  text-start">টিকিট </p>
                            </Link>
                        </div>
                        <div className="ml-4">
                            <Link to="/main">
                                <BiSolidDonateHeart className="text-3xl text-lime-500  mb-1"></BiSolidDonateHeart>
                                <p className="paymentCategory-text  text-lime-950  text-start">ডোনেশন</p>
                            </Link>
                        </div>
                        <div className="ml-4">
                            <Link to="/main">
                                <AiFillInsurance className="text-3xl text-violet-500  mb-1"></AiFillInsurance>
                                <p className="paymentCategory-text  text-lime-950  text-start">ইন্সুরেন্স</p>
                            </Link>
                        </div>

                    </div>
                    <div className="flex justify-between mt-4 pl-4 pr-2 ">

                        <div className="">
                            <Link to="/main">
                                <TbGridDots className="text-3xl text-red-500   mb-1"></TbGridDots>
                                <p className="paymentCategory-text  text-lime-950  text-start">এয়ারটেল ফ্লেক্সি প্ল্যান</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/main">
                                <TbGridDots className="text-3xl text-red-500  mb-1"></TbGridDots>
                                <p className="paymentCategory-text  text-lime-950  text-start">রবি ফ্লেক্সি প্ল্যান </p>
                            </Link>
                        </div>
                        <div className="ml-4">
                            <Link to="/main">
                                <TbGridDots className="text-3xl text-yellow-500  mb-1"></TbGridDots>
                                <p className="paymentCategory-text  text-lime-950 text-start"> বিএল  ফ্লেক্সি প্ল্যান </p>
                            </Link>
                        </div>

                    </div>
                    <div className="flex gap-8 mt-4 pl-4 pr-2 ">
                        <div className="">
                            <Link to="/main">
                                <TbGridDots className="text-3xl text-violet-500  mb-1"></TbGridDots>
                                <p className="paymentCategory-text  text-lime-950  text-start"> জিপি  ফ্লেক্সি প্ল্যান </p>
                            </Link>
                        </div>
                        <div className="ml-4">
                            <Link to="/main">
                                <CgGames className="text-3xl text-violet-500   mb-1"></CgGames>
                                <p className="paymentCategory-text  text-lime-950  text-start">গেমস</p>
                            </Link>
                        </div>


                    </div>

                </Box>
            </Modal>
        </div>
    );
};

export default Others;