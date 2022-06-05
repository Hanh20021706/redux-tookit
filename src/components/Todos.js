import React from "react";
import { useSelector } from "react-redux";
import { todosSelecter } from "../store/reducer/todosSlice";

const Todos = () => {
    
    const todos = useSelector(todosSelecter)
    // moc todosSelecter ra tu store bang alltodo trong store

    return (
        <div className="todo-list">
            <ul>
                {todos.map(todo => (<li key={todo.id}>{todo.title}</li>))}
            </ul>
        </div>

    );
};

export default Todos;
