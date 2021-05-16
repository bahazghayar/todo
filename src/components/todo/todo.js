import { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './todo.scss';

const ToDo = () => {

  const [list, setList] = useState([])

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let listArr = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(listArr);
    }

  };

  useEffect(() => {
    let listInfo = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];

    setList(listInfo);
  }, [])

  useEffect(() => {
    document.title = `To Do List: ${list.filter(item => !item.complete).length}`;
  })

  // componentDidMount() {
  //   let list = [
  //     { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
  //     { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
  //     { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
  //     { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
  //     { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
  //   ];

  //   this.setState({list});
  // }


  return (
    <>
    
      <Navbar class = "navBar" expand="lg" variant="dark" bg="dark" style={{ width: '80%', margin: '30px auto 0'}} >
        <Navbar.Brand>There are ({list.filter((item) => !item.complete).length}) Items To Complete.</Navbar.Brand>	
      </Navbar>

      
      <Container fluid="md" style={{ marginTop: '50px' }} >
        <Row className="justify-content-md-center">
          <Col sm={4}>
            <Card>
              <Card.Body>
                <Card.Text>
                  <TodoForm handleSubmit={addItem} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={{ span: 5, offset: 2 }}>
            <TodoList list={list} handleComplete={toggleComplete} />
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default ToDo;
