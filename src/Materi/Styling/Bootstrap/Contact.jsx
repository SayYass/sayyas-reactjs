import React from "react";
import { Button, Carousel, Form, FormControl, InputGroup } from "react-bootstrap";
import Container from 'react-bootstrap/Container'

export default class Contact extends React.Component{
    render(){
        return(
          <Container id="contact">
            <h3 className="fw-bold fs-2 mb-4">Contact me</h3>
            <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="outline-primary" className="container">Submit</Button>
        </Form>

        </Container>
        )
    }
}