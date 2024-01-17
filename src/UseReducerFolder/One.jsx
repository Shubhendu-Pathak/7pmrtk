import React, { useState } from 'react'

function One() {
let [count,setCount] = useState(44)
let [valToAdd,setValToAdd]=useState(0)

console.log(count);

let inc =()=>{
setCount(count+1)
}

let dec =()=>{
    setCount(count-1)
}

let handleChange =(e)=>{
// setValToAdd(e.target.value)
let data = parseFloat(e.target.value) || 0;
// console.log(typeof data);
setValToAdd(data)
}

let handleSubmit =(e)=>{
    e.preventDefault()

    setCount(count+valToAdd)
    setValToAdd(0)
}

  return (
    <div>

<h1>Count says = {count}</h1>

<button onClick={inc}>Inc</button>
<button onClick={dec}>Dec</button>

<br /><br />

<form onSubmit={handleSubmit}>
    <label htmlFor="">Enter value to ADD</label>
    <input 
    type="number" 
    name="" id=""  
    value={valToAdd} 
    onChange={handleChange}
    />
    <input type="submit" value="Submit Value" />
</form>

<br /><br />





    </div>
  )
}

export default One