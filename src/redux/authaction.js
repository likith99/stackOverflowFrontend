
import { createAsyncThunk } from "@reduxjs/toolkit"

import * as api from "../api/index"

export const signup = createAsyncThunk("type/signup",async(authdata,{rejectWithValue}) =>{
    try{
        
        const {data}=await api.signUp(authdata)
        return data;
    }
    catch(error){
        return  rejectWithValue(error.response.data)
}})

export const login = createAsyncThunk("type/login",async(authdata,{rejectWithValue}) =>{
    try{
        
        const {data}=await api.logIn(authdata)
        
        return data;
    }
    catch(error){
        console.log(error.response.data)
        return rejectWithValue(error.response.data)
       

    }
}
)