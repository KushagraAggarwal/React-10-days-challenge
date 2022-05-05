import React, { useState, useRef, useEffect} from 'react'

function TodoForm(props) {

    const [input,setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })

    const handleSubmit= (e)=>{
        e.preventDefault();
        props.onSubmit({
        id: Math.floor(Math.random()*10000),
        text: input
        })

        setInput('')
    }

    const handleChange= (e)=>{
        setInput(e.target.value)
    }

  return (
    <div className='todo-form' >
        <input type='text' placeholder='Add a todo' value={input} name='text' className='todo-input' onChange={handleChange} ref={inputRef}/>
        <button type='submit' className='todo-button' onClick={handleSubmit}>Add Todo</button>
    </div>
  )
}

export default TodoForm