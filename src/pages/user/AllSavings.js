import React from 'react';
import { formatDate } from '../../utilities/helper';

const AllSavings = ({saving}) => {
    return (
        <div className="border-b m-4 p-2 ">
           <div className="flex justify-between ">
           <p className="text-sm ">{saving.amount} টাকা</p>
            <p className="text-sm ">সময়কাল {saving.durations} বছর </p>
            </div>
           <div className="flex justify-between ">
           <p className="text-xs font-thin text-end mt-5">{formatDate(saving.createdAt)}</p>
            </div>
            
        </div>
    );
};

export default AllSavings;