import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import { Button, Container, Form, Image } from 'react-bootstrap';
import { SHOP_ROUTE } from '../utils/consts';
import logo from '../assets/logo.png'

const Nav = () => {
    return (
        <div>
                <Navbar bg="" className='' variant="" style={{marginLeft: '-19px'}}>
                    <Container>
                    <div className='d-flex align-items-center'>
                        <Image width={60} src={logo}/>
                        <NavLink style={{color:'black', color: '#444', fontWeight: '400', fontSize: '30pxs'}} to={SHOP_ROUTE}>OptiTradeHub</NavLink>
                    </div>
                    <div class="input-group">
                        <Form.Control style={{padding: '5px 15px 5px 15px', marginLeft: '20px', width:'100%', border:'1px solid #888'}} type="text" placeholder='Поиск...' />
                        {/* <div class="input-group-append">
                            <Button style={{}} type="button" class="btn btn-outline-secondary">Найти</Button>
                        </div> */}
                    </div>
                    </Container>
                </Navbar>
        </div>
    )
}

export default Nav