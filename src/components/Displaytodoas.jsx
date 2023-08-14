import React from 'react'
// , { useState }
import Displaycounts from './Displaycounts'
import { Card, Col, Container, ListGroup,  Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { deleteTodo } from '../redux/actions/todo'
// import { deleteTodo } from '../redux/actions/todo'

const Displaytodoas = ({todos,deleteTodo}) => {

  return (
    <Container>
        <Row>
            <Col>
            <Card className='mt-3 shadow-sm'>
                <Card.Body>
                    <h3>All Todo's here</h3>
                    <Displaycounts/>
                    <ListGroup>
                    {
                        todos.map((todos,index)=>(
                            <ListGroup.Item key={index}>
                                    <h4>
                                        {
                                           todos.title 
                                        }
                                    </h4>
                                    <p>
                                        {
                                            todos.description
                                        }
                                    </p>
                                    <Button onClick={event=>deleteTodo(todos.id)

                                    } variant="outline-danger">Delete</Button>
                            </ListGroup.Item>
                            
                        ))


                    }
                    </ListGroup>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
  )
}

const mapStateToProps = (state) => ({
    todos: state.todoReducer // Use state.todoReducer instead of state.todos
  });

const mapDispatchToProps=(dispatch)=>({
    deleteTodo:(id)=>(dispatch(deleteTodo(id)))
})

export default connect(mapStateToProps,mapDispatchToProps) (Displaytodoas)
