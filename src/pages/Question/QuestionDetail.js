import React, { useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import {TiArrowSortedUp,TiArrowSortedDown} from "react-icons/ti"
import "./Question.css"
import Avatar from "../../components/Navbar/avatar"
import DisplayAns from './DisplayAns'
import {  useSelector } from "react-redux"

function QuestionDetail() {
  const {id}=useParams()
  // console.log(id)
 
  const questionlist=useSelector((state)=>state.quesSlice.queslist)
  
  console.log(questionlist.filter((question) => question._id === id))

  return (
    <div className='question-details-page'>
      {
        questionlist===null?<h1>...Loading</h1>:
        <>
        {
          // remove parseInt
        questionlist.filter(question=>question._id === id).map((question)=>(
          <div key={question._id} className="question-details-container">
            <h1>{question.title}</h1>
            <div class="question-details-container2">
              <div class="question-votes">
              <TiArrowSortedUp className='updown up'/>
              <p>{question.upVotes - question.downVotes}</p>
              <TiArrowSortedDown className='updown down'/>
            </div>
            <div style={{width:"100%"}}>
              <p>{question.questionbody}</p>
              <div class="question-tags">
                {
                  question.tags.map((tag)=>(
                    // may require div
                    <span key={tag}>{tag}</span>
                  ))
                }
              </div>
              <div class="question-action-user">
                <div>
                  <button className='ques-sharebtn'>Share</button>
                  <button className='ques-deletebtn'>Delete</button>
                </div>
                <div>
                  <p>Asked on {question.askedon}</p>
                  <Link to={`/user/${question.userId}`} className="user-link">
                    <Avatar background="orange" px="6px" py="12px" >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                    <div>
                      {question.userPosted}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
                
            
            </div>
            {
              
              question.nanswers!==0 && (
                <section className='question-ans-container3'>
                  <h3>{question.nanswers} answers</h3>
                  <DisplayAns question={question.answer} key={question._id} />
                </section>
              )
            }
            <section className='post-ans-container'>
              <h3>Your answer</h3>
              <form >
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" className="post-ans-btn" value="Post Your Answer"></input>
              </form>
              <p>
                Browse other question tagged
                {
                  question.tags.map((item)=>(
                    <Link to="/tags" > {item}</Link>
                  ))
                } or
                 {<Link to="/askquestion"> ask a question</Link>}
              </p>

            </section>
          </div>
        ))
        
        
        }
        </>
      }
    </div>
  )
}

export default QuestionDetail