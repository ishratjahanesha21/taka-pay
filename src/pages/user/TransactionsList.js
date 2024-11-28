import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Loader from '../loader/Loader';
import BottomNavigations from '../../screen/main/BottomNavigation';

const TransactionsList = () => {
    const { transactions, isLoading } = useSelector((state) => state.transactions.transactionsHistry);

    // State to keep track of the current index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle click for next button
    const handleNext = () => {
        if (currentIndex < transactions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Handle click for previous button
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    const previousButtonStyle = {
        color: currentIndex === 0 ? 'black' : 'red',
        cursor: currentIndex === 0 ? 'default' : 'pointer',
        opacity: currentIndex === 0 ? 0.5 : 1,
    };

    const nextButtonStyle = {
        color: currentIndex === transactions.length - 1 ? 'black' : 'red',
        cursor: currentIndex === transactions.length - 1 ? 'default' : 'pointer',
        opacity: currentIndex === transactions.length - 1 ? 0.5 : 1,
    };
    // Return a loading message or a card for the current transaction
    const renderTypes = () => {
        const types = transactions[currentIndex]?.types || {};
        return Object.keys(types).map(type => (
            <div key={type} className='w-full border-b p-2 flex justify-between'>
                <p className='text-sm text-center'>{type}</p>
                <p className='text-sm text-red-500 font-medium text-center'>
                    {types[type].totalAmount}.00
                </p>
            </div>
        ));
    };
    return (
        <div className='h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg'>
            <div className="w-full">
                <div className="w-full flex h-16" style={{ backgroundColor: '#000814' }}>
                    <div className="w-1/4">
                        <Link to="/main">
                            <FiArrowLeft className="text-white text-2xl mt-4 ml-2" />
                        </Link>
                    </div>
                    <p className="text-white text-sm mt-4 ml-8">Transaction Statistics</p>
                </div>
                <div className='w-3/4 mx-auto flex justify-between border-b m-4'>
                    <div>
                        <Link>
                            <p className='text-sm'>
                                Stats
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/transactions/list">
                            <p className='text-sm text-gray-400'>
                                Descriptions
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="w-3/4 mx-auto">
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <div className='w-3/4 mx-auto '>
                            <div className='flex justify-between'>
                                <button
                                    onClick={handlePrevious}
                                    disabled={currentIndex === 0}
                                    style={previousButtonStyle}
                                >
                                    <FiArrowLeft />
                                </button>
                                <p className='text-red-500 font-medium text-sm'>{transactions[currentIndex].month} {transactions[currentIndex].year}</p>
                                <button
                                    onClick={handleNext}
                                    disabled={currentIndex === transactions.length - 1}
                                    style={nextButtonStyle}
                                >
                                    <FiArrowRight />
                                </button>
                            </div>
                            <div className='w-full border-b p-2 flex justify-between mt-4'>
                                <p className='text-sm text-center'>Total amount</p>
                                <p className='text-sm text-red-500 font-medium text-center'>
                                    {transactions[currentIndex].totalAmount}.00
                                </p>
                            </div>
                            <div className='w-full border-b p-2 flex justify-between mt-4'>
                                <p className='text-sm text-center'>Total Transactions</p>
                                <p className='text-sm text-red-500 font-medium text-center'>
                                {transactions[currentIndex].totalTransactions}
                                </p>
                            </div>
                            <div className='mt-4'>
                                {renderTypes()}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default TransactionsList;
