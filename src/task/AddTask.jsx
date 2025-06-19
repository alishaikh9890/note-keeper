
import TextareaAutosize from 'react-textarea-autosize';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AddTask = ({handleTask, task, count, setCount, handleChange, setOpenNote, openNote}) => {

  

  return (
    <>
        <Container className='my-3'>
            <Row className='p-2'>
                <Col lg={8} className="mx-auto p-1 pe-2 shadow-1 bg-light rounded-2">
                <div className='d-flex justify-content-center bg-white align-items-center'>
                    <input className='form-control border-0 shadow-none rounded-2 fw-bold'  placeholder="Enter Task" value={task.title} name="title" onChange={(e) =>{handleChange(e); !count && setOpenNote(true)}}/>
                   {!count &&   <input type='checkbox' onChange={()=>{setCount(1); setOpenNote(false)}} className='form-check-input' style={{transform:"translateX(-40px)"}} /> }
                    <Button variant='outline-secondary' className='rounded-circle btn-sm my-auto py-0 px-1 fs-5' onClick={handleTask} ><i className="bi bi-plus-lg"></i></Button>
                </div>
                     {openNote && <TextareaAutosize
                        name="note"
                        value={task.note}
                        onChange={(e)=>handleChange(e)}
                        className="form-control shadow-none fs-6 border-0 small"
                        minRows={1}
                        maxRows={8}
                        placeholder="Take Note"
                        />} 
                  
                    <div className="row pe-4">
                     {  [...Array(count)].map((ele, index) =>(
                            <div key={index} className="col-12 px-3 pt-1 d-flex align-items-center gap-2" >
                               <input className='form-check-input' type='checkbox' />
                               <input className='form-control form-control-sm shadow-none' name="todo" onChange={(e) => {handleChange(e, index)}} placeholder={ index + " todo no"} />
                                <button className='rounded-circle btn btn-outline-secondary border-0 btn-sm p-0 px-1 fw-bold'>
                                    <i className="bi bi-x-lg"></i>
                                </button>
                            </div>
                       ))} 
                    </div>
                   {
                   (count || openNote) && <div className='d-flex justify-content-end pt-2 px-5'>
                       <button className='btn btn-sm btn-outline-secondary border-0 py-1'>Close</button>
                    </div>
                   }
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default AddTask