import React, {useEffect} from 'react';
import './../App.css'
import {v4 as uuidV4} from "uuid";

function Form({input, setInput, todos, setTodos, editTodo, setEditTodo}) {

    const updateTodo = (title, id, complete)=>{
        const newTodo = todos.map(item=>{
            return item.id===id?{title, id, complete}: item;
        })
        setTodos(newTodo)
        setEditTodo(null)
    }

    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title)
        }else{
            setInput("")
        }
    }, [setInput,editTodo])

    const onInputChange = (e)=>{
        setInput(e.target.value)
    }
    const onFormSubmit=(e)=>{
        e.preventDefault();
        if(!editTodo){
        setTodos([...todos, {id:uuidV4(), title:input, completed: false}])
        setInput('')
        }else{
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }
  return  (
    <form onSubmit={onFormSubmit}>
        <input type="text" placeholder='Enter a todo...' className='task-input' value={input} required onChange={e=>onInputChange(e)}/>
        <button className='button-add' type="submit">
            {editTodo? "OK" : "Add" }
            </button>
    </form>
  )
}

export default Form