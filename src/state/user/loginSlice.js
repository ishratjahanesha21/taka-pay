import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privateAvatarPut, privatePut, publicPost } from '../../utilities/apiCaller';
export const createLogin = createAsyncThunk(
  "/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicPost("/login", data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data.message);

    }
  }
);
export const updateAvatar = createAsyncThunk(
  'user/updateAvatar',
  async ({ data, userToken }, { rejectWithValue }) => {
    try {
      const response = await privateAvatarPut('/update/avatar', userToken, data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }

  });
  export const updateName = createAsyncThunk(
    'user/updateName',
    async ({ data, userToken }, { rejectWithValue }) => {
        try {
            const updateprofile = await privatePut('/update/user', userToken, data);
            return updateprofile;
        } catch (err) {
            return rejectWithValue(err);
        }

    });
export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    success: false,
    error: '',
    errorMessage: "",
    loggeduser: [],
    updatedUser: false,
  },
  reducers: {
    logout: (state) => {
      state.token = null
      state.loggeduser = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createLogin.pending, (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
    });
    builder.addCase(createLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.loggeduser = action.payload;
      state.error = '';
    });
    builder.addCase(createLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // state.errorMessage = action.payload.message;
    })
      .addCase(updateAvatar.pending, (state, action) => {
        state.isLoading = true;
        state.error = true
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        const { loggeduser: previousUser } = state;
        state.isLoading = false;
        state.error = false;
        state.updatedUser = true;
        state.loggeduser = { token: previousUser.token, ...action.payload };
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.error = action.payload;
      })
      .addCase(updateName.pending, (state, action) => {
        state.isLoading = true;
        state.error = true
    })
    .addCase(updateName.fulfilled, (state, action) => {
      const { loggeduser: previousUser } = state;
        state.isLoading = false;
        state.error = false;
        state.updatedUser = true;
        state.loggeduser = { token: previousUser.token, ...action.payload };
    })
    .addCase(updateName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.error = action.error?.message
    })
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;