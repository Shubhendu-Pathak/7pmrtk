import React from 'react'
import Movies from './Movies'
import Songs from './Songs'
import { useDispatch } from 'react-redux'
import { reset } from '../store'

function Main() {
    
let dispatch = useDispatch()

let resetClick =()=>{
  let action = reset()
  console.log(action);
dispatch(reset())
}

  return (
    <div>
<button onClick={resetClick}>Reset button</button> <br /><br /><br />
<Movies/>
<Songs/>

    </div>
  )
}

export default Main