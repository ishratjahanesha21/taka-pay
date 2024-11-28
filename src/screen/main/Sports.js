import React from 'react';
import { Link } from 'react-router-dom';

const Sports = () => {
    return (
        <div className="mt-4">
        <div className="ml-2 mr-2 border-b">
            <div className="mb-2">
                <div className="flex justify-between mt-2 pl-2 pr-2 ">
                    <p className="text-xs text-start ml-2">Sports</p>
                    <p className="text-xs text-start ml-2 "  style={{ color: '#000814' }}>see all</p>
                </div>
                <div className="flex gap-4 mt-4 pl-4 pr-2 ">
                <div className="">
                    <Link to="/railway">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY3Toosti--acd_5rRv6yfYVsuqdzndJnR2Q&s" alt="" className="h-10" />
                        <p className="paymentCategory-text  font-medium  text-start mt-1">Rabbithole</p>
                    </Link>
                </div>
                <div className="">
                    <Link to="/railway">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYyWNgy243Jp7Yy4_7g_GpyQcWl5HmKSGVLQ&s" alt="" className="h-10" />
                        <p className="paymentCategory-text  font-medium  text-start mt-1">Tsports</p>
                    </Link>
                </div>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Sports;