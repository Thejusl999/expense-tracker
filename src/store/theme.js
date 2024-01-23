import { createSlice } from "@reduxjs/toolkit";

const initialThemeState={lightTheme:null,premium:null};
const themeSlice=createSlice({
    name:'theme',
    initialState:initialThemeState,
    reducers:{
        activateLightMode(state){
            state.lightTheme=true;
            state.premium=true;
        },
        activateDarkMode(state){
            state.lightTheme=false;
            state.premium=true;
        },
        disablePremium(state){
            state.lightTheme=null;
            state.premium=null;
        }
    }
});
 
export const themeActions=themeSlice.actions;
export default themeSlice.reducer;