/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './header.css'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
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

          {
            user ?<> <Image data-tooltip-id="profile" data-tooltip-content={`${user.displayName || 'Name unavailable'}`}  style={{width:'60px', height: '60px'}} src={user?.photoURL} roundedCircle></Image> 
            <Tooltip id="profile" />
            </>
            :<Link
             to={'/login'}><Button variant="outline-success">Login</Button></Link>

          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;