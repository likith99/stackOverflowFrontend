import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetail from './QuestionDetail'

function DisplayQuestion() {
  return (
    <div className="home-container-1">
    <LeftSidebar/>
    <div class="home-container-2">
        <QuestionDetail/>
        <RightSidebar/>
    </div>
</div>)
}

export default DisplayQuestion