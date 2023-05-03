/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
    }
    return (
        <>
        <Form onSubmit={handleSignIn} className='w-50 mx-auto my-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password'type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
      <p>Do not have an account? <Link to={'/register'}>Register</Link></p>
    </Form>
    <div className='d-flex flex-column w-full justify-content-center gap-3 align-items-center'>
    <Button className='w-25' variant="outline-success"> <FaGoogle style={{width:'30px', height:'30px'}}></FaGoogle> Log in with google</Button>
    <Button className='w-25' variant="outline-success"> <FaGithub style={{width:'30px', height:'30px'}}></FaGithub> Log in with github</Button>
    </div>
    </>
    );
};

export default Login;