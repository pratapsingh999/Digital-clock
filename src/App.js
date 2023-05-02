import React, { useState } from 'react'
import './App.css';

export default function App() {

  const time = new Date().toLocaleTimeString();
  const [Ctime , setCtime]= useState(time);

  const UpdateTime = () =>{
    const time = new Date().toLocaleTimeString();
    setCtime(time)
  }

  setInterval(UpdateTime,1000)
  return (
  
    <div className="body">
    <div className='text'>
     <h1>DIGITAL - CLOCK </h1>
     <h1>{Ctime}</h1>
     {/* <button className='btn'  onClick={UpdateTime}><h1>Get time</h1></button> */}
     </div>
     </div>
    
  )
}


