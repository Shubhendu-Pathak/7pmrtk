import React, { useReducer, useState } from 'react'

let INC='increment'

const reducer =(state,action)=>{
if(action.type===INC){
return { ...state,count:state.count+1 }

}else if(action.type==='decrement'){
    return { ...state,count:state.count-1 }
}else if(action.type==='change-val-to-add'){
    return {...state,valToAdd:action.payload}
}else if(action.type==='addValToCount'){
    return {...state,
        count:state.count+state.valToAdd,
        valToAdd:0}
}

}

function Two() {

const [state,dispatch] = useReducer(reducer,{count:44,valToAdd:0})

console.log(state);




let inc =()=>{
dispatch(
    { type:INC }
)
}

let dec =()=>{
dispatch(  { type:'decrement' })
}

let handleChange =(e)=>{
let data = parseFloat(e.target.value)
dispatch({
    type:'change-val-to-add',payload:data
})
}

let handleSubmit =(e)=>{
    e.preventDefault()
dispatch(
    {
        type:'addValToCount'
    }
)
 
}

  return (
    <div>

<h1>Count says = {state.count}</h1>

<button onClick={inc}>Inc</button>
<button onClick={dec}>Dec</button>

<br /><br />

<form onSubmit={handleSubmit}>
    <label htmlFor="">Enter value to ADD</label>
    <input 
    type="number" 
    name="" id=""  
   onChange={handleChange}
    />
    <input type="submit" value="Submit Value" />
</form>

<br /><br />





    </div>
  )
}

export default Two