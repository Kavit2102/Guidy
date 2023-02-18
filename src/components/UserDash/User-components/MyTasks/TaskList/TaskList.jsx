import React from 'react'
import './TaskList.css'

import TaskItem from '../TaskItem/TaskItem'
import styles from './TaskList.module.css';

const Mytasks = ({tasks,deleteTask, toggleTask, enterEditMode }) => {  

  return (    
    <div className="taskList">
      <ul className={styles.tasks}>
      {
        tasks.sort((a,b)=>b.id-a.id).map(task =>(
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
          />
        ))
      }
      </ul>
    </div>
  )
}

export default Mytasks

        