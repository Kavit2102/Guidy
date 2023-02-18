import React,{useState} from 'react'
import './RightSide.css'

import Mytasks from '../Mytasks/Mytasks'
import CustomForm from '../CustomForm/CustomForm'
import EditForm from '../EditForm/EditForm'

import Resources from '../Resources/Resources';
import Overallprogress from '../Overallprogress/Overallprogress';

import useLocalStorage from '../../../../hooks/useLocalStorage'


const RightSide = () => {

    const [tasks, setTasks] = useLocalStorage('react-todo.tasks', [])
    const [previousFocusEl, setPreviousFocusEl] = useState(null);
    const [editedTask, setEditedTask] = useState(null);
    const [isEditing, setIsEditing] = useState(false);


    const addTask = (task) => {
        setTasks(prevState => [...prevState, task])
    }

    const deleteTask = (id) => {
        setTasks(prevState => prevState.filter(t => t.id !== id));
      }
    
      const toggleTask = (id) => {
        setTasks(prevState => prevState.map(t => (
          t.id === id
            ? { ...t, checked: !t.checked }
            : t
        )))
      }
    
      const updateTask = (task) => {
        setTasks(prevState => prevState.map(t => (
          t.id === task.id
            ? { ...t, name: task.name }
            : t
        )))
        closeEditMode();
      }
    
      const closeEditMode = () => {
        setIsEditing(false);
        previousFocusEl.focus();
      }
    
      const enterEditMode = (task) => {
        setEditedTask(task);
        setIsEditing(true);
        setPreviousFocusEl(document.activeElement);
      }
    

  return (
    <div className="RightSide">
        {/* My tasks */}
        <div className="myTask">
            <div className="addTask">
                <CustomForm  addTask={addTask}/>
            </div>

            <div className="edittask">
            {
                isEditing && (
                <EditForm
                    editedTask={editedTask}
                    updateTask={updateTask}
                    closeEditMode={closeEditMode}
                />
                )
            }
            </div>

            <div className="mytasks">
                {tasks && (
                <Mytasks
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                enterEditMode={enterEditMode}
                />
      )}
            </div>
        </div>

    </div>


  )
}

export default RightSide