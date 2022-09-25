import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Signup.css';
import R1 from "../assets/R1.png";


function validateImg() {}

export default function Signup() {
  return (
    <Container>
      <Row>
      
      <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
    <Form style={{ width:"80%",maxWidth:500 }}>
        <h1 classname="text_center"> Create Account </h1>
        <div className="signup-profile-pic_container text_center">
            <img src={R1} className="signup-profile-pic"/>
            <label htmlFor="image_upload" className="image-upload-lable">
                <i className="fas fa-plus-circle add-picture-icon"></i>
            </label>
            <input type="file" id="image-upload" hidden accept="image/png, image/jpeg" onChange={validateImg} />
        </div>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Your Name" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
      <div className="py-4">
        <p className="text_center">
           Don't have account? <Link to="/signup">Signup</Link>
        </p>

      </div>
    </Form>
    </Col>
    <Col md={5} className="signup_bg "></Col>
    </Row>
    </Container>
  )
}
