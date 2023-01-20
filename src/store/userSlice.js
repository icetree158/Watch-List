import { createSlice } from "@reduxjs/toolkit"

const user = createSlice({
    name: 'user',
    initialState: {
        password: '',
        isAuth: false,
        name: '',
        email:'',
        avatar: {},


    },
    reducers: {
        setAuth(state, action) {
            state.isAuth = !state.isAuth
        },
        setAvatar(state, action) {
          
            state.avatar = action.payload
        },
        SetRegistration(state,action){
            state.name=action.payload.name
            state.email=action.payload.email
            state.password=action.payload.password
            state.isAuth=true
            
        }
    }
})

export const { setAuth, setAvatar,SetRegistration } = user.actions
export default user.reducer 