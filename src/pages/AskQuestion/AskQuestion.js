import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { postquestion } from '../../redux/quesaction'
import { useNavigate } from 'react-router-dom'
import "./AskQuestion.css"
function AskQuestion() {
    const [title,setTitle]=useState("")
    const [questionbody,setQuesionbody]=useState("")
    const [tags,setTags]=useState([])
    const user = useSelector((state)=>state.userslice.localStoragevalue)
    const dispatch=useDispatch()
    const navigate=useNavigate()
   
    const handlesubmit=(e)=>{
        e.preventDefault()
        const obj=JSON.parse(user)
        
        dispatch(postquestion({title,questionbody,tags,userPosted:obj.result.name})).then(()=>navigate("/")).catch((err)=>console.log("error postques"))
        
    }

    const handleEnter=(e)=>{
        if (e.key === "Enter"){
            setQuesionbody(questionbody + "\n")
        }
    }



  return (
    <div className='ask-question'>
        <div class="ask-ques-container">
            <h1>Ask a public question</h1>
            <form >
                <div className="ask-form-container">
                <label for="ask-ques-title">
                    <h4>Title</h4>
                    <p>Be specific and imagine you’re asking a question to another person.</p>
                    <input type="text" id="ask-ques-title" onChange={(e)=>setTitle(e.target.value)}  placeholder="e.g Is there an R function for finding the index of an element in a vector"></input>
                </label>
                <label for="ask-ques-body">
                <h4>What are the details of your problem?</h4>
                    <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                    <textarea name="body" onChange={(e)=>setQuesionbody(e.target.value)} onKeyDown={handleEnter} id="ask-ques-body" cols="30" rows="10"></textarea>
                   
                </label>
                <label for="ask-ques-tags">
                <h4>Tags</h4>
                    <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                    <input type="text" id="ask-ques-tags" onChange={(e)=>setTags(e.target.value.split(" "))} ></input>
                </label>
                </div>
                 
            </form>
            <button onClick={handlesubmit} className='review-btn'>Review your question</button> 
        </div>
    </div>
    
   
  )
}

export default AskQuestion