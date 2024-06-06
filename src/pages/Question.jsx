/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'

const Question = () => {
    const [ans, setAns] = useState("")
    const [display, setDisplay] = useState("")
    const [reason, setReason] = useState(null)
    const [displayreason, setDisplayReason] = useState("")
 
 
 const handleChange = (event) => {
   setAns(event.target.value)
  }
 
  const reasonChange = (event) => {
  setAns(event.target.value)
  }
  const handleAnswer = () => {
   if(ans === "yes"){
    console.log("great")
    setDisplay("great")
    setReason("")
    displayreason("")
   }   
   else if (ans === "no"){
    console.log("why")
    setDisplay("why")
    setReason(<><input type='text' onChange={reasonChange}/><button onClick={handleReason}>Submit Reason</button></>)
   }
  
   else{
    console.log("please answer yes/no")
    setDisplay("please answer yes/no")
   }
  }
  const handleReason = () => {
    setDisplayReason(ans === "" ? <p>That was not a reason</p> : <p>Am sorry</p>)
  }
    return (
      <div className="cont">
    <div>
    <p>Do you want to be my friend</p>
    <input type="text" onChange={handleChange}/>
    <button onClick={handleAnswer}>Submit Answer</button>
    <br />
    <p>{display}</p>
    {reason}
    {displayreason}
    </div>
    </div>
    )
}

export default Question