import { useEffect , useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../../hooks/useAjax.js';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


import Pagination from './pagination.js'
import PaginationContext from '../context/pagination-context.js'
import ChangeNumberOfPages from './itemperpage.js'

import './todo.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const ToDo = () => {
  const [list, fetchingData] = useAjax(todoAPI);

  useEffect(fetchingData, [fetchingData]);

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
                  <TodoForm handleSubmit={fetchingData} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <PaginationContext list={list}>

            <Col md={{ span: 5, offset: 2 }} className="list-item">
              <ChangeNumberOfPages />
              <TodoList list={list} handleComplete={fetchingData} handleDelete={fetchingData} />
              <Pagination totalitems={list.length} />
            </Col>

          </PaginationContext>
        </Row>
      </Container>
    </>
  );

}


export default ToDo;
