import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'

function App() {
  const func =(col,cul)=>{
    if(curr==="light"){
      set_curr(cul)
      document.body.style.backgroundColor = col;
    }
    else{
      set_curr(cul)
      document.body.style.backgroundColor = col;
    }
  }
  const [curr,set_curr] = useState("light")
  return (
    <>
      <Navbar fun={func} colors={curr}/>
    </>
  );
}

export default App;