/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Registration = () => {
    const [error, setError] = useState("")
   const {createUser,updateUser, setUser, setReload} = useContext(AuthContext);
   const navigate = useNavigate()
    const handleSignUp = (e) => {
        setError(" ");
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoUrl = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, photoUrl, email, password)

        createUser(email, password)
        .then(result => {
            setError(" ")
            const createdUser = result.user ;
            console.log(createdUser);
            updateUser( name, photoUrl).then( () => {
                setReload(true)
            } )
            setUser(createdUser);
            form.reset();
            navigate('/')
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
            form.reset();
          });
    }
    return (
        <Form onSubmit={handleSignUp} className='w-50 mx-auto my-5'>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImage">
                <Form.Label>Image Url</Form.Label>
                <Form.Control name='photoUrl' type="text" placeholder="photo url" required />
            </Form.Group>
            <Button variant="success" type="submit">
                Submit
            </Button>
            <p>Have an account? <Link to={'/login'}>Log in</Link></p>
            <p className='text-danger fw-semibold fs-4'>{error}</p>
        </Form>
    );
};

export default Registration;