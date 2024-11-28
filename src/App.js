import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screen/auth/Login';
import Signup from './screen/auth/Signup';
import Main from './screen/main/Main';
import SendMoney from './screen/send/SendMoney';
import AllTransactions from './pages/user/AllTransactions';
import TransferMoney from './screen/send/TransferMoney';
import Success from './screen/send/Success';
import Cashout from './screen/cashout/Cashout';
import ConfirmCashout from './screen/cashout/ConfirmCashout';
import PrivateRoute from './pages/privateroute/PrivateRoute';
import Settings from './screen/settings/Settings';
import UpdateName from './screen/update/UpdateName';
import UpdateInfo from './screen/update/UpdateInfo';
import PreLoader from './pages/loader/PreLoader';
import CashoutPinPage from './screen/cashout/CashoutPinPage';
import ForgotPassword from './screen/auth/ForgotPassword';
import OtpVerify from './screen/auth/OtpVerify';
import Reward from './pages/user/Reward';
import TakePassword from './screen/send/TakePassword';
import ConfirmSendMoney from './screen/send/ConfirmSendMoney';
import Profile from './pages/user/Profile';
import QRCode from './pages/user/QRCode';
import Loan from './screen/loan/Loan';
import Savings from './screen/savings/Savings';
import Confirm from './screen/cashout/Confirm';
import CashOutSuccess from './screen/cashout/Success';
import PaymentNumber from './screen/payment/PaymentNumber';
import Paymentamount from './screen/payment/Paymentamount';
import PaymentPassword from './screen/payment/PaymentPassword';
import ConfirmPayment from './screen/payment/ConfirmPayment';
import PaymentSuccess from './screen/payment/PaymentSuccess';
import Support from './pages/support/Support';
import Cuppon from './pages/cuppon/Cuppon';
import Info from './pages/trustpay/Info';
import CreateSavings from './screen/savings/CreateSavings';
import UpdateProfile from './pages/user/UpdateProfile';
import UpdateData from './pages/user/update/UpdateData';
import Recharge from './screen/recharge/Recharge';
import AddMoney from './screen/addmoney/AddMoney';
import PayBill from './screen/paybill/PayBill';
import Education from './screen/education/Education';
import TakeData from './pages/user/update/TakeData';
import Railway from './screen/suggestions/Railway';
import Daraz from './screen/suggestions/Daraz';
import Bikroy from './screen/suggestions/Bikroy';
import TenSchools from './screen/suggestions/TenSchools';
import ALlSettingsList from './screen/settings/ALlSettingsList';
import OutTransactions from './pages/user/OutTransactions';
import InTransactions from './pages/user/InTransactions';
import Limit from './screen/limit/Limit';
import MonthlyLimit from './screen/limit/MonthlyLimit';
import Offer from './components/Offer';
import PriyoNumber from './components/PriyoNumber';
import Ticket from './components/Ticket';
import Donation from './components/Donation';
import Insurance from './components/Insurance';
import Games from './components/Games';
import io from 'socket.io-client';
import Services from './screen/servicess/Services';
import Notifications from './screen/notifications/Notifications';
import TransactionsCharts from './pages/user/TransactionsCharts';
import TransactionsList from './pages/user/TransactionsList';
const socket = io('https://quick-pay-96uq.onrender.com', {
  transports: ['websocket', 'polling']
});
// const socket = io('http://localhost:5000', {
//   transports: ['websocket', 'polling']
// });
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  })
  useEffect(() => {
    // Log when socket connects
    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    // Log any connection errors
    socket.on('connect_error', (error) => {
      console.log('WebSocket connection error:', error);
    });

    // Subscribe to new-notification event
    socket.on('new-notification', (notification) => {
      console.log('Received new notification:', notification);
      showBrowserNotification(notification.message);
    });

    // Log when socket disconnects
    socket.on('disconnect', (reason) => {
      console.log('Disconnected from WebSocket server:', reason);
    });

    // Cleanup function to remove the event listeners
    return () => {
      socket.off('connect');
      socket.off('connect_error');
      socket.off('new-notification');
      socket.off('disconnect');
    };
  }, []);

  const showBrowserNotification = (message) => {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notifications");
      return;
    }

    if (Notification.permission === "granted") {
      new Notification("New Notification", { body: message });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("New Notification", { body: message });
        }
      });
    }
  };
  return (
    <div>
      {loading ? <div>
        <PreLoader></PreLoader>
      </div> : <div className="App">
        <BrowserRouter>
          <Routes >
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/home" element={<Login></Login>}></Route>
            <Route path="/account/login" element={<Login></Login>}></Route>
            <Route path="/account/signup" element={<Signup></Signup>}></Route>
            <Route path="/verify/otp" element={<OtpVerify></OtpVerify>}></Route>
            <Route path="/main" element={<PrivateRoute><Main></Main></PrivateRoute>}></Route>
            {/* sendmoney */}
            <Route path="/send" element={<PrivateRoute><SendMoney></SendMoney></PrivateRoute>}></Route>
            <Route path="/sendmoney" element={<PrivateRoute><TransferMoney></TransferMoney></PrivateRoute>}></Route>
            <Route path="/confirm/password" element={<PrivateRoute><TakePassword></TakePassword></PrivateRoute>}></Route>
            <Route path="/confirm/sendmoney" element={<PrivateRoute><ConfirmSendMoney></ConfirmSendMoney></PrivateRoute>}></Route>
            <Route path="/success" element={<PrivateRoute><Success></Success></PrivateRoute>}></Route>
            {/* cashout */}
            <Route path="/cashout" element={<PrivateRoute><Cashout></Cashout></PrivateRoute>}></Route>
            <Route path="/cash/out/money" element={<PrivateRoute><ConfirmCashout></ConfirmCashout></PrivateRoute>}></Route>
            <Route path="/cash/out/confirm" element={<PrivateRoute><CashoutPinPage></CashoutPinPage></PrivateRoute>}></Route>
            <Route path="/confirm/cashout" element={<PrivateRoute><Confirm></Confirm></PrivateRoute>}></Route>
            <Route path="/cashout/success" element={<PrivateRoute><CashOutSuccess></CashOutSuccess></PrivateRoute>}></Route>

            {/* recharge */}
            <Route path="/recharge" element={<PrivateRoute> <Recharge></Recharge> </PrivateRoute>}></Route>
            {/* add money */}
            <Route path="/add/money" element={<PrivateRoute> <AddMoney></AddMoney> </PrivateRoute>}></Route>
            {/* pay bill */}
            <Route path="/pay/bill" element={<PrivateRoute> <PayBill></PayBill> </PrivateRoute>}></Route>
            {/* education */}
            <Route path="/education/bill" element={<PrivateRoute> <Education></Education> </PrivateRoute>}></Route>
            {/* payment */}
            <Route path="/payment/number" element={<PrivateRoute><PaymentNumber></PaymentNumber></PrivateRoute>}></Route>
            <Route path="/payment/amount" element={<PrivateRoute><Paymentamount></Paymentamount></PrivateRoute>}></Route>
            <Route path="/payment/password" element={<PrivateRoute><PaymentPassword></PaymentPassword></PrivateRoute>}></Route>
            <Route path="/confirm/payment" element={<PrivateRoute><ConfirmPayment></ConfirmPayment></PrivateRoute>}></Route>
            <Route path="/payment/success" element={<PrivateRoute><PaymentSuccess></PaymentSuccess></PrivateRoute>}></Route>
            {/* transactions */}
            <Route path="/all/transactions" element={<PrivateRoute><AllTransactions></AllTransactions></PrivateRoute>}></Route>
            <Route path="/all/out/transactions" element={<PrivateRoute><OutTransactions></OutTransactions></PrivateRoute>}></Route>
            <Route path="/all/in/transactions" element={<PrivateRoute><InTransactions></InTransactions></PrivateRoute>}></Route>
            <Route path="/transactions" element={<PrivateRoute><TransactionsCharts/></PrivateRoute>}></Route>
            <Route path="/transactions/list" element={<PrivateRoute><TransactionsList /></PrivateRoute>}></Route>

            {/* settings */}

            <Route path="/settings/list" element={<PrivateRoute><ALlSettingsList></ALlSettingsList></PrivateRoute>}></Route>
            <Route path="/settings" element={<PrivateRoute><Settings></Settings></PrivateRoute>}></Route>
            <Route path="/update/name" element={<PrivateRoute><UpdateName></UpdateName></PrivateRoute>}></Route>
            <Route path="/update" element={<PrivateRoute><UpdateInfo></UpdateInfo></PrivateRoute>}></Route>
            <Route path="/forgot/password" element={<ForgotPassword></ForgotPassword>}></Route>
            <Route path="/verify" element={<OtpVerify></OtpVerify>}></Route>
            <Route path="/reward" element={<PrivateRoute><Reward></Reward></PrivateRoute>}></Route>
            <Route path="/profile" element={<PrivateRoute><Profile></Profile></PrivateRoute>}></Route>
            <Route path="/my/qrcode" element={<PrivateRoute><QRCode></QRCode></PrivateRoute>}></Route>
            <Route path="/apply/loan" element={<PrivateRoute><Loan></Loan></PrivateRoute>}></Route>
            <Route path="/savings" element={<PrivateRoute><Savings></Savings></PrivateRoute>}></Route>
            <Route path="/create/savings" element={<PrivateRoute><CreateSavings></CreateSavings></PrivateRoute>}></Route>
            <Route path="/limit" element={<PrivateRoute><Limit></Limit></PrivateRoute>}></Route>
            <Route path="/monthly/limit" element={<PrivateRoute><MonthlyLimit></MonthlyLimit></PrivateRoute>}></Route>
            <Route path="/payment/category" element={<PrivateRoute><Services/></PrivateRoute>}></Route>
            <Route path="/notifications" element={<PrivateRoute><Notifications></Notifications></PrivateRoute>}></Route>
            <Route path="/support" element={<Support></Support>}></Route>
            <Route path="/cuppon" element={<PrivateRoute><Cuppon></Cuppon></PrivateRoute>}></Route>
            <Route path="/info" element={<PrivateRoute><Info></Info></PrivateRoute>}></Route>
            <Route path="/update/profile" element={<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>}></Route>
            {/* update Data  */}
            <Route path="user/update/info" element={<PrivateRoute><UpdateData></UpdateData></PrivateRoute>}></Route>
            <Route path="/set/user/info" element={<PrivateRoute><TakeData></TakeData></PrivateRoute>}></Route>


            {/* suggestions */}
            <Route path="/railway" element={<PrivateRoute><Railway></Railway></PrivateRoute>}></Route>
            <Route path="/daraz" element={<PrivateRoute><Daraz></Daraz></PrivateRoute>}></Route>
            <Route path="/bikroy" element={<PrivateRoute><Bikroy></Bikroy></PrivateRoute>}></Route>
            <Route path="/ten/schools" element={<PrivateRoute><TenSchools></TenSchools></PrivateRoute>}></Route>

            {/* compoennets */}
            <Route path="/my/offer" element={<PrivateRoute><Offer></Offer></PrivateRoute>}></Route>
            <Route path="/my/number" element={<PrivateRoute><PriyoNumber></PriyoNumber></PrivateRoute>}></Route>
            <Route path="/ticket" element={<PrivateRoute><Ticket></Ticket></PrivateRoute>}></Route>
            <Route path="/donation" element={<PrivateRoute><Donation></Donation></PrivateRoute>}></Route>
            <Route path="/insurance" element={<PrivateRoute><Insurance></Insurance></PrivateRoute>}></Route>
            <Route path="/games" element={<PrivateRoute><Games></Games></PrivateRoute>}></Route>
          </Routes>
        </BrowserRouter>
      </div>}
    </div>
  );
}

export default App;
