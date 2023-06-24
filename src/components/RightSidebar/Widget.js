import React from 'react'
import {FaPen} from "react-icons/fa"
import {BiMessage} from "react-icons/bi"
import {IoLogoStackoverflow} from "react-icons/io5"
function Widget() {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div class="right-sidebar-div1">
            <div class="right-sidebar-div2">
                < FaPen />
                <p>The next step in ecommerce? Replatform with APIs and micro frontends</p>
            </div>
            <div class="right-sidebar-div2">
            < FaPen />
                <p>Taking drag and drop tech stacks with Builder.io’s Steve Sewell</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div class="right-sidebar-div1">
            <div class="right-sidebar-div2">
            <BiMessage/>
                <p>Help us identify new roles for community members</p>
            </div>
            <div class="right-sidebar-div2">
            <BiMessage/>
                <p>
Navigation and UI research starting soon</p>
            </div>
            <div class="right-sidebar-div2">
            <IoLogoStackoverflow/>
                <p>
                Proposing a Community-Specific Closure Reason for non-English content</p>
            </div>
        </div>

      
        <h4>Hot Meta Posts</h4>
        <div class="right-sidebar-div1">
            <div class="right-sidebar-div2">
                <p>41</p>
                <p>
Is it [turn-by-turn]'s turn to get burninated?</p>
            </div>
            <div class="right-sidebar-div2">
            <p>42</p>
                <p>
Should we add option "Use complete sentences" to First Answers queue?</p>
            </div>
        </div>

    </div>
  )
}

export default Widget