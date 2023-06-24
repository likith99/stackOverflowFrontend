import React, { useEffect } from "react"
import logo from "./l1.png"
import { Link } from "react-router-dom"
import {BsSearch} from "react-icons/bs"
import Avatar from "./avatar"
import "./navbar.css"
import { useDispatch, useSelector } from "react-redux"
import { setLocalStorageValue } from "../../redux/currentuserslice"

const Navbar=()=>{
    
    
    const dispatch=useDispatch()
    var user = useSelector((state)=>state.userslice.localStoragevalue)
    var success=useSelector((state)=>state.auth.isSuccess)
   
    useEffect(()=>{
        const value = localStorage.getItem('profile');
        
        dispatch(setLocalStorageValue(value))
    },[success])
   
   
return(
    <nav className="main-nav">
        <div className="navbar">
            <Link to="/" className="nav-item nav-logo" >
                <img src={logo} className="navlogo-img" ></img>
            </Link>
            <Link to="" className="nav-item nav-btn">About</Link>
            <Link to="" className="nav-item nav-btn">Product</Link>
            <Link to="" className="nav-item nav-btn">For Teams</Link>
        
        <form>
            <input type="text" className="input-bar" placeholder="Search..."/>
            <  BsSearch class="s-input-icon"/>
        </form>
        {
            (user===null) ?<Link to="/auth" className="nav-item nav-links">Log in</Link>:
            <div className="logout-box">
            <Avatar background="#009dff" px="5px" py="7px" borderRadius="50%"><Link to="/user" style={{color:"white"}} >M</Link></Avatar>
            <button className="nav-item nav-links">Logut</button>
            {/* // use BrowserRouter */}
            </div>
            
        }
</div>
    </nav>
)
}
export default Navbar