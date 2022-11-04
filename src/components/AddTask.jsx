import React from "react";
import { useState } from "react";
import './AddTask.css'
import Button from "./Button";

const AddTask = ({handleTaskAdd}) => {
  const [inputData, setInputData] = useState('')

  const handleInputChange = (e) => { //recebe e-> evento
    setInputData(e.target.value)

  }

  const handleAddTaskClick = () => {
    handleTaskAdd(inputData)
    setInputData("")
  }
    return(
      <div className="add-task-container">
      <input
      value={inputData}
       onChange={handleInputChange} className="add-task-input" type="text" />
      <div className="add-task-button-container">
      <Button onClick={handleAddTaskClick}> Adicionar </Button>
      </div>
      
    
      </div>

    )
      
}
 
export default AddTask;