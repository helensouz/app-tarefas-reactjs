import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import {v4 as uuidv4} from 'uuid'

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'estudar programacao',
      description: 'estou aprendendo reactjs',
      completed: false
    },
    {
      id: '2',
      title: 'Ler livros ',
      description: 'estou lendo ficcao ',
      completed: true
    },
    {
      id: '3',
      title: 'Jogar ',
      description: 'estou jogando League of legends ',
      completed: true
    },
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}
      return task;
  })
  setTasks(newTasks)
  }
    




  const handleTaskAdd = (taskTitle) => {
    const newTasks = 
    [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]

    setTasks(newTasks)
  }
  
  return (
    <>
          <div className="container">
          <AddTask handleTaskAdd={handleTaskAdd}/>
          <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
          

          </div>
      
    </>
  )

  
}


export default App