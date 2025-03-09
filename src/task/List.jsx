import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";


function List({ taskList, delTask, editTask, statusTodo }) {
  return (
    <>
      <Container className="my-3">
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
                <h5>{ele.task}</h5>
                <Button variant="text" color="primary">
                  📌
                </Button>
                </div>
                <ul className="list-group list-group-flush list-group-item-light">
                  {ele.todos.map((el) => (
                    <li key={el.id} className="list-group-item px-0">
                      <input
                        className="form-check-input"
                        onClick={() => statusTodo(ele.id, el.id)}
                        type="checkbox"
                        // value={el.status ? "checked" : ""}
                        id="firstCheckbox"
                      />
                      <label
                        className={el.status ? "form-check-label ms-2 text-decoration-line-through text-body-tertiary" : "form-check-label ms-2"}
                        for="firstCheckbox"
                      >
                        {el.to}
                      </label>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => editTask(ele.id)}
                  variant="outline-light"
                  className="btn btn-sm rounded-circle"
                >
                  ✒️
                </Button>
                <Button
                  onClick={() => delTask(ele.id)}
                  variant="outline-light"
                  className="btn btn-sm rounded-circle"
                >
                  🗑️
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default List;
