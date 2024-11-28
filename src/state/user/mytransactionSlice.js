
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { privateGet} from '../../utilities/apiCaller';

// export const fetchtransactions = createAsyncThunk(
//     'fetchtransactions ',
//     async ({userToken}, { rejectWithValue }) => {
//         const transactions = await privateGet('/my/transactions',userToken);
//         return transactions;
//     }
// );
// export const fetchOutTransactions = createAsyncThunk(
//     'fetchOutTransactions ',
//     async ({userToken}, { rejectWithValue }) => {
//         const transactions = await privateGet('/my/out/transactions',userToken);
//         return transactions;
//     }
// );
// export const fetchInTransactions = createAsyncThunk(
//     'fetchInTransactions ',
//     async ({userToken}, { rejectWithValue }) => {
//         const transactions = await privateGet('/my/in/transactions',userToken);
//         return transactions;
//     }
// );
// export const fetchLastThreeMonthsTransactions = createAsyncThunk(
//     'fetchLastThreeMonthsTransactions',
//     async ({ userToken }, { rejectWithValue }) => {
//         try {
//             const response = await privateGet('/last-three-months-transactions', userToken);
//             return response;
//         } catch (error) {
//             return rejectWithValue(error.response.data);
//         }
//     }
// );
// export const mytransactionsSlice = createSlice({
//     name: 'My transactions',
//     initialState:{
//         mytransactions: [],
//         myOutTransactions:[],
//         myInTransactions:[],
//         transactionsHistry:[],
//         isLoading: false,
      
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchtransactions.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(fetchtransactions.fulfilled, (state, action) => {
//                 state.mytransactions = action.payload;
//                 state.isLoading = false
                
//             })
//             .addCase(fetchtransactions.rejected, (state, action) => {
//                 state.isLoading = true
//                 state.mytransactions = [];
//             })
//             .addCase(fetchOutTransactions.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(fetchOutTransactions.fulfilled, (state, action) => {
//                 state.myOutTransactions = action.payload;
//                 state.isLoading = false
                
//             })
//             .addCase(fetchOutTransactions.rejected, (state, action) => {
//                 state.isLoading = true
//                 state.myOutTransactions = [];
//             })
//             .addCase(fetchInTransactions.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(fetchInTransactions.fulfilled, (state, action) => {
//                 state.myInTransactions = action.payload;
//                 state.isLoading = false
                
//             })
//             .addCase(fetchInTransactions.rejected, (state, action) => {
//                 state.isLoading = true
//                 state.myInTransactions = [];
//             })
//             .addCase(fetchLastThreeMonthsTransactions.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(fetchLastThreeMonthsTransactions.fulfilled, (state, action) => {
//                 state.transactionsHistry = action.payload;
//                 state.isLoading = false
                
//             })
//             .addCase(fetchLastThreeMonthsTransactions.rejected, (state, action) => {
//                 state.isLoading = true
//                 state.transactionsHistry = [];
//             })
//     }
// });

// export default mytransactionsSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../../utilities/apiCaller';

export const fetchtransactions = createAsyncThunk(
    'fetchtransactions',
    async ({ userToken }, { rejectWithValue }) => {
        try {
            const transactions = await privateGet('/my/transactions', userToken);
            return transactions;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchOutTransactions = createAsyncThunk(
    'fetchOutTransactions',
    async ({ userToken }, { rejectWithValue }) => {
        try {
            const transactions = await privateGet('/my/out/transactions', userToken);
            return transactions;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchInTransactions = createAsyncThunk(
    'fetchInTransactions',
    async ({ userToken }, { rejectWithValue }) => {
        try {
            const transactions = await privateGet('/my/in/transactions', userToken);
            return transactions;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchLastThreeMonthsTransactions = createAsyncThunk(
    'fetchLastThreeMonthsTransactions',
    async ({ userToken }, { rejectWithValue }) => {
        try {
            const response = await privateGet('/last-three-months-transactions', userToken);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const mytransactionsSlice = createSlice({
    name: 'mytransactions',
    initialState: {
        mytransactions: [],
        myOutTransactions: [],
        myInTransactions: [],
        transactionsHistry: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchtransactions.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchtransactions.fulfilled, (state, action) => {
                state.mytransactions = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchtransactions.rejected, (state) => {
                state.isLoading = false;
                state.mytransactions = [];
            })
            .addCase(fetchOutTransactions.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchOutTransactions.fulfilled, (state, action) => {
                state.myOutTransactions = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchOutTransactions.rejected, (state) => {
                state.isLoading = false;
                state.myOutTransactions = [];
            })
            .addCase(fetchInTransactions.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchInTransactions.fulfilled, (state, action) => {
                state.myInTransactions = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchInTransactions.rejected, (state) => {
                state.isLoading = false;
                state.myInTransactions = [];
            })
            .addCase(fetchLastThreeMonthsTransactions.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchLastThreeMonthsTransactions.fulfilled, (state, action) => {
                state.transactionsHistry = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchLastThreeMonthsTransactions.rejected, (state) => {
                state.isLoading = false;
                state.transactionsHistry = [];
            });
    }
});

export default mytransactionsSlice.reducer;
