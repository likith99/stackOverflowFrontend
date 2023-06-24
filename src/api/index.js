import axios from "axios"
const API=axios.create({baseURL:'http://localhost:5000'})
export const logIn = (authData)=>API.post("/user/login",authData)
export const signUp = (authData)=>API.post("/user/signup",authData)
export const postQuestion = (qdata)=>API.post("/questions/Ask",qdata)

export const getAllques=()=>API.get("/questions/get")
export const postanswer=(id,nanswer,answerBody,userAnswered)=>API.patch(`/answer/post/${id}`,nanswer,answerBody,userAnswered)

