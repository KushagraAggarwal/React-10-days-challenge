import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./component/Form";
import Header from "./component/Header";
import TodoList from "./component/TodoList";


function App() {
  const initialState = localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : [];
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(initialState)
  const [editTodo, setEditTodo] = useState(null)


  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  return (
    <div className="container">
      <div className="app-wraper">
        <Header />
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
