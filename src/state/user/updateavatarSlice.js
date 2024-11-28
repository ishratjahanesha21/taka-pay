import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { privateAvatarPut } from "../../utilities/apiCaller";

const initialState = {
    updateAvatar: [],
    isLoading: false,
    isError: false,
    error: '',
    updateAvatarSuccess: false
}

export const updateAvatar = createAsyncThunk(
    'user/updateAvatar',
    async ({ data, userToken }, { rejectWithValue }) => {
        try {
            const response= await privateAvatarPut('/update/avatar', userToken, data);
            return response;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }

    });

const updateAvatarSlice = createSlice({
    name: 'updateAvatar',
    initialState,
    reducers: {
        cleanAvatarSuccess: state => {
          state.error = false;
          state.errorMessage = "";
          state.updateAvatarSuccess = false
        }
      },
    extraReducers: (builder) => {
        builder
            .addCase(updateAvatar.pending, (state, action) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(updateAvatar.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.updateAvatar = action.payload;
                state.updateAvatarSuccess = true
            })
            .addCase(updateAvatar.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
            })


    }
});
export const {cleanAvatarSuccess } = updateAvatarSlice.actions;
export default updateAvatarSlice.reducer; 