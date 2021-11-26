import {createAction, createReducer} from "@reduxjs/toolkit";


const initialState={
    username:'',
    password:''
}
const signIn=createAction('SIGN_IN');
const signUp=createAction('SIGN_UP');
export default createReducer(initialState,{
    [signIn]:(state)=>{
        // apiMethod
    }
})