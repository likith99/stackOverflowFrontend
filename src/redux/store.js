import { configureStore } from '@reduxjs/toolkit'
import {authslice} from "./authslice"
import { myslice } from './currentuserslice'
import {quesSlice} from './quesslice'
export default configureStore({
 reducer:{
    auth:authslice.reducer,
   userslice:myslice.reducer,
   quesSlice:quesSlice.reducer
 }
})