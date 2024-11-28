import React, { useEffect } from 'react';
import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux';
import { cleanAvatarSuccess, updateAvatar } from '../../state/user/updateavatarSlice';
import { message } from 'antd';

const UpdateProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    const { updateAvatarSuccess, isLoading } = useSelector(
        (state) => state.updatedAvatar
    );
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState();
    const updateProfileDataChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(e.target.files[0]);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    useEffect(() => {
        if (user) {
            setAvatarPreview(user?.avatarLogo);
        }
        if (updateAvatarSuccess) {
            message.success("Update");
            navigate('/main')
            dispatch(cleanAvatarSuccess());
        }
    }, [user, updateAvatarSuccess, dispatch, navigate]);
    const updateProfileSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('avatarLogo', avatar);
        dispatch(updateAvatar({ userToken, data: formData }));
    };
    return (
        <div className="h-screen border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
            <div className="w-full">
                <div className="flex h-14  " style={{ backgroundColor: '#000814' }}>
                    <div className="w-1/4">
                        <Link to="/main">
                            <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                        </Link>
                    </div>
                    <p className="text-white text-xl mt-4 ">Profile</p>
                </div>
                <form action="" className="space-y-6 mt-12  " onSubmit={updateProfileSubmit}>
                    <div className="image-section  flex flex-1 items-center justify-center gap-2 mt-16">
                        <img
                            alt=""
                            src={avatarPreview}
                            className={isLoading ? "h-36 w-36 border-2  rounded-full  avatar-image" : "h-36 w-36 border-2 border-gray-200 rounded-full"}
                        />
                        <label className='border border-gray-200 ' style={{ backgroundColor: '#000814' }}>
                            +
                            <br />
                            <input
                                type="file"
                                name="avatarLogo"
                                multiple
                                onChange={updateProfileDataChange}
                                accept="image/png,image/jpeg,image/webp"
                            />
                        </label>
                    </div>
                    <div className="w-full md:w-3/4 lg:w-7/12 xl:w-6/12 2xl:w-5/12 mx-auto bottom-navigation" style={{ backgroundColor: '#000814' }}>
                        <div className="h-12 " >
                            <button className="text-white pl-2 pr-2 pt-2">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default UpdateProfile;