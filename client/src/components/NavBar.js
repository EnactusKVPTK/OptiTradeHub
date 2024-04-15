import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOCATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, USER_ROUTE} from "../utils/consts";
import {Button, Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import { check } from '../http/userAPI';
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import basketPng from '../assets/basket-white.png'
import userLogo from '../assets/user.jpg'
import locationLogo from '../assets/location.png'
import '../css/index.css'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    useEffect(() => {
        check().then(data => {
            if (data.role == "ADMIN"){
                user.setIsAdmin(true)
            } else {
                user.setIsAdmin(false)
            }
        })
    }, [])

    console.log(user.isAdmin)

    return (
        <Navbar bg="dark" className='header_div' variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>OptiTredeHub</NavLink>
                <div className='header_input_div'>
                    <Form.Control
                        className='header_input'
                        placeholder='Поиск...'
                    />
                </div>
                <div className='basket_logo_div'>
                    <Image className='basket_logo' width={30} height={25}  src={basketPng}/>
                </div>
                <div className='location_logo_div'>
                    <Image  onClick={() => navigate(LOCATION_ROUTE)} className='location_logo' width={18} height={28}  src={locationLogo}/>
                </div>
                <div className='user_logo_div'>
                    <Image onClick={() => navigate(USER_ROUTE)} className='user_logo' width={45} height={45} src={userLogo}/>
                </div>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        {user.isAdmin ?
                        <Button
                        variant={"outline-light"}
                        onClick={() => navigate(ADMIN_ROUTE)}
                        className='navbar_button'
                        >
                            Админ панель
                        </Button>
                        :
                        <></>
                        }
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="navbar_button_logout ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button className='navbar_button' variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;