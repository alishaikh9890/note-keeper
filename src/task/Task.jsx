import React,{useState} from 'react'
import AddTask from './AddTask'

import { v4 as uuidv4 } from 'uuid';
import List from './List';


function Task(){

    const initialTask = {id:null, title:"", note:"", todo:[], status:false}

    const [task, setTask] = useState(initialTask);
    const [taskList, setTaskList] = useState([])
    const [count, setCount] = useState(0);
    const [openNote, setOpenNote] = useState(false)


    function statusTodo(ele_id, el_id){

        // taskList.map((ele) => ele.id== ele_id ? {...ele, todos.map(el=> el.id == el_id ? {...el, status : !el.status} : el)} : ele)

        let newTAsk =  taskList.find(ele => ele.id == ele_id)
        
        
       newTAsk.todos = newTAsk.todos.map(el=> el.id == el_id ? {...el, status : !el.status} : el)

        console.log(newTAsk)
        
       let newtasklist =  taskList.map((ele) => ele.id== ele_id ? ele = newTAsk : ele)

        setTaskList(newtasklist)
    }

    function handleChange(event, index=-1){
            // todo.push(e)
            const {name, value} = event.target;

            if(name == "title")
            {
                setTask({
                    ...task,
                    title:value
                })
            } else if(name == "note") 
            {
                setTask({
                    ...task,
                    note:value
                })
            } else if(index != -1 && name=="todo")
            {
                let newTodo = [...task.todo];
                newTodo[index] = {
                    to: value,
                    status: false,
                    id: uuidv4()
                }
                setTask({
                    ...task,
                    todo:newTodo
                })
                setCount(2+index)
            }
            console.log(task)

    }
// console.log(todo)

    function handleTask(){

        setTaskList([...taskList, {...task, id:uuidv4()}])

        setTask(initialTask)

        setCount(0)
        setOpenNote(false)
    }

    function delTask(id){
        // console.log(id)
       const update = taskList.filter((ele)=> ele.id !=id)

       setTaskList(update)
    }


    function editTask(id){
     
         const update = taskList.map(ele=> ele.id == id ? {...ele, status: !ele.status} : ele);

         setTaskList(update)

    }


        // console.log(taskList)

  return (
    <>
        <AddTask handleTask={handleTask} setTask={setTask} task={task} count={count} setCount={setCount} handleChange={handleChange} setOpenNote={setOpenNote} openNote={openNote} />
        <List taskList={taskList} delTask={delTask} editTask={editTask} statusTodo ={statusTodo} />

    </>
  )
}

export default Task