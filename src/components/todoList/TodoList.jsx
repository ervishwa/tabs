import React, { useState } from "react";
import "./todolist.scss";

const intalData = ["walk the dog", "Water the plants", "Wash the dishes"];

export const TodoList = () => {
  const [task, setTask] = useState("");
  const [data, setData] = useState(intalData);


  const handelClick = ()=>{
    const newData = [...data,task];
    setData(newData);
    setTask("");
  }
  
  const deleteTask = (e)=>{
   const id = e.target.id ;
   if (
    window.confirm(
      'Are you sure you want to delete the task?',
    )
  ){
   const newdata = data.filter((curr,idx)=>{
    if(idx!=id){
      return curr;
    }
   })
   setData(newdata);
  }
  }

  const Tasks = data.map((curr,idx)=>(
       <div key={idx} className="tasks">
        <li>
              <span className="taskname">{curr}</span>
              <button  className="taskDelete" onClick={deleteTask} id={idx}>Delete</button>
        </li>
       </div>
  ))

  return (
    <div className="todolist">
      <h1 className="heading">Todo List</h1>
      <div className="inputTask">
        <input
          className="input"
          type="text"
          placeholder="Add your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div className="submitbutton">
          <button  className="button" onClick={handelClick}>Submit</button>
        </div>
      </div>
      <ul className="tasksul">
        {Tasks}
      </ul>
    </div>
  );
};


