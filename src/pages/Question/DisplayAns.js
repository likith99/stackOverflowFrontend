import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Navbar/avatar'
function DisplayAns({question}) {
    
  return (<>
   {question.map((ans)=>(
    <div className='display-ans'>
        <p>{ans.answerBody}</p>

        <div className='question-action-user'>
        <div>
            <button>submit</button>
            <button>delete</button>
        </div>
        <div>
        <div>
                  <p>answered on {ans.answeredOn}</p>
                  <Link to={`/user/${ans.userId}`} className="user-link">
                    <Avatar background="green" px="6px" py="12px" margin-right="8px">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                    <div>
                      {ans.userAnswered}
                    </div>
                  </Link>
                </div>
        </div>
    </div>

    </div>
   
   ))}
   </>
  )
}

export default DisplayAns