import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLastThreeMonthsTransactions } from '../../state/user/mytransactionSlice';
import { Link } from 'react-router-dom';
import { LineChart } from '@mui/x-charts';
import Loader from '../loader/Loader';
const TransactionsCharts = () => {
    const dispatch = useDispatch();
    const { transactions, isLoading} = useSelector((state) => state.transactions.transactionsHistry);
    const userToken = useSelector((state) => state.userDetails.loggeduser?.token);
    useEffect(() => {
        if (userToken) {
            dispatch(fetchLastThreeMonthsTransactions({ userToken }));
        }
    }, [dispatch, userToken]);
    const chartData = {
        series: [
            {
                data: transactions ? transactions?.map(transaction => transaction.totalAmount) : [],
            },
        ],
    };
    const xAxis = {
        data: transactions ? transactions.map(transaction => transaction.month) : [],
        scaleType: 'band',
    };

    return (
        <div className='p-4'>
            <h1 className='text-start text-blue-500 text-md'>Transaction Summary</h1>
            <div className="p-4">
                {isLoading ? (
                    <Loader />
                ) : (
                    <LineChart
                        series={chartData.series}
                        xAxis={[xAxis]}
                        height={290}
                        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
                )}
            </div>
            <div className='flex justify-between gap-4 w-3/4 mx-auto '>
                <Link to='/all/transactions'>
                    <button className='bg-blue-500 h-14 border rounded-lg p-4 text-white'>Transactions History</button></Link>
                <Link to="/transactions/list">
                    <button className='bg-teal-500 h-14 border rounded-lg p-4 text-white'>Last 3 months transactions</button>
                </Link>
            </div>
        </div>
    );
};
export default TransactionsCharts;

