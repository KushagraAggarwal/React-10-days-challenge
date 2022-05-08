import React from 'react'

function TodoList({todos,setTodos, editTodo, setEditTodo}) {

    const handleDelte = ({id})=>{
        setTodos(todos.filter((todo)=>{
            return todo.id!==id
        }))

    }

    const handleComplete = (todo)=>{
        todos = [...todos];
        todos.map(item=>{
            if(item.id===todo.id){   
                item.completed = !item.completed;
        }

        setTodos(todos)
        return item;
    })
    }

    const handleEdit = ({id})=>{
        const findTodo=todos.find(item=>{
            return item.id===id
        })
        setEditTodo(findTodo)
    }

  return (
    <div>
        {todos.map(todo=>{
             return (<li className='list-item' key={todo.id}>
                <input type='text' value={todo.title} className={`list ${todo.completed?"complete":""}` }onChange={(e)=>{e.preventDefault()}}/>
                <div>
                    <button className='button-complete task-button' onClick={()=>handleComplete(todo)}>
                        <i className='fa fa-check-circle'></i>
                    </button>
                    <button className='button-edit task-button' onClick={()=>{handleEdit(todo)}}>
                        <i className='fa fa-edit'></i>
                    </button>
                    <button className='button-delete task-button' onClick={()=>{handleDelte(todo)}}>
                        <i className='fa fa-trash'></i>
                    </button>
                </div>
            </li>)
        })}
    </div>
  )
}

export default TodoList