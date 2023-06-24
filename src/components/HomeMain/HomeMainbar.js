import React from 'react'
import { Link,Navigate,useLocation,useNavigate } from 'react-router-dom'
import { getAllques } from '../../api'
import "./HomeMain.css"
import Questionlist from './Questionlist'
import {  useSelector } from "react-redux"

function HomeMainbar() {
  const location=useLocation()
  const navigate=useNavigate()
  var user=null
  
  const askfunc=()=>{
      if(user === null){
        console.log("hahaahh")
       navigate("/askquestion")
      }
      else{
        alert("login or signup to ask question")
        navigate("/auth")
      }
      
  }
  const questionlist=useSelector((state)=>state.quesSlice.queslist)
  console.log(questionlist)

  // var questionlist=[{
  //   _id:1,
  //   upVotes:3,
  //   downVotes:2,
  //   nanswers:1,
  //   title:"What is a function",
  //   questionbody:"It meant to be",
  //   tags:["java","node js","react js"],
  //   userPosted:"nano",
  //   userId:1,
  //   askedon:"jan 1",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:"kumar",
  //     answeredOn:"jan 2",
  //     userId:2
  //   }]
  // },
  // {
  //   _id:2,
  //   upVotes:5,
  //   downVotes:2,
  //   nanswers:3,
  //   title:"Different types of database?",
  //   questionbody:"It meant to be",
  //   tags:["java","node js","react js"],
  //   userPosted:"paro",
  //   askedon:"jan 5",
  //   userId:1,
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:"kumar",
  //     answeredOn:"jan 2",
  //     userId:2
  //   }]
  // }]

  return (
    <div className='main-bar'>
      <div class="main-bar-header">
        {
          location.pathname ==="/" ?<h1>Top Questions</h1>:<h1>All Questions</h1>
        }
        <button onClick={askfunc} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionlist===null?<h1>...Loading</h1>:
          
          <>
            <p>{questionlist.length} questions</p>
            <Questionlist questionlist={questionlist}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar