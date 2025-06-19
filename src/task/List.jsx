import React, { useState } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import EditTask from "./EditTask";


function List({ taskList, delTask, editTask, statusTodo }) {

  const [show, setShow] = useState(false);


  return (
    <>
      <Container className="my-3 p-2">
        <Row className="g-2">
          {taskList.map((ele) => (
            <Col lg={4} xs={6} sm={6} key={ele.id}>
              <div
                className={
                  ele.status
                    ? "bg-success-subtle border rounded-3 p-2 "
                    : "bg-light border rounded-3 p-2 shadow-2"
                }
              >
                <div className="d-flex justify-content-between">
                <h5>{ele.title}</h5>
                <Button variant="text" color="primary">
                  📌
                </Button>
                </div>
                <div className="small">
                  {ele.note}
                </div>
                <ul className="list-group list-group-flush list-group-item-light">
                  {ele.todo.map((el) => (
                    <li key={el.id} className="list-group-item px-0">
                      <input
                        className="form-check-input"
                        onClick={() => statusTodo(ele.id, el.id)}
                        type="checkbox"
                        // value={el.status ? "checked" : ""}
                        id="firstCheckbox"
                      />
                      <label
                        className={el.status ? "form-check-label ms-2 text-decoration-line-through text-body-tertiary small" : "form-check-label ms-2 small"}>
                        {el.to}
                      </label>
                    </li>
                  ))}
                </ul>

                <div className="d-flex justify-content-end gap-3">
                    <Button
                    onClick={() => setShow(!show) }
                    variant="outline-secondary"
                    className="btn btn-sm rounded-circle border"
                    >
                      <i className="bi bi-pencil"></i>
                    </Button>
                    <Button
                    onClick={() => delTask(ele.id)}
                    variant="outline-secondary"
                    className="btn btn-sm rounded-circle border"
                    >
                       <i className="bi bi-trash"></i>
                    </Button>
                    <Button
                    onClick={() => delTask(ele.id)}
                    variant="outline-secondary"
                    className="btn btn-sm rounded-circle border"
                    >
                      <i className="bi bi-three-dots-vertical"></i>
                    </Button>
                </div>
              </div>
              <EditTask show={show} setShow={setShow} {...ele}/>
            </Col>
          ))}
        </Row>
      </Container>

    </>
  );
}

export default List;
