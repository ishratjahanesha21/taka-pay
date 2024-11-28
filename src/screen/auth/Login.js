import { InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createLogin } from '../../state/user/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import flag from '../../images/bangladesh.png';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import NoInternet from '../../components/nointernet/NoInternet';
import { TailSpin } from 'react-loader-spinner';

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 400,
    bgcolor: 'background.paper',
    border: '2px solid white',
    boxShadow: 24,
    p: 4,
    '@media (min-width: 600px)': {
        width: '50%',
    },
    '@media (min-width: 960px)': {
        width: 400,
    },
};

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error, loggeduser, isLoading } = useSelector(
        (state) => state.userDetails
    );
    const user = loggeduser?.user;
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("phone", phone);
        myForm.set("password", password);
        if (phone && password) {
            dispatch(createLogin(myForm));
        } else {
            message.error("Enter Phone & Pin");
        }
    };

    useEffect(() => {
        if (user) {
            navigate('/main');
        }
    }, [user, navigate, error]);

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (error) {
            setOpen(true);
        }
    }, [error]);

    return (
        <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto md:shadow-lg">
            <div className="w-full  h-full flex flex-col md:mt-16">
                <NoInternet />
                <div className="justify-center items-center p-8 md:w-3/4 mx-auto">
                    <h1 className="text-center text-3xl font-semibold" style={{ color: '#000814' }}>Quick Pay</h1>
                    <div className="flex items-center justify-between mt-16">
                        <h2 className="text-start text-md font-medium leading-6 text-gray-800 mt-4">Log In</h2>
                    </div>
                    <form className="space-y-4 mt-8 ">
                        <TextField
                            id="phone"
                            label={<Box display="flex" alignItems="center">
                                Phone
                                <img
                                    src={flag}
                                    alt="phone icon"
                                    style={{ width: '28px', height: '28px', marginRight: '8px' }}
                                />
                            </Box>}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start"></InputAdornment>
                                ),
                            }}
                            variant="filled"
                            className="w-full py-3 px-6"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                        <TextField
                            id="password"
                            label="Pin"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start"></InputAdornment>
                                ),
                            }}
                            variant="filled"
                            className="w-full py-3 px-6 mt-4"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
                        <div className='flex justify-between'>
                            <div className="text-start">
                                <Link to="/forgot/password">
                                    <span className="mt-3 text-sm font-medium leading-6">Forgot pin?</span>
                                </Link>
                            </div>
                            <div>
                                <Link to="/account/signup">
                                    <span className="text-sm font-semibold leading-6 text-gray-400">Create a new</span>
                                </Link>
                            </div>
                        </div>
                    </form>
                    <div className="mt-4">
                    {isLoading ? (
                        <button className="font-mono mt-4 w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black" style={{ backgroundColor: '#000814' }}>
                            Please wait ..
                            <TailSpin
                                visible={true}
                                height={24}
                                width={24}
                                color="#ffffff"
                                ariaLabel="tail-spin-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                        </button>
                    ) : (
                        <div>
                           <button  className="font-mono mt-4 w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black" onClick={registerSubmit}>
                                    Login
                                </button>
                        </div>
                    )}
                </div>
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <p className="text-xl text-center mb-4 text-red-500">Error!</p>
                        <p className="text-sm text-center mb-4 text-gray-500">{error}</p>
                        <div className="flex justify-center">
                            <button
                                className="font-mono w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform"
                                style={{ backgroundColor: '#000814' }}
                                onClick={handleClose}
                            >
                                Close
                            </button>
                        </div>
                    </Box>
                </Modal>
                
            </div>
        </div>
    );
};

export default Login;
