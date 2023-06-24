import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import DisplayQuestion from './pages/Question/DisplayQuestion'
import Question from './pages/Question/Question'

function Allroutes() {
  return (
     <Routes>
        <Route path='/auth'element={<Auth></Auth>}></Route>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/user'element={<Home></Home>}></Route>
        <Route path='/question'element={<Question/>}></Route>
        <Route path='/askquestion'element={<AskQuestion/>}></Route>
        <Route path='/question/:id'element={<DisplayQuestion/>}></Route>
    </Routes>
  )
}

export default Allroutes