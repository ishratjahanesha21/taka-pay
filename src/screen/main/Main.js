import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsBell } from "react-icons/bs";
import PaymentCategory from "./PaymentCategory";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import "./Main.css";
import avatar from "../../images/man.png";
import NoInternet from "../../components/nointernet/NoInternet";
import { FaCoins } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import TransactionsCharts from "../../pages/user/TransactionsCharts";
import { CiSettings } from "react-icons/ci";
import { fetchtuserDetails } from "../../state/user/userDetailsSlice";
const Main = () => {
  const { loggeduser } = useSelector((state) => state.userDetails);
  const { userdetails,isLoading } = useSelector((state) => state.userdetails);
  const user = loggeduser.user;
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(fetchtuserDetails())
}, [dispatch]);
  return (
    <div className="border rounded-lg lg:w-2/4 2xl:w-5/12 mx-auto shadow-lg">
      <div className="w-full">
        <div className="w-full h-16 flex justify-between " style={{ backgroundColor: "#000814" }}>
          <div className="flex">
            <div className="w-16">
              {user?.avatarLogo ? (
                <Link to="/profile">
                  <img
                    src={user.avatarLogo}
                    alt=""
                    className="h-10 w-10 ml-2 mt-2 absolute border rounded-full"
                    style={{ backgroundColor: "#000814" }}
                  />
                </Link>
              ) : (
                <Link to="/profile">
                  <img
                    src={avatar}
                    alt=""
                    className="p-2 h-10 w-10 ml-2 mt-2 absolute border rounded-full"
                    style={{ backgroundColor: "#000814" }}
                  />
                </Link>
              )}
            </div>
            <div>
              {user?.firstname && user?.lastname ? (
                <p className="mt-2 text-white text-start text-sm font-medium">
                  {user.firstname} {user.lastname}
                </p>
              ) : (
                <Skeleton variant="text" className="mt-2" width={80} height={25} />
              )}
              {user?.phone ? (
                <p className="pt-1 text-start text-xs text-medium font-medium w-28 h-6 text-white rounded-lg">
                  <span className="">{user.phone}</span>
                </p>
              ) : (
                <Skeleton variant="text" className="mt-2" width={126} height={30} />
              )}
            </div>
          </div>
          <div className="flex justify-between mt-4 gap-4 mr-3">
            <Link to="/settings/list">
              <CiSettings className="text-white text-xl"></CiSettings>
            </Link>
            <Link to="/notifications">
              <BsBell className="text-white text-xl"></BsBell>
            </Link>
          </div>
        </div>
        <div className="mt-4 scrollable-content ">
          <div className="mt-4 ml-2 mr-2 payment-category-section flex justify-between p-4  border rounded-lg mb-4">
            <div className="flex items-center gap-4 w-3/4">
              <button className="h-10 w-10 border rounded-full text-white" style={{ backgroundColor: "#000814", border: "#000814" }}>
                ট
              </button>
              <div>
                <p className="text-xs text-start text-gray-900">Balance</p>
                <p className="text-md font-medium text-gray-900 text-start">{user?.amount} TK</p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-3/4 mx-auto items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-1/4">
                      <Link to="/reward">
                        <FaCoins className="text-md" style={{ color: "#000814" }}></FaCoins>
                      </Link>
                    </div>
                    <div className="w-full">
                      <p className="text-xs text-start font-semibold text-gray-500">Reward</p>
                      <p className="text-xs font-medium text-gray-900 text-start">{user?.point}</p>
                    </div>
                  </div>
                  <div className="w-1/4">
                    <Link to="/reward">
                      <p className="text-md font-medium text-gray-900 ml-12 text-end">
                        <IoArrowForward />
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-1/4">
                      <Link to="/reward">
                        <FaCoins className="text-md" style={{ color: "#000814" }}></FaCoins>
                      </Link>
                    </div>
                    <div className="w-full">
                      <p className="text-xs text-start font-semibold text-gray-500">Savings</p>
                      <p className="text-xs font-medium text-gray-900 text-start">1000 TK</p>
                    </div>
                  </div>
                  <div className="w-1/4">
                    <Link>
                      <p className="text-md font-medium text-gray-900 ml-12 text-end">
                        <IoArrowForward />
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NoInternet />
          <PaymentCategory />
          <TransactionsCharts/>

        </div>
      </div>
    </div>
  );
};
export default Main;