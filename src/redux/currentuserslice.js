import { createSlice } from "@reduxjs/toolkit";

export const myslice= createSlice({
    name:'currentUser',
    initialState:{
        localStoragevalue:null
    },
    reducers:{
        setLocalStorageValue:(state,action)=>{
            console.log(action.payload)
            state.localStoragevalue=action.payload
        }
    }
})

export const {setLocalStorageValue} = myslice.actions
