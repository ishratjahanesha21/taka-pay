import React from 'react';
import { AiOutlineFileUnknown,AiOutlineClose } from 'react-icons/ai';
import { BiMapPin, BiTransfer } from 'react-icons/bi';
import {  FiArrowRight, FiInfo, FiLogOut, FiSettings } from 'react-icons/fi';
import { MdOfflineShare, MdOutlineDiscount, MdOutlineNotificationsNone } from 'react-icons/md';
import { PiHeadsetDuotone } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../state/user/loginSlice';
import avatar from '../../images/man.png'
const ALlSettingsList = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    return (
       <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
         <div className="w-full">
              <div className=" w-full  bg-white   h-16  flex justify-between ">
                <div className="flex">
                    <div className="w-16">
                        {
                            user?.avatarLogo ? <Link to="/profile">
                                <img src={user.avatarLogo} alt="" className="h-10 w-10 ml-2 mt-2 absolute border rounded-full bg-white border-white" /></Link> :
                                <Link to="/profile">
                                    <img src={avatar} alt="" className="h-10 w-10 ml-2 mt-2 absolute border rounded-full bg-white border-white" /></Link>
                        }
                    </div>
                    
                </div>
                <div className="flex justify-between items-center mr-3">
                   
                    <Link to="/">
                    <AiOutlineClose className="text-2xl ml-5 block " style={{ color: '#000814' }}></AiOutlineClose>
                    </Link>
                   
                </div>
            </div>

            <div className="mt-12 border-b">
                <Link to="/all/transactions">
                    <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between mt-10 ">
                        <BiTransfer className=" text-2xl mt-1 ml-2" style={{ color: '#000814' }}></BiTransfer>
                        <p className="text-sm font-medium mt-2 ml-2">Transactions </p>
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </div></Link>
            </div>
            <div className="mt-2 border-b">
                <Link to="/user/update/info">
                    <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between">
                        <FiInfo className=" text-2xl mt-1 ml-2" style={{ color: '#000814' }}></FiInfo>
                        <p className="text-sm font-medium mt-2 ml-2">Information</p>
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </div></Link>
            </div>
            <div className="mt-2 border-b">
                <Link to="/notifications">
                    <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between">
                        <MdOutlineNotificationsNone className=" text-2xl mt-1 ml-2" style={{ color: '#000814' }}></MdOutlineNotificationsNone>
                        <p className="text-sm font-medium mt-2 ml-2">Notification</p>
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </div></Link>
            </div>
            <div className="mt-2 border-b">
                <Link to="/limit">
                    <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between">
                        <MdOfflineShare className=" text-2xl mt-1 ml-2" style={{ color: '#000814' }}></MdOfflineShare>
                        <p className="text-sm font-medium mt-2 ml-2">Limit </p>
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </div></Link>
            </div>
            <div className="mt-2 border-b">
                <Link to="/">
                    <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between">
                        <BiMapPin className=" text-2xl mt-1 ml-2" style={{ color: '#000814' }}></BiMapPin>
                        <p className="text-sm font-medium mt-2 ml-2">Map</p>
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </div></Link>
            </div>
            <div className="mt-2 border-b">
                <Link to="/cuppon">
                    <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between">
                        <MdOutlineDiscount className=" text-2xl mt-1 ml-2" style={{ color: '#000814' }}></MdOutlineDiscount>
                        <p className="text-sm font-medium mt-2 ml-2">Coupon</p>
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </div></Link>
            </div>
            <div className="mt-2 border-b">
                <Link to="/support">
                    <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between">
                        <PiHeadsetDuotone className=" text-2xl mt-1 ml-2" style={{ color: '#000814' }}></PiHeadsetDuotone>
                        <p className="text-start text-sm font-medium mt-2 ml-2">Support</p>
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </div></Link>
            </div>
            <div className="mt-2 border-b">
                <Link to="/info">
                    <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between">
                        <AiOutlineFileUnknown className=" text-2xl mt-1 ml-2" style={{ color: '#000814' }}></AiOutlineFileUnknown>
                        <p className="text-sm font-medium mt-2 ml-2">About QuickPay</p>
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </div></Link>
            </div>
            <div className="mt-8">
                <div className="m-2 h-12 border  border-black rounded-lg flex justify-between" style={{ backgroundColor: '#000814' }}>
                    <button className="flex justify-center items-center text-sm   w-3/4 text-start  ml-5 " onClick={() => dispatch(logout())} >
                        <FiLogOut className="mr-1 text-md mt-1 text-white font-medium"></FiLogOut>
                        <span className="ml-5 text-white font-medium">
                            Logout</span>
                    </button>
                </div>
            </div>
            
           
        </div>
       </div>
    );
};

export default ALlSettingsList;