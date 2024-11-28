import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { privatePost } from "../../utilities/apiCaller";



const initialState={
   savings:[],
    isLoading:false,
    isError:false,
    errorr:'',
    successs:''
}

export const createSavings=createAsyncThunk(
    'savings/createsavings',async({data,userToken}, { rejectWithValue })=>{

        try {
            const savings = await privatePost('/create/savings',userToken, data);
            return savings;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
   
 
});
const savingsSlice=createSlice({
    name:'savings',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(createSavings.pending, (state, action) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(createSavings.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.savings.push(action.payload);
                state.successs=true
            })
            .addCase(createSavings.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorr = action.payload
            })
           
    }
});

export default savingsSlice.reducer; 