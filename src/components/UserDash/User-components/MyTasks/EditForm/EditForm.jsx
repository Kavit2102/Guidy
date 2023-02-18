import React,{ useState} from 'react'
import './EditForm.css'

import { UilCheck } from '@iconscout/react-unicons'

const EditForm = ({ editedTask, updateTask }) => {
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        updateTask({...editedTask, name: updatedTaskName})
      }

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      >
      <form
        className="todo wrapper2"
        onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />

        <button
          className="btn"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          type="submit"
          >
          <span><UilCheck/></span>
        </button>        
      </form>
    </div>
  )
}

export default EditForm