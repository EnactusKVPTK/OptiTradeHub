import React, { useContext } from 'react'
import { Context } from '..';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import {useNavigate} from 'react-router-dom'

const NavScroll = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
  }

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
                <Button 
                  variant={'outline-light'} 
                  onClick={() => navigate(ADMIN_ROUTE)}
                >
                  Admin Panel
                </Button>
                <Button 
                  variant={'outline-light'} 
                  className='ml-4'
                  onClick={() => logOut()}
                >
                  Quit
                </Button>
              </>
              : 
              <>
                <Button 
                  variant={'outline-light'}
                  onClick={() => navigate(LOGIN_ROUTE)}
                >
                  Sign In
                </Button>
              </>
            }
            </Nav>
          </Container>
        </Navbar>
    )
});

export default NavScroll