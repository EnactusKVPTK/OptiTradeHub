import React, {useContext, useState, useEffect} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, FAQ_ROUTE, LOCATION_ROUTE, LOGIN_ROUTE, NOTIFICATION_ROUTE, SHOP_ROUTE, USER_ROUTE} from "../utils/consts";
import {Button, Dropdown, Popover} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import { check } from '../http/userAPI';
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import basketPng from '../assets/basket-white.png'
import userLogo from '../assets/user.jpg'
import notification from '../assets/notification.png'
import '../css/index.css'

const Head = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [name, setName] = useState('')

    const logOut = () => {
        user.setUser({})
        user.setIsAdmin(false)
        user.setIsAuth(false)
    }

    useEffect(() => {
        if (user.isAuth) {
            check().then(data => {
                setName(data.login)
                if (data.role == "ADMIN"){
                    user.setIsAdmin(true)
                } else {
                    user.setIsAdmin(false)
                }
            })
        } 
    }, [])

    return (
        <Navbar bg="dark" className='header_div' variant="dark">
            <Container style={{ width: "1120px"}} class="d-flex flex-wrap">
            <ul class="nav">
            <div style={{color: 'white'}} className='d-flex align-items-center'>
                
                <Dropdown onMouseEnter={(e) => e.target.click()}>
                    <Dropdown.Toggle 
                        style={{ background: 'transparent', border: 'none' }} 
                        variant="success"
                        id="dropdown-basic"
                        className="no-click-effect" 
                    >
                    <Image 
                        style={{borderRadius: '50%', marginRight:'-10px', cursor:'pointer'}} 
                        width={45} 
                        height={45} 
                        src={userLogo}  
                    />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item><span onClick={() => navigate(USER_ROUTE)}>Профиль</span></Dropdown.Item>
                        {user.isAuth ? 
                        <Dropdown.Item>
                            <span
                                onClick={() => logOut()}
                            >
                                Выйти
                            </span>
                        </Dropdown.Item>
                        :
                        <Dropdown.Item>
                            <span 
                                onClick={() => navigate(LOGIN_ROUTE)}
                            >
                                Авторизаватся
                            </span>
                        </Dropdown.Item>
                        }
                    </Dropdown.Menu>
                </Dropdown>
                <div style={{marginLeft: '8px'}}>
                    <span style={{fontSize:'16px', fontWeight:'600'}}>{name ? <span>{name}</span>:<span>Пользователь</span>}</span><br/>
                    <span style={{fontSize:'14px'}}>Профиль</span>
                </div>
                {user.isAuth ?
                <>
                    <div onClick={() => navigate(BASKET_ROUTE)} style={{marginLeft:'20px', textAlign:'center', marginTop: '20px', cursor:'pointer'}}>
                        <Image width={30} height={25} src={basketPng}/>
                    <p style={{fontSize:'12px'}}>Корзина</p>
                    </div>
                    <div onClick={() => navigate(NOTIFICATION_ROUTE)} style={{marginLeft:'20px', textAlign:'center', marginTop: '20px', cursor:'pointer'}}>
                        <Image width={32} height={28} src={notification}/>
                        <p style={{fontSize:'12px'}}>Увд.</p>
                    </div>
                </>
                :
                <></>
                }
            </div>
            </ul>
            <ul style={{color: 'white'}} class="nav navlink me-auto">
                <li class="nav-item"><span onClick={() => navigate(SHOP_ROUTE)} class="nav-link link-dark px-2 active" aria-current="page">Товары</span></li>
                <li class="nav-item"><span onClick={() => navigate(ABOUT_ROUTE)} class="nav-link link-dark px-2">О нас</span></li>
                <li class="nav-item"><span onClick={() => navigate(LOCATION_ROUTE)} class="nav-link link-dark px-2">Адреса</span></li>
                <li style={{marginRight: '15px'}} class="nav-item"><span onClick={() => navigate(FAQ_ROUTE)} class="nav-link link-dark px-2">FAQ</span></li>
            {user.isAuth ?
                    <Nav className="ml-auto">
                        {user.isAdmin ?
                        <Button
                        variant={"outline-light"}
                        onClick={() => navigate(ADMIN_ROUTE)}
                        className='navbar_button'
                        style={{width: '150px'}}
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
            </ul>
        </Container>

        </Navbar>
    
    );
});

export default Head;