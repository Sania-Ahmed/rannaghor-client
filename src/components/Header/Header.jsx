/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './header.css'
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
 const{user} = useContext(AuthContext)
console.log(user)


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><span className='text-success'>RANNAGHOR</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink

              to={'/'}
              className={`${({ isActive }) => isActive ? "active" : "panding"
                } `}
            >
              HOME
            </NavLink>
            <NavLink

              to={'/blog'}
              className={`${({ isActive }) => isActive ? "active" : ""
                } `}
            >
              BLOGS
            </NavLink>
          </Nav>

          <Link to={'/login'}><Button variant="outline-success">Login</Button></Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;