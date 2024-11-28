import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet} from '../../utilities/apiCaller';

export const fetchSavings = createAsyncThunk(
    'fetchSavings ',
    async ({userToken}, { rejectWithValue }) => {
        const Savings = await privateGet('/my/savings',userToken);
        return Savings;
    }
);
export const mySavingsSlice = createSlice({
    name: 'My Savings',
    initialState:{
        mySavings: [],
        isLoading: false,
      
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSavings.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchSavings.fulfilled, (state, action) => {
                state.mySavings = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchSavings.rejected, (state, action) => {
                state.isLoading = true
                state.mySavings = [];
               
            })
    }
});

export default mySavingsSlice.reducer;