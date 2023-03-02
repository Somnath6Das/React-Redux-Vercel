import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCondition } from "../helpers/fetch2";


const initialState = {
    token: null,
    loading: false,
    error: ""
}


export const signupUser = createAsyncThunk(
    'signupuser',
    async (body) => {
        const result = await fetchCondition(`/signup`, body);
        return result;

    }, 
   
)
export const signinUser = createAsyncThunk(
    'signinuser',
    async (body) => {
        const result = await fetchCondition(`/signin`, body);
        return result;

    }
)
export const addToken = createAsyncThunk(
    'addtoken',
    async ()=> {
        const result = await AsyncStorage.getItem('token');
        return result
    }
)
 const authReducer = createSlice({
    name: "user",
    // key and value same of initialState,
    initialState,
    reducers: {
        logout:(state, action)=>{
            state.token = null
            AsyncStorage.removeItem('token')
        }
       

    },
    extraReducers: {   
        [signupUser.fulfilled]: (state, { payload: { error, message } }) => {
            state.loading = false;
            if (error) {
                state.error = error;
               alert(error);
            } else {
                // message comes from api of signup user.
                state.error = message;
                alert(message);
            }
        },
        [addToken.fulfilled]:(state, action)=> {
            state.token = action.payload
        },
        [signupUser.pending]: (state, action) => {
            state.loading = true
        },

        [signinUser.pending]: (state, action) => {
            state.loading = true
        },
        [signinUser.fulfilled]: (state, { payload: { error, token} }) => {
            state.loading = false;
            if (error) {
                state.error = error;
                alert(error);
            } else {
                state.token = token;
                // save token on local storage
                AsyncStorage.setItem('token', token);            }
        },
    }
});
// export to App.js todo.js
export const { logout } = authReducer.actions;
// export to ReduxStore.js and Auth.js
export default authReducer.reducer;