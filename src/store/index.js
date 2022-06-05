// file luu tru toan bo du lieu


import {configureStore} from '@reduxjs/toolkit'
import todosReducer  from './reducer/todosSlice'



// store 
const store = configureStore({
    reducer: {
        todosReducer
        //todos chi la cai ten
    }
})



export default store


