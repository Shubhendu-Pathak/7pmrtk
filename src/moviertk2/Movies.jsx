import React, { useState } from 'react'

function Movies() {
    let [ movie,setmovie] = useState('')
  return (
    <div>
        <h1>Movies</h1>
        <input type="text" value={movie} onChange={(e)=>setmovie(e.target.value)} />
        <button>AddMovies</button>
        <hr />
    </div>
  )
}

export default Movies