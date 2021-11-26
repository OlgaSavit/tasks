import {createSlice} from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{
        isAuth:false
    },
    reducers:{
        signIn(state,action){
            console.log('action',action.payload)
            state.isAuth=true;
        },
        signUp(state,action){
            // api query
        }

    }
});
export default authSlice.reducer
export const {signIn,signUp} =authSlice.actions