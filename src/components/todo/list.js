import React, { useContext } from 'react';

import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Toast from "react-bootstrap/Toast";

import { PaginationContext } from '../context/pagination-context.js';

const TodoList = (props) => {
  const pagination = useContext(PaginationContext);

  return (
    <ListGroup>
      {pagination.current.map(item => (
        <Toast action className={`complete-${item.complete.toString()}`} key={item._id} onClose={() => {
          props.handleDelete(item._id, 'delete');
        }}>
          <Toast.Header>
            <Badge pill variant={item.complete ? "danger" : "success"} onClick={() => {
							props.handleComplete(item._id, 'put');
						}}>{item.complete ? "Complete" : "Pending..."}</Badge>{" "}
            <strong className="mr-auto" style={{ marginLeft: '20px' }}>{item.assignee}</strong>
          </Toast.Header>
          <Toast.Body >
            {item.text}
            <div class="difficulty">Difficulty: {item.difficulty}</div>
          </Toast.Body>
        </Toast>
      ))}
    </ListGroup>
  );
}

export default TodoList;





