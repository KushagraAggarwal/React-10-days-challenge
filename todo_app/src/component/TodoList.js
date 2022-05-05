import React, { useState } from 'react'
import TODO from './Todo';
import TodoForm from './TodoForm'

function TodoList() {

    const [todos,setTodos] = useState([])

    const addTodo = todo=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [...todos,todo]
        setTodos(newTodos)
    }



    const updateTodo = (newVal,id)=>{
        if(!newVal.text || /^\s*$/.test(newVal.text)){
            return;
        }

        setTodos(prev =>
            {
                prev.map(item=>
                    {
                      return  item.id===id ? newVal:item;
                    }
                )
            }
        )
    }


    const removeTodo=(id)=>{
        const newArr=[...todos].filter(todo=>{
           return id !== todo.id
        })
        setTodos(newArr)
    }

    const completeTodo=(id)=>{
        let updatedTodos = todos.map(
            todo=>{
                if(todo.id===id){
                    todo.isComplete=!todo.isComplete
                }
                return todo;
            })
            setTodos(updatedTodos)
    }

  return (
    <div>
        <h1>What's the plan for today</h1>
        <TodoForm onSubmit={addTodo}/>
        <TODO todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList