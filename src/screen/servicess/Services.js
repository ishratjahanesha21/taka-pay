import React from 'react';
import { Link } from 'react-router-dom';
import { BsLightbulb, BsBagFill, BsBook, BsLightningCharge} from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaInternetExplorer } from "react-icons/fa";
import {IoIosWater} from 'react-icons/io';
import {  MdOutlineLocalGasStation } from 'react-icons/md';
import bikroy from '../../images/bikroy.png';
import daraz from '../../images/daraz.png';
import Header from './Header';
import Category from './Category';
import ServiceItem from './ServiceItem';

const Services = () => {
    return (
        <div className=''>
        <div className="w-full md:w-3/4 lg:w-7/12 xl:w-6/12 2xl:w-5/12 mx-auto h-full">
          <Header title="Services" />
          
          <div className='scrollable-content mt-16'>
            <Category title="Payment">
              <ServiceItem to="/send" icon={() => <p className="text-sm font-thin text-red-500 mb-1 mt-2">ট</p>} label="Send Money" />
              <ServiceItem to="/cashout" icon={BiMenuAltLeft} label="Cash Out" iconClass="text-lime-500" />
              <ServiceItem to="/recharge" icon={BsLightningCharge} label="Recharge" iconClass="text-violet-500" />
              <ServiceItem to="/payment/number" icon={BsBagFill} label="Payment" iconClass="text-blue-400" />
            </Category>
  
            <Category title="Pay Bill">
              <ServiceItem to="/pay/bill" icon={BsLightbulb} label="Electricity" iconClass="text-red-500" />
              <ServiceItem to="/gas" icon={MdOutlineLocalGasStation} label="Gas" iconClass="text-violet-500" />
              <ServiceItem to="/water" icon={IoIosWater} label="Water" iconClass="text-violet-500" />
              <ServiceItem to="/internet" icon={FaInternetExplorer} label="Internet" iconClass="text-violet-500" />
            </Category>
  
            <Category title="Education">
              <ServiceItem to="/education/bill" icon={BsBook} label="Education" iconClass="text-cyan-400" />
            </Category>
  
            <Category title="Shopping">
              <div className="ml-4">
                <Link to="/bikroy">
                  <img src={bikroy} alt="" className="h-10" />
                  <p className="paymentCategory-text font-medium text-start mt-1">বিক্রয় ডট.কম</p>
                </Link>
              </div>
              <div>
                <Link to="/daraz">
                  <img src={daraz} alt="" className="h-10" />
                  <p className="paymentCategory-text font-medium text-start mt-1">দারাজ</p>
                </Link>
              </div>
            </Category>
          </div>
        </div>
      </div>
    );
};

export default Services;