import React from 'react'

const List = ({list, setTaskList}) => {

    // console.log(list)


    
function updateTask(id){
    const update = list.map((ele) => ele.id === id ? {...ele, status: !ele.status} : ele)
    setTaskList(update)
    }
    
    function delTask(id)
    {
      const deleData = list.filter((ele) => ele.id != id)
      setTaskList(deleData)
    }
    
    

  return (
    <div>
    <div className="container border">
      {
        list?.map((ele) => (
          <div className={ele.status ? "row bg-success-subtle" : "row bg-danger-subtle"} key={ele.id}>
            <div className="col-2">{ele.task}</div>
            <div className="col-2"><button className="btn btn-primary" onClick={() => updateTask(ele.id)}>{ele.status ? "completed" : "not completed"}</button></div>
            <div className="col-2"><button className='btn btn-secondary' onClick={() => delTask(ele.id)}>Delete</button></div>
          </div>
        ))
      }
   </div>
    </div>
  )
}

export default List