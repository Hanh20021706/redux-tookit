import React from 'react'
import { useSelector } from 'react-redux'
import { todosSelecter } from '../store/reducer/todosSlice'
const NavBar = () => {

    const todos = useSelector(todosSelecter)

  return (
    <div className='navbar'>
        <h1>
            redux app todo
        </h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Total : {todos.length}</li>
        </ul>
    </div>
  )
}

export default NavBar