import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchtransactions } from '../../state/user/mytransactionSlice';
import Transaction from './Transaction';
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader';

const Transactions = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const { transactions, isError,} = useSelector(state => state.transactions.mytransactions);
    const {isLoading} = useSelector(state => state.transactions);
    useEffect(() => {
        dispatch(fetchtransactions({ userToken }));
    }, [dispatch, userToken]);
    let content;
    if (!isLoading && !isError && transactions?.length > 0) {

        content = transactions.slice(0,3).map(transaction => <Transaction key={transaction._id} transaction={transaction} />)
    }
    return (
        <div className="w-full ">
            <div className="flex justify-between pl-3 pr-3">
                {/* <p className="text-sm font-thin">Transactions</p> */}
                <p className="text-sm font-thin">লেনদেন সমূহ</p>
               <Link to="/all/transactions">
               {/* <p className="text-sm font-semibold text-rose-500">see all</p> */}
               <p className="text-sm font-thin text-rose-500">সব দেখুন</p>
               </Link>
            </div>
           {
            isLoading ? <div>
                  <Loader></Loader>
            </div>: 
            <div className="w-full grid grid-cols-12 mt-5 lg:mt-10 gap-5 pl-3 pr-3">
            {content}
        </div>
           }

        </div>
    );
};

export default Transactions;