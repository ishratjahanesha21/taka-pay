import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ to, icon: Icon, label, iconClass }) => {
  return (
    <div className="p-2 w-20 h-16">
      <Link to={to}>
        <div className="h-10 w-10 shadow-lg border rounded-full flex items-center justify-center">
          <Icon className={`text-2xl mb-1 ${iconClass}`} />
        </div>
        <p className="paymentCategory-text font-medium text-start mt-1">{label}</p>
      </Link>
    </div>
  );
};

export default ServiceItem;
