import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSong, removeSong } from '../store'

function Songs() {
    let [ song,setSong] = useState('')

    let songsPlaylist = useSelector(state=>state.songsStore)
    // console.log(songsPlaylist);

let dispatch = useDispatch()

let addSongClick =()=>{
    dispatch( addSong(song) )
}

let removeSongClick =()=>{
    dispatch(removeSong(song))
}

  return (
    <div>
        <h1>Songs</h1>
        <input type="text" value={song} onChange={(e)=>setSong(e.target.value)} />
        <button onClick={addSongClick}>Add Song</button>
{
    songsPlaylist.map((ele,index)=>{
        return <div key={ele}>
            <h1>{ele} <button onClick={removeSongClick}>Remove</button> </h1>
        </div>
    })
}

        <hr />
    </div>
  )
}

export default Songs