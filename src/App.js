import './App.css';
import Navbar from "./components/Navbar/navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Allroutes from './Allroutes';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllquestion } from './redux/quesaction';
function App() {
  const dispatch=useDispatch()
  // const questionlist=useSelector((state)=>state.quesSlice.queslist)
  useEffect(()=>{
    dispatch(getAllquestion())
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Allroutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
