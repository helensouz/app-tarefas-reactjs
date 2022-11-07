import React, { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import  Tasks from "./components/Tasks";
import TaskDetails from "./components/TaskDetails";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import {v4 as uuidv4} from 'uuid'
import axios from  'axios';
import { useEffect } from "react";

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
  ]);


  useEffect(() => { //ira executar sempre que algo mudar
    const fetchTask = async () => {
      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10")

      setTasks(data)

    }
    fetchTask()


  }, [])

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

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setTasks(newTasks)
  }
  
  return (
    
    <BrowserRouter>

     <div className="container">
     <Header />
    
        
    
      <Route path="/" 
            exact
                render={() => (
                  <>
                   <AddTask handleTaskAdd={handleTaskAdd}/>
                   <Tasks
                  tasks={tasks}
                    handleTaskClick={handleTaskClick}
                   handleTaskDelete={handleTaskDelete}
                   />
                  </>
                )}
                />

                <Route path="/:taskTitle"  exact component={TaskDetails}/>
   
   
           </div> 
          </BrowserRouter>
    
  )

  // <AddTask handleTaskAdd={handleTaskAdd}/>
  // <Tasks tasks={tasks}
  // handleTaskClick={handleTaskClick}
  // handleTaskDelete={handleTaskDelete}/>

  
}


export default App