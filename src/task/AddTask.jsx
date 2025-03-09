import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

const AddTask = ({handleTask, setTask, task, count, setCount, handleTodo}) => {

  

  return (
    <>
        <Container className='my-3 px-3'>
            <Row >
                <Col lg={8} className="mx-auto p-2 shadow-1 bg-light rounded-4">
                <div className='d-flex'>
                    <input className='form-control border-0' placeholder="Enter Task" value={task} onChange={(e) =>{ setTask(e.target.value); setCount(1)}}/>
                    <Button className='rounded-circle  btn btn-outline-secondary btn-sm  my-auto' onClick={handleTask} >➕</Button>
                </div>
                  
                    <div className="row pe-4">
                     {  [...Array(count)].map((ele, index) =>(
                            <div key={index} className="col-12 px-3 pt-1 d-flex" >
                            <b className=' bg-light p-0 m-auto' style={{width:'20px'}} >📋</b>
                                    <input className='form-control form-control-sm border-0 border-top' onChange={(e) => {handleTodo(e.target.value, index)}} placeholder={ index + " todo no"} />
                            </div>
                       ))}
                       
                    </div>
                </Col>
                <Col lg={1} className="mx-auto d-flex">
                    
                </Col>
                <Col lg={2}></Col>

            </Row>
        </Container>
    </>
  )
}

export default AddTask