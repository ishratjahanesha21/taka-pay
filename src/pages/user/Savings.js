import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSavings } from '../../state/user/mySavingsSlice';
import AllSavings from './AllSavings';

const MySavings = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const { savings } = useSelector(state => state.mySavings.mySavings);
    useEffect(() => {
        dispatch(fetchSavings({ userToken }));
    }, [dispatch, userToken]);
    let content;
    if ( savings?.length > 0) {
        content = savings.map(saving => <AllSavings key={saving._id} saving={saving} />)
    }
    return (
        <div>
           <p className="text-sm text-start">My Savings </p>
           {content}
        </div>
    );
};

export default MySavings;