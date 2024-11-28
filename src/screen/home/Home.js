import React from 'react';
import banner from '../../images/banner2 (2).jpg';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
           <img src={banner} alt="" className="h-76 w-full"/>
          
           <div >
           <div className="bootom-button">
                    <Link to="/login">
                    <button className="h-10 bg-fuchsia-500 text-white text-xl pl-5 pr-5 text-center border-fuchsia-500 border rounded-lg w-40">Login
                    </button>
                    
                    </Link>
           </div>
           </div>
        </div>
    );
};

export default Home;