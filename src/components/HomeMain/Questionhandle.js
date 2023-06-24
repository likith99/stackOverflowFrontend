import React from 'react'
import {Link} from "react-router-dom"
function Questionhandle({question}) {
  return (
    <div className='display-question-container'>
      <div class="display-votes-ans">
        <p>{question.upVotes - question.downVotes}</p>
        <p>votes</p>
      </div>
      <div class="display-votes-ans">
        <p>{question.nanswers}</p>
        <p>answers</p>
      </div>
      <div class="display-question-details">
        <Link to={`/question/${question._id}`} className="question-title-link">{question.title}</Link>
        <div class="display-tags-time">
          <div class="display-tags">
            
            {question.tags.map((tag)=>(
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <p class="display-time">
            asked {question.askedon} {question.userPosted}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Questionhandle