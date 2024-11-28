import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import  loginReducer  from "./user/loginSlice";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import  signUpSlice  from "./user/signupSlice";
import mytransactionsSlice  from "./user/mytransactionSlice";
import storeReducer from '../state/transaction/sendSlice'
import  sendMoneySlice  from "./transaction/sendMoneySlice";
import updateProfileSlice from '../state/user/updateNameSlice'
import userDetailsSlice from "./user/userDetailsSlice";
import takeNumberSlice from "./transaction/takeNumberSlice";
import takePasswordSlice from "./transaction/takePasswordSlice";
import cashOutSlice from "./transaction/cashOutSlice";
import  takeAgentNumberSlice  from "./transaction/agentNumberSlice";
import takeMercentNumberSlice  from "./transaction/mercentNumberSlice";
import paymentSlice from "./transaction/paymentSlice";
import savingsSlice from "./savings/savingsSlice";
import mySavingsSlice from "./user/mySavingsSlice";
import updateavatarSlice from "./user/updateavatarSlice";
import otpSlice  from "./user/createOTPSlice";
import verifyOTPSlice from "./user/verifyOTPSlice";
const persistConfig = {
  key: "authentication",
  storage
};
const middlewares = [];
if (process.env.NODE_ENV !== "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
const persistedReducer = persistReducer(persistConfig, loginReducer);
const rootReducer = combineReducers({
  userDetails: persistedReducer,
  signup: signUpSlice,
  otp:otpSlice,
  otpVerification:verifyOTPSlice,
  transactions:mytransactionsSlice,
  type:storeReducer,
  takeReciverNumber:takeNumberSlice,
  takeAgentNumber:takeAgentNumberSlice,
  takeMercentNumber:takeMercentNumberSlice,
  takePassword:takePasswordSlice,
  sendMoney:sendMoneySlice,
  cashOut:cashOutSlice,
  payment:paymentSlice,
  updateName:updateProfileSlice,
  userdetails:userDetailsSlice,
  savings:savingsSlice,
  mySavings:mySavingsSlice,
  updatedAvatar:updateavatarSlice
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(logger),
});

export default store;

export const persistor = persistStore(store);