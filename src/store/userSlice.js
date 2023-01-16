import { createSlice } from "@reduxjs/toolkit"

const user=createSlice({
    name:'user',
    initialState:{
        token:'',
        isAuth:false,
        name:'',
        avatar:'',
        

    },
    reducers:{
        setAuth(state,action){
            state.token.push(33)
        }
    }
})

export const {setAuth}=user.actions
export default user.reducer 