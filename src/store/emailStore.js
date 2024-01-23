import { createSlice } from "@reduxjs/toolkit";

const initialEmailState={email:null,premium:false};
const emailSlice=createSlice({
    name:'email',
    initialState:initialEmailState,
    reducers:{
        setEmail(state,action){
            state.email=action.payload;
        }    
    }
});

export const emailActions=emailSlice.actions;
export default emailSlice.reducer;
