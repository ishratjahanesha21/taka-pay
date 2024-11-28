import { InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FiArrowLeft, } from "react-icons/fi";

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { errorClean, updateName } from '../../state/user/updateNameSlice';
const UpdateName = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const data = { firstname, lastname }
    const registerSubmit = (e) => {
        e.preventDefault();
        dispatch(updateName({ data, userToken }));
    };
    const { updateNameSuccess } = useSelector(
        (state) => state.updateName
    );
    useEffect(() => {
        if (user) {
            setFirstName(user.firstname)
            setLastName(user.lastname)
        }
        if (updateNameSuccess) {
            navigate('/main');
            dispatch(errorClean());
        }
    }, [updateNameSuccess, navigate, user, dispatch]);
    return (
        <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
            <div className="w-full ">
            <div className=" h-16 flex"style={{ backgroundColor: '#000814' }}>
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-xl mt-4 ">Name</p>
            </div>
            <form action="" className="space-y-6 mt-12" >

                <TextField
                     id="filled-basic"
                    // label="Phone"
                    label="First Name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">

                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                    className="w-3/4 mx-auto"
                    value={firstname} onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                     id="filled-basic"
                    // label="Password"
                    label="Last Name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">

                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                    className="w-3/4 mx-auto"
                    value={lastname} onChange={(e) => setLastName(e.target.value)}
                />
                <div className="w-full md:w-3/4 lg:w-7/12 xl:w-6/12 2xl:w-5/12 mx-auto bottom-navigation" style={{ backgroundColor: '#000814' }}>
                    <div className="h-12 " >
                    
                    <button className="text-white pl-2 pr-2 pt-2" onClick={registerSubmit}>Update</button>
                
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
};
// 01535236956
export default UpdateName;