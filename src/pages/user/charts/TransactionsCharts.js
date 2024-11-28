import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';

import {fetchLastThreeMonthsTransactions} from '../../'

const TransactionChart = () => {
    const dispatch = useDispatch();
    const { transactionsHistry, isLoading, error } = useSelector((state) => state.transactions);
    const userToken = useSelector((state) => state.userDetails.loggeduser?.token);

    useEffect(() => {
        if (userToken) {
            dispatch(fetchLastThreeMonthsTransactions({ userToken }));
        }
    }, [dispatch, userToken]);

    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;

    // const data = {
    //     labels: myTransactions.map(t => t.month),
    //     datasets: [
    //         {
    //             label: 'Total Amount',
    //             data: myTransactions.map(t => t.totalAmount),
    //             backgroundColor: 'rgba(75, 192, 192, 0.2)',
    //             borderColor: 'rgba(75, 192, 192, 1)',
    //             borderWidth: 1,
    //         },
    //         {
    //             label: 'Total Transactions',
    //             data: myTransactions.map(t => t.totalTransactions),
    //             backgroundColor: 'rgba(153, 102, 255, 0.2)',
    //             borderColor: 'rgba(153, 102, 255, 1)',
    //             borderWidth: 1,
    //         }
    //     ],
    // };

    // const options = {
    //     responsive: true,
    //     plugins: {
    //         legend: {
    //             position: 'top',
    //         },
    //         tooltip: {
    //             callbacks: {
    //                 label: function(tooltipItem) {
    //                     return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`;
    //                 }
    //             }
    //         }
    //     },
    //     scales: {
    //         x: {
    //             beginAtZero: true
    //         },
    //         y: {
    //             beginAtZero: true
    //         }
    //     }
    // };

    return (
        <div>
            <h1>Transaction Chart</h1>
            {/* <Bar data={data} options={options} /> */}
        </div>
    );
};

export default TransactionChart;
