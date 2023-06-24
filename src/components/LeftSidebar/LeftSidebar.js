import React from 'react'
import { NavLink } from 'react-router-dom'
import "./LeftSidebar.css"
import globe from "../../assets/globe.png"
import {FaGlobeAmericas} from "react-icons/fa"

function LeftSidebar() {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to="/" className="side-nav-link" activeClass="active">
                <p>Home</p>
            </NavLink>
            <div class="side-nav-div">
            <div><p>PUBLIC</p></div>
            <NavLink to="/question"  className="side-nav-link"  >
                {/* <img src={globe} alt='globe' id="globe-img"></img> */}
                < FaGlobeAmericas className="globe-img" />
                <p >Questions</p>
            </NavLink>
            <NavLink to="/tags"  className="side-nav-link"  >
              <p>Tags</p>
            </NavLink>
            <NavLink to="/users"  className="side-nav-link" >
              <p>Users</p>
            </NavLink>
                
            </div>
        </nav>
    </div>
  )
}

export default LeftSidebar