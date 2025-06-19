
import { Form, Row, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextareaAutosize from 'react-textarea-autosize';

function EditTask({show, setShow, title, note, todo}) {
    console.log(todo)

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Form.Group className='mb-3'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder='Edit Title' className='shadow-none' value={title} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Note</Form.Label>
                    <TextareaAutosize
                        name="note"
                        value={note}
                        className="form-control shadow-none border "
                        style={{fontSize:"14px"}}
                        minRows={1}
                        maxRows={8}
                        placeholder="Edit Note"
                        />
                </Form.Group>
              
                <Form.Group className='mb-3'>
                    <Form.Label>Todo</Form.Label>
                    <div className=''>
                        {
                            todo.map((t, index)=>(
                            <div key={t.id} className="col-12 mb-2 d-flex align-items-center gap-2" >
                               <input className='form-check-input' type='checkbox' />
                               <input className='form-control form-control-sm shadow-none' value={t.to} name="todo"  placeholder={ index + " todo no"} />
                                <button className='rounded-circle btn btn-outline-secondary border-0 btn-sm p-0 px-1 fw-bold'>
                                    <i className="bi bi-x-lg"></i>
                                </button>
                            </div>
                            ))
                        }
                    </div>
                </Form.Group>
            </Row>
        </Modal.Body>
        <Modal.Footer className='text-center'>
          <Button variant="success" >
            Update
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask;