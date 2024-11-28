import { Skeleton } from '@mui/material';
import React from 'react';
import { FiArrowLeft, FiArrowRight, FiEdit } from 'react-icons/fi';
import { BiImageAdd } from 'react-icons/bi';
import { AiOutlineQrcode } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import flag from '../../images/bangladesh.png';
import QRCode from "qrcode"
import { useState } from 'react';
import { addQRToStore } from '../../state/transaction/sendSlice';
import { logout } from '../../state/user/loginSlice';
import { FiLogOut } from "react-icons/fi";
import BottomNavigations from '../../screen/main/BottomNavigation';
const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    const [src, setSrc] = useState('');
    const QRGenrator = (e) => {
        e.preventDefault();
        // QRCode.toDataURL(`https://m-pay.vercel.app/${user?.phone}`).then(setSrc);
        dispatch(addQRToStore(src));
        if (src) {
            navigate("/my/qrcode")
        }
    }
    return (
        <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
            <div className="w-full ">
                <div className="flex h-14  "  style={{ backgroundColor: '#000814' }}>
                    <div className="w-1/4">
                        <Link to="/main">
                            <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                        </Link>
                    </div>
                    <p className="text-white text-xl mt-4 ">My Profile</p>
                </div>
                <div className=" ml-2 mr-2 mt-4  border border-white bg-white shadow-lg rounded-lg">
                    <div className="flex flex-1 items-center justify-center">
                        {
                            user?.avatarLogo ? <Link to="/profile">
                                <img src={user.avatarLogo} alt="" className="h-28 w-28 border rounded-full mt-8 " /></Link> :
                                <Skeleton variant="circular" width={40} height={40} className=" mt-2" />
                        }
                    </div>
                    <div className="flex flex-1 justify-center items-center">
                        {
                            user?.firstname && user?.lastname ? <p className="pt-4 text-gray-900 text-center text-sm font-medium mb-4">{user.firstname} {user.lastname}</p> : <Skeleton variant="text" className=" mt-2" width={80} height={25} />
                        }
                        <img src={flag} alt="" className="w-10 h-10" />
                    </div>
                </div>
                <div className="m-2 h-10 border-b bg-white  flex justify-between mt-10 ">
                        <Link to="/update/name">
                        <FiEdit className="text-2xl mt-1 ml-2" style={{ color: '#000814' }}></FiEdit>
                    </Link>

                    <Link to="/update/name">
                        <p className="text-sm font-medium mt-2 ml-2">Change Name </p>
                    </Link>
                    <Link to="/update/name">
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </Link>
                </div>
                <div className="m-2 h-10 border-b bg-white  flex justify-between mt-4  ">
                    <Link to="/update/name">
                        <BiImageAdd className=" text-2xl mt-2 ml-2" style={{ color: '#000814' }}></BiImageAdd>
                    </Link>
                    <Link to="/update/profile">
                        <p className="text-start text-sm font-medium mt-2 ml-2">Change Photo</p>
                    </Link>
                    <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                </div>
                <div className="m-2 h-10 border-b bg-white  flex justify-between mt-4 " onClick={QRGenrator}>
                    <Link >
                        <AiOutlineQrcode className=" text-2xl mt-2 ml-2" style={{ color: '#000814' }}></AiOutlineQrcode>
                    </Link>
                    <Link >
                        <p className="text-start text-sm font-medium mt-2 ml-2">My QR Code</p>
                    </Link>
                    <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                </div>
            </div>
        </div>
    );
};
export default Profile;