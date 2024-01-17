import { configureStore, createSlice } from "@reduxjs/toolkit";



let songsSlice = createSlice({
    name:'song',
    initialState:[],
    reducers:{
        // 👇 type = song/addSong
        addSong(state,action){
            state.push(action.payload)
        },
        //👇 type:song/removeSong
        removeSong(state,action){
         const index = state.indexOf(action.payload)
         state.splice(index,1)
        },
    },
    extraReducers(builder){
        builder.addCase(moviesSlice.actions.reset,(state,action)=>{
            return []
        })
    }
})



let moviesSlice = createSlice({
    name:'movie',
    initialState:[],
    reducers:{
        addMovie(state,action){
            state.push(action.payload)
        },
        removeMovie(state,action){
            const index = state.indexOf(action.payload)
            state.splice(index,1)
        },
        reset(state,action){
            return []
        }
    }
})

export const store = configureStore({
    reducer:{
        songs:songsSlice.reducer,
        movies:moviesSlice.reducer
    }
})

export const {addSong,removeSong} = songsSlice.actions 
export const {addMovie,removeMovie, reset} = moviesSlice.actions

// console.log(store);
// console.log( store.getState() );

// store.dispatch({
//     type:'song/addSong',payload:'Titanic vocal'
// })

// console.log(store.getState());




// 1. define initial state
// 2.  create mini reducers
// 3.  combine mini-reducer into big reducer

