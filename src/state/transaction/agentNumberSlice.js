import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privatePost, } from "../../utilities/apiCaller";



export const takeAgentNumber = createAsyncThunk(
  "/takeNumber",
  async ({data,userToken}, { rejectWithValue }) => {
    try {
      const response = await privatePost("/take/agentnumber",userToken, data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const takeAgentNumberSlice = createSlice({
  name: "signup",
  initialState: {
    number:[],
    isLoading: false,
    success: false,
    errorr:'',
  },
  reducers: {
    clearAgentNumber: (state) => {
      state.success = false
      state.number = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(takeAgentNumber.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(takeAgentNumber.fulfilled, (state, action) => {
      state.isLoading = false;
      state.errorr = null;
      state.number = action.payload;
      state.success = true;
    });
    builder.addCase(takeAgentNumber.rejected, (state, action) => {
      state.isLoading = false;
      state.errorr = action.payload;
    });
  },
});

export const { clearAgentNumber } = takeAgentNumberSlice.actions;
export default takeAgentNumberSlice.reducer;