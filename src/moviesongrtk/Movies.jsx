import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovie, removeMovie } from '../store';

function Movies() {

    let [movie,SetMovie]= useState('')

    //  to get the data from store
let moviesPlaylist = useSelector(state=>state.movies)
console.log(moviesPlaylist);

// to execute reducer
let dispatch = useDispatch()

let addMovieClick=()=>{
dispatch(addMovie(movie))
SetMovie('')
}

let handleRemove =()=>{
dispatch(removeMovie(movie))
SetMovie('')
}

  return (
    <div>
        <h2>Movie Playlist</h2>
        <hr />
 <input 
 type="text" 
 name="" 
 id="" 
 placeholder='Enter movie name' 
 value={movie}
 onChange={(e)=>SetMovie(e.target.value)}
 />
 <button onClick={addMovieClick}>Add Movie</button>

{
    moviesPlaylist.map((ele,index)=>{
        return <div key={index}>
            <h2>{ele}  <button onClick={handleRemove}>X</button> </h2>
        </div>
    })
}

    </div>
  )
}

export default Movies