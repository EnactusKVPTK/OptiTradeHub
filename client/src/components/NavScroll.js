import React, { useContext } from 'react'
import { Context } from '..';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavScroll = observer(() => {
    const {user} = useContext(Context)
    return (    
        <Navbar  bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
          <Container fluid="md">
            <NavLink style={{color: "white"}} to={SHOP_ROUTE}>OptiTredeHub</NavLink>
            {/* <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ml-auto me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px', color:'white' }}
                navbarScroll
              >

              </Nav>
            </Navbar.Collapse> */}
            
            <Nav className="justify-content-end">
            {user.isAuth ? 
              <>
                <Button variant={'outline-light'}>Admin Panel</Button>
                <Button variant={'outline-light'} className='ml-4'>Quit</Button>
              </>
              : 
              <>
                <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Sign In</Button>
              </>
            }
            </Nav>
          </Container>
        </Navbar>
    )
});

export default NavScroll