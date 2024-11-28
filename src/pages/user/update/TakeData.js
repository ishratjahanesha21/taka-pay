import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const TakeData = () => {
    return (
        <div className='h-screen'>
            <div className="lg:w-5/12 xl:w-4/12 2xl:w-3/12 lg:mx-auto   h-full ">
            <div className="flex h-14" style={{ backgroundColor: '#000814' }}>
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-xl mt-4 ">Update Information</p>
            </div>
            <div className="m-2 bg-white border-white ">
                <p className="text-sm text-start text-gray-500 p-2">আপনার NID এর সামনের ছবি তুলুন </p>
            </div>
            <div className='w-3/4 '>
            <form action="" >
                <div className="data-image-section  flex flex-1 items-center justify-center gap-2 mt-2 ">
                    <img
                        alt=""
                        className="w-3/4 mx-auto  h-36  border-white bg-white "

                    />
                    <label className=''style={{ backgroundColor: '#000814' }}>
                        +
                        <br />
                        <input
                            type="file"
                            name="avatarLogo"
                            multiple
                            accept="image/png,image/jpeg,image/webp"
                        />
                    </label>
                </div>
                <div className="w-full lg:hidden h-12 bg-violet-500 success-btn">
                    <button className="text-white pl-2 pr-2 pt-2 ">পরবর্তী</button>
                </div>
            </form>
            </div>
            <div className="m-2 bg-white border-white ">
                <p className="text-sm text-start text-gray-500 p-2">আপনার NID এর পিছনের ছবি তুলুন</p>
            </div>
           <div className="w-3/4 " >
           <form action="" >
                <div className="data-image-section  flex flex-1 items-center justify-center gap-2 mt-2 ">
                    <img
                        alt=""
                        className="w-3/4 mx-auto  h-36  border-white bg-white "

                    />
                    <label style={{ backgroundColor: '#000814' }}>
                        +
                        <br />
                        <input
                            type="file"
                            name="avatarLogo"
                            multiple
                            accept="image/png,image/jpeg,image/webp"
                        />
                    </label>
                </div>
                <div className="w-full lg:w-3/12 lg:mx-auto fixed bottom-0 " style={{ backgroundColor: '#000814' }}>
                    <div className="h-12 flex items-center justify-center" >
                    <Link to="/set/user/info">
                        <button className="text-white pl-2 pr-2 font-medium">Submit </button>
                        </Link>
                    </div>
                </div>
            </form>
           </div>
        </div>
        </div>
    );
};

export default TakeData;