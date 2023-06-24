import {createSlice} from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";
import {signup,login} from "./authaction"
export const authslice=createSlice({
    name:"authslice",
    initialState:{
        data:null,
        isSuccess:false,
        loading:false
    },
    reducers:{
    },
    extraReducers:(builder) => {
        builder
          .addCase(login.pending, (state) => {
            state.loading = true;
          })
          .addCase(login.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.data = action.payload;
            console.log(typeof(state.data),state.data)
            localStorage.setItem("profile",JSON.stringify({...state.data}))
            state.loading = false;
            
          })
          .addCase(login.rejected, (state, action) => {
            state.isSuccess = false;
            console.log(action.payload)
          })
          .addCase(signup.pending, (state) => {
            state.loading = true;
          })
          .addCase(signup.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.data = action.payload;
            console.log(action.payload,action.data)
            localStorage.setItem("profile",JSON.stringify({...action.payload}))
            state.loading = false;
          })
          .addCase(signup.rejected, (state, action) => {
            state.isSuccess = false;
          });
      },
    });


