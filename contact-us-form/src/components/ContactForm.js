import React,{useState} from 'react'
import axios from 'axios'
import Header from './Header'
import {Form, Row, Button, Col,Image, Container} from 'react-bootstrap'
import img from './images/img.jpg'

const ContactForm = () => {

  const[state, setState]=useState({
    firstname:'',
    lastname:'',
    email:'',
    message:''
  
  })

  const[result, setResult]=useState(null)

  const sendEmail=event=>{
    event.preventDefault();
   axios
   .post('/send',{...state})
   .then(response=>{
     setResult(response.data);
     setState({firstname:'', lastname:'',email:'',message:''})
   })
   .catch(()=>{
    setResult({ success: false, message: 'Something went wrong. Try again later'})
   })
  }

  const onInputChange=event=>{
    const{name,value}=event.target
    setState({
      ...state,
      [name]:value
    })
  }
    return (


      <Container>

            {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
<Row  >
  <Col>
  <Image src={img} rounded/>
  </Col>

  <Col>
  <form >
           <Header/>
            <Form.Group controlId="name">  
              <Row className="g-2">
               <Col >
               <Form.Label>First name</Form.Label>
               <Form.Control
            type="text"
            name="firstname"
            value={state.firstname}
            placeholder="Jane"
            onChange={onInputChange}
          />
               </Col> 

               <Col>
               <Form.Label>Last name</Form.Label>
               <Form.Control
            type="text"
            name="lastname"
            value={state.lastname}
            placeholder="Smith"
            onChange={onInputChange}
          />
               </Col>  
              </Row>

            </Form.Group>
           <Form.Group controlId="email">
               <Form.Label>Email address</Form.Label>
               <Form.Control
               type="text"
               name="email"
               value={state.email}
               placeholder="janesmith@example.com"
               onChange={onInputChange}
               />

           </Form.Group>

           <Form.Group controlId="subject">
           <Form.Label>Message</Form.Label>
           <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Hey friends, i´d love to talk to you about this Drone AI project we are working on..."
            onChange={onInputChange}
          
          />
           </Form.Group>
           <Button variant="secondary" type="submit"> Submit</Button>
            </form>
  </Col>
</Row>

      </Container>
        
    )
}

export default ContactForm
