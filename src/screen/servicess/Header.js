import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const Header = ({ title }) => {
  return (
    <div className="flex h-16" style={{ backgroundColor: '#000814' }}>
      <div className="w-1/4">
        <Link to="/">
          <FiArrowLeft className="text-white text-2xl mt-4 ml-2" />
        </Link>
      </div>
      <p className="text-white text-xl mt-4">{title}</p>
    </div>
  );
};

export default Header;
