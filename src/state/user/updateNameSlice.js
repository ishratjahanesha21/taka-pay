import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { privatePut } from "../../utilities/apiCaller";
const initialState = {
    updateName: [],
    isLoading: false,
    isError: false,
    error: '',
    updateNameSuccess: false
}
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

const updateProfileSlice = createSlice({
    name: 'updateName',
    initialState,
    reducers: {
        errorClean: state => {
          state.error = false;
          state.errorMessage = "";
          state.updateNameSuccess = false
        }
      },
    extraReducers: (builder) => {
        builder
            .addCase(updateName.pending, (state, action) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(updateName.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.updateName = action.payload;
                state.updateNameSuccess = true
            })
            .addCase(updateName.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })


    }
});
export const {errorClean } = updateProfileSlice.actions;
export default updateProfileSlice.reducer; 