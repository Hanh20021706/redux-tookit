import {createSlice} from '@reduxjs/toolkit'


const todosSlice = createSlice({
    name : 'todos',
    initialState:{
        allTodos : [
            {
                id: 1,
                title: "viec 1",
                completed: false,
              },
              {
                id: 2,
                title: "viec 2",
                completed: false,
              },
              {
                id: 31,
                title: "viec 3",
                completed: false,
              }
        ]
    }
})

// reducer
const todosReducer = todosSlice.reducer

//selecter

export const todosSelecter = state => state.todosReducer.allTodos

export default todosReducer