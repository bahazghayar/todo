import { useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import useAjax from '../../hooks/useAjax.js';

import Pagination from './pagination.js'
import PaginationContext from '../context/pagination-context.js'
import ChangeNumberOfPages from './itemperpage.js'

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
          <PaginationContext list={list}>

            <Col md={{ span: 5, offset: 2 }} className="list-item">
              <ChangeNumberOfPages />
              <TodoList list={list} handleComplete={_toggleComplete} handleDelete={_deleteTask} />
              <Pagination totalitems={list.length} />
            </Col>

          </PaginationContext>
        </Row>
      </Container>
    </>
  );

}


export default ToDo;
