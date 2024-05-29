import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';


export interface BalanceState {
    balance: number
  }
  
  const initialState: BalanceState = {
    balance: 8,
  }

  export const balanceSlice=createSlice({
    name:'Balance',
    initialState,
    reducers:{
       
    }
  })

  export const selectBalance=(state:BalanceState)=>{return state.balance};

  export const {}=balanceSlice.actions;
  export default balanceSlice.reducer;