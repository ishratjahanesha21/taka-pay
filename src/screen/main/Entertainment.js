import React from 'react';
import { Link } from 'react-router-dom';

const Entertainment = () => {
    return (
        <div className="mt-4">
            <div className="ml-2 mr-2  border-b ">
                <div className="mb-2">
                    <div className="flex justify-between mt-2 pl-2 pr-2 ">
                        <p className="text-xs text-start ml-2">Entertainment</p>
                        <p className="text-xs text-start ml-2 "  style={{ color: '#000814' }}>see all</p>
                    </div>
                    <div className="flex gap-4 mt-4 pl-4 pr-2 ">
                    <div className="">
                        <Link to="/railway">
                            <img src="https://yt3.googleusercontent.com/FOLQhHwbae7j-6N8bkn68RMu_3yB91QUm74nvos-c7LfI_G919OAawiCCfPFnzLKpO4vwEYCog=s900-c-k-c0x00ffffff-no-rj" alt="" className="h-10" />
                            <p className="paymentCategory-text  font-medium  text-start mt-1">Bongo</p>
                        </Link>
                    </div>
                    <div className="">
                        <Link to="/railway">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvTJ1Cb3Duy3yaRjAvSTefvfE80T5GNA-dg&s" alt="" className="h-10" />
                            <p className="paymentCategory-text  font-medium  text-start mt-1">Hoichoi</p>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Entertainment;