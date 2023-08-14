import React, { useState } from 'react'
import { Container, Row,Col,Card, Form ,Button} from 'react-bootstrap'
import Displaycounts from './Displaycounts'
import { addTodo } from '../redux/actions/todo'
import { connect } from 'react-redux'
import { v4 } from 'uuid'

const Addtodo = ({addTodo }) => {
    const [todo,setTodo]=useState({
      title:'',
      description:'',
      id:''
    }) 

    const handleSubmit = (event) => {
  event.preventDefault();
  // console.log(todo);

addTodo({...todo,id:v4()})
  // console.log(todo);
   setTodo({
   title:'', 
   description:''});
   
}


  return(
      <Container>
          <Row>
            <Col md={12}>
              <Card className='shodow-sm'>
                <Card.Body>
                  <h3>Add todo here !!!</h3>
                  <Displaycounts/>
                  <Form onSubmit={(event) => handleSubmit(event)}>
                 <Form.Group className='mt-3'>
                 <Form.Label>Todo Title</Form.Label>
                    <Form.Control
                    value={todo.title}
                    onChange={event=>setTodo({
                      ...todo,title:event.target.value
                    })}
                     type='text' 
                     placeholder='Enter Todo here '/>
                 </Form.Group>
                 <br/>
                 <Form.Group className='mt-3'>
                 <Form.Label>Todo Descripition</Form.Label>
                    <Form.Control as={"textarea"} 
                    type='text'
                     placeholder='Enter Todo here
                     '
                     value={todo.description}
                     onChange={
                      event=>{
                        setTodo({
                          ...todo,
                          description : event.target.value
                          });}
                         } />
                 </Form.Group>
                 <Container className='text-center mt-3' >
                 <Button  type='submit' variant="primary">Submit</Button>
                 </Container>
                 </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>
  )
  
}

const mapStateToProps=(state)=>({})

const mapDispatchToProps=(dispatch)=>({
  addTodo:(todo)=>(dispatch(addTodo(todo)))
})
   
 
export default connect(mapStateToProps,mapDispatchToProps) (Addtodo)
