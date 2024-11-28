import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from '../../utilities/apiCaller';


export const createSignUp = createAsyncThunk(
  "/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicPost("/register",data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const signUpSlice = createSlice({
  name: "signup",
  initialState: {
    userSignup:[],
    isLoading: false,
    success: false,
    error:'',
    errorMessage:"",
    phone: '',
  },
  reducers: {
    registrationClean: (state) => {
      state.error = false;
      state.errorMessage = "";
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createSignUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createSignUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userSignup = action.payload.user;
      state.success = true;
      if (action.payload.user.phone) {
        localStorage.setItem('phone', action.payload.user.phone);
      }
    });
    builder.addCase(createSignUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export const { registrationClean } = signUpSlice.actions;
export default signUpSlice.reducer;