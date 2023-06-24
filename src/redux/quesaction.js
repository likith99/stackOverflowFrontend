
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getAllques, postQuestion } from "../api";

export const postquestion = createAsyncThunk("type/postques",async(quesdata,{rejectWithValue}) =>{
    try{
        
        const {data}=await postQuestion(quesdata)
        return data;
    }
    catch(error){
        return  rejectWithValue(error.response.data)
}})

export const getAllquestion = createAsyncThunk("type/getques",async(thunkAPI,{rejectWithValue}) =>{
    try{
        
        const {data}=await getAllques()
        return data;
    }
    catch(error){
        return  rejectWithValue(error.response.data)
}})