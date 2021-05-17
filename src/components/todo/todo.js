import { useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// import axios from 'axios';
import useAjax from '../../hooks/useAjax.js';

import './todo.scss';

const ToDo = () => {
  const [list, _addItem, _toggleComplete, _getTodoItems, _deleteTask] = useAjax();

  useEffect(_getTodoItems, [_getTodoItems]);

  useEffect(() => {
    document.title = `To Do List: ${list.filter(item => !item.complete).length}`;
  });

  return (
    <>
      <Navbar class="navBar" expand="lg" variant="dark" bg="dark" style={{ width: '80%', margin: '30px auto 0' }}>
        <Navbar.Brand>There are {list.filter((item) => !item.complete).length} Items To Complete.</Navbar.Brand>
      </Navbar>

      <Container fluid="md" style={{ marginTop: '50px' }}>
        <Row className="justify-content-md-center">
          <Col sm={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>
                  <TodoForm handleSubmit={_addItem} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={{ span: 5, offset: 2 }} className="list-item">
            <TodoList list={list} handleComplete={_toggleComplete} handleDelete={_deleteTask} />
          </Col>
        </Row>
      </Container>
    </>
  );

}


export default ToDo;
