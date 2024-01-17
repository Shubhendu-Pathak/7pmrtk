import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './store/thunk/fetchusers'

function Main4() {


let datas = useSelector(state=>state.usersdata)
console.log(datas);

let dispatch = useDispatch()

// useEffect(()=>{ 
//     dispatch(fetchUsers())
//  },[dispatch])

let getData=()=>{
    dispatch(fetchUsers())
}

if(datas.isLoading===true) return <h1>LOADING DATA</h1>

// if(datas.error) return <h1>ERROR LOADING DATA</h1>

  return (
    <div>Main4
<button onClick={getData}>GET DATA</button>

<hr />

<table style={{width:'100%',textAlign:'center'}}>
   <tbody>
   <tr style={{marginBottom:'20px'}}>
        <th>Username</th>
        <th>Email</th>
        <th>Password</th>
    </tr>
  
    {
        datas.data ? datas.data[0].map(ele=>{
            return <tr key={ele.id}>
                   <th>{ele.username}</th>
        <th>{ele.email}</th>
        <th>{ele.password}</th>
            </tr>
        }):''  
    }
   </tbody>
</table>

    </div>
  )


}

export default Main4