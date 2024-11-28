import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOutTransactions } from '../../state/user/mytransactionSlice';
import AllTransaction from './AllTransaction';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Loader from '../loader/Loader';
import Alert from 'antd/es/alert/Alert';

const OutTransactions = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const { transactions } = useSelector(state => state.transactions.myOutTransactions);
    const { isLoading } = useSelector(state => state.transactions);
    useEffect(() => {
        dispatch(fetchOutTransactions({ userToken }));
    }, [dispatch, userToken]);
    let content;
    if(transactions?.length <= 0){
        content=<div className="w-full ">
            <Alert message="You have no transactions " type="error"className="w-full" />
        </div>
    }
    if (!isLoading && transactions?.length > 0) {
        content = transactions.map(transaction => <AllTransaction key={transaction._id} transaction={transaction} />)
    }
    return (
       <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
         <div className="">
            <div className="w-full flex h-16" style={{ backgroundColor: '#000814' }}>
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-8">Transactions</p>
            </div>
            <div className="flex justify-between mt-8 ml-4 mr-4">
                <Link to="/all/transactions">
                    <button className="h-6 w-12 text-gray-900 leading-6 font-semibold border border-gray-200 rounded text-xs">All</button>
                </Link>
                <div className="flex gap-2">
                    <Link to="/all/in/transactions">
                        <button className="text-xs h-6 w-12 text-gray-900 leading-6 font-semibold  border  border-gray-200 rounded">
                        In</button>
                    </Link>

                    <Link to="/all/out/transactions">
                        <button className="text-xs h-6 w-12 text-gray-900 leading-6 font-semibold  border  border-gray-200 rounded">
                        Out </button>
                    </Link>
                </div>

            </div>
            {
                isLoading ? <div className="">
                    <Loader ></Loader>
                </div> :
                   <div className='p-2 scrollable-content'>
                   {content}
               </div>

            }
        </div>
       </div>
    );
};

export default OutTransactions;