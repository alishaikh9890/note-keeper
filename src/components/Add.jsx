import React from 'react'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import List from './List';



function Add({}) {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([])
  
    
  
      
    function handlTask(){
    
      let obj =  {
        task,
        status: false,
        id :uuidv4()
      }
    
      setTaskList([...taskList, obj])
    }
  


  return (
    <div>
        <div className="container border">
            <input type="text" onChange={(e) => setTask(e.target.value)} />
            <input type="text" onChange={(e) => setTask(e.target.value)} />
            <input type="text" onChange={(e) => setTask(e.target.value)} />
            <button onClick={handlTask}>Add</button>
        </div>
        <List list={taskList} setTaskList={setTaskList} />
    </div>

  )
}

export default Add