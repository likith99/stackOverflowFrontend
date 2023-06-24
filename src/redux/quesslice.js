import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postquestion,getAllquestion } from "./quesaction"

export const quesSlice = createSlice({
    name:"quesslice",
    initialState:{
        qdata:null,
        queslist:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(postquestion.fulfilled,(state,action)=>{
            state.qdata=action.payload

        })
        builder.addCase(postquestion.rejected,(state,action)=>{
            console.log("rejected")

        })
        builder.addCase(getAllquestion.fulfilled,(state,action)=>{
            state.queslist=action.payload

        })
        builder.addCase(getAllquestion.rejected,(state,action)=>{
            console.log("rejected all ques")

        })

    }

    

})