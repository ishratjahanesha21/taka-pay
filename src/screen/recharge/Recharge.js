import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import { InputAdornment, TextField } from '@mui/material';

const Recharge = () => {
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    return (
       <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
         <div className="w-full ">
            <div className="flex h-14  "  style={{ backgroundColor: '#000814' }}>
                <div className="w-1/4">
                    <Link to="/main" >
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2" ></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-sm mt-5 ">Mobile Recharge</p>
            </div>
            <div className="border rounded ml-2 mr-2 mt-8 p-2 bg-white border-white">
                <p className="text-gray-500 text-start  text-xs mb-4 ">To</p>
                <div className="flex ">
                    <div className="w-full flex mt-6 pl-2 pr-2">

                        <TextField
                             id="filled-basic"
                            label="Wallet Number"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    </InputAdornment>
                                ),
                            }}
                            variant="filled"
                            className="w-full"
                            required
                        />
                        <button className="w-12 bg-gray-500"> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>
                    </div>
                </div>

            </div>
            <div className="border rounded ml-2 mr-2 mt-4 p-2 bg-white border-white ">
                <p className="text-gray-500 text-start  text-xs mb-4 ">My account</p>
                <div className="flex">
                    <div className="w-16">
                        {
                            user?.avatarLogo ? <Link to="/profile">
                                <img src={user.avatarLogo} alt="" className="h-10 w-10 ml-2 mt-2 absolute border rounded-full bg-white border-white" /></Link> :
                                <Skeleton variant="text" className=" mt-2" width={10} height={10} />
                        }
                    </div>
                    <div>
                        {
                            user?.firstname && user?.lastname ? <p className="mt-2 text-gray-500 text-start text-xs font-medium">{user.firstname} {user.lastname}</p> : <Skeleton variant="text" className=" mt-2" width={80} height={25} />
                        }
                        {
                            user?.amount ? <p className="text-start text-gray-500 text-xs font-medium w-32 bg-white rounded-lg mt-1">ট <span className="">{user.amount}.00</span></p> : <Skeleton variant="text" className=" mt-2" width={126} height={30} />
                        }
                    </div>
                </div>

            </div>
        </div>
       </div>
    );
};
export default Recharge;