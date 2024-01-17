import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const fetchUsers = createAsyncThunk('users/fetch',async()=>{
let response = await axios.get('http://localhost:4000/users')


return response.data
})