import React, { useState } from "react";
import "./MyTasks.css";

import TaskList from "../MyTasks/TaskList/TaskList";
import CustomForm from "../MyTasks/CustomForm/CustomForm";
import EditForm from "../MyTasks/EditForm/EditForm";

import useLocalStorage from "../../../../hooks/useLocalStorage";

const MyTasks = () => {
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  };

  return (
    <div className="myTasks">
      <span>My Tasks</span>
      {/* My tasks */}
      <div className="addeditTask">
        <CustomForm addTask={addTask} />
        {isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )}
      </div>

      {/* task List */}
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
};

export default MyTasks;
