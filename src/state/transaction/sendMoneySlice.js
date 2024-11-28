import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privatePost, } from "../../utilities/apiCaller";



export const createSendMoney = createAsyncThunk(
  "/sendmoney",
  async ({data,userToken}, { rejectWithValue }) => {
    try {
      const response = await privatePost("/send/money",userToken, data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const sendMoneySlice = createSlice({
  name: "signup",
  initialState: {
    sendmoney:[],
    isLoading: false,
    success: false,
    error:'',
    errorMessage:"",
  },

  extraReducers: (builder) => {
    builder.addCase(createSendMoney.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createSendMoney.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.sendmoney = action.payload;
      state.success = true;
    });
    builder.addCase(createSendMoney.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default sendMoneySlice.reducer;