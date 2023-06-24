import React from 'react'
import Questionhandle from './Questionhandle'
function Questionlist({questionlist}) {
  return (
    <> { questionlist.map((question)=>(
        <Questionhandle question={question} key={question.id}/>
      ))}</>
  )
}

export default Questionlist