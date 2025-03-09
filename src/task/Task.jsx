import React,{useState} from 'react'
import AddTask from './AddTask'

import { v4 as uuidv4 } from 'uuid';
import List from './List';


function Task(){

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([])
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([])



    function statusTodo(ele_id, el_id){

        // taskList.map((ele) => ele.id== ele_id ? {...ele, todos.map(el=> el.id == el_id ? {...el, status : !el.status} : el)} : ele)

        
        let newTAsk =  taskList.find(ele => ele.id == ele_id)
        
        
       newTAsk.todos = newTAsk.todos.map(el=> el.id == el_id ? {...el, status : !el.status} : el)

        console.log(newTAsk)
        
       let newtasklist =  taskList.map((ele) => ele.id== ele_id ? ele = newTAsk : ele)

        setTaskList(newtasklist)
    }

    function handleTodo(ele, index){
            // todo.push(e)

            let newTodo = [...todo];

            newTodo[index] = {
                to: ele,
                status: false,
                id: uuidv4()
            }

            setCount(2+index)

            setTodo(newTodo)

    }
// console.log(todo)

    function handleTask(){

        let obj = {
            task,
            status: false,
            todos:todo,
            id: uuidv4()
        }

        // taskList.push(obj);
    //    taskList  = [...taskList, obj]

        setTaskList([...taskList, obj])

        setTask("")

        setCount(0)
        setTodo([])

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
        <AddTask handleTask={handleTask} setTask={setTask} task={task} count={count} setCount={setCount} handleTodo={handleTodo}  />
        <List taskList={taskList} delTask={delTask} editTask={editTask} statusTodo ={statusTodo} />
    </>
  )
}

export default Task