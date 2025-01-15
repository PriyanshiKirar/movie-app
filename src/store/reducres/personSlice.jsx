import { createSlice } from '@reduxjs/toolkit'

const initialState = {
info:null
}

export const peronSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
   loadperson: (state,action)=>{
    state.info=action.payload
   },
   removeperson:(state,action)=>{
    state.info=null;
   }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { loadperson,removeperson } = peronSlice.actions
  
  export default peronSlice.reducer