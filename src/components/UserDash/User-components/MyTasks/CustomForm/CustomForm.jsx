import React, { useState } from 'react'
import './CustomForm.css'

import { UilPlus } from '@iconscout/react-unicons';

const CustomForm = ({ addTask }) => {

    const [task, setTask] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        })
        setTask("")
    }

  return (
    <form className='todo wrapper' onSubmit={handleFormSubmit}>
            <input 
                type="text" 
                name="" 
                id="task" 
                value={task}
                onInput={(e) => setTask(e.target.value)}
                className="Input" 
                placeholder='Add a new task'
                required
                autoFocus
                maxLength={60}
            />
            <button
                className="btn"
                aria-label="Add Task"
                type="submit"
            >
                <span><UilPlus/></span>
            </button>
    </form>
  )
}

export default CustomForm