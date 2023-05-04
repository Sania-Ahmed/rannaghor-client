/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
  const [error, setError] = useState("")
  const location = useLocation();
  const {signIn, signWithGoogle , signInWithGitHub} = useContext(AuthContext)
  const navigate = useNavigate()
  const from = location?.state?.from?.pathname || '/' ;
    const handleSignIn = (e) => {
      setError(" ");
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signIn(email,password)
        .then( result => {
          const loggedUser = result.user ;
          console.log(loggedUser)
          setError(" ")
          form.reset();
          navigate(from, {replace:true})
        }
        )
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
          form.reset();
        });
    }

    const googleLogin = () =>{
      signWithGoogle()
      .then( result => {
        const loggedUser = result.user ;
        console.log(loggedUser)
        navigate(from, {replace:true})
      }
      )
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
    }

    const gitLogin = () => {
      signInWithGitHub()
      .then( result => {
        const loggedUser = result.user ;
        console.log(loggedUser)
        navigate(from, {replace:true})
      }
      )
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });

    }
    return (
        <>
        <Form onSubmit={handleSignIn} className='w-50 mx-auto my-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password'type="password" placeholder="Password" required/>
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
      <p>Do not have an account? <Link to={'/register'}>Register</Link></p>
    </Form>
    <div className='d-flex flex-column w-full justify-content-center gap-3 align-items-center'>
    <Button onClick={googleLogin} className='w-25' variant="outline-success"> <FaGoogle style={{width:'30px', height:'30px'}}></FaGoogle> Log in with google</Button>
    <Button onClick={gitLogin} className='w-25' variant="outline-success"> <FaGithub style={{width:'30px', height:'30px'}}></FaGithub> Log in with github</Button>
    <p className='text-danger'>{error}</p>
    </div>
    </>
    );
};

export default Login;