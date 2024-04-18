import React, {useContext, useState, useEffect} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, LOCATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, USER_ROUTE} from "../utils/consts";
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
        // <Navbar bg="dark" className='header_div' variant="dark">
        //     <Container style={{maxWidth: '1370px', margin: '0 auto'}}>
        //         {/* <NavLink style={{color:'white'}} to={SHOP_ROUTE}>OptiTredeHub</NavLink> */}
        //         {/* <div className='header_input_div'>
        //             <Form.Control
        //                 className='header_input'
        //                 placeholder='Поиск...'
        //             />
        //         </div> */}
        //         <div style={{color: 'white'}} className='d-flex user_logo_div'>
        //             <Image onClick={() => navigate(USER_ROUTE)} className='user_logo' width={45} height={45} src={userLogo}/>
        //             <div style={{marginLeft: '5px', fontSize:'14px'}}>
        //                 <span>Пользователь</span><br/>
        //                 <span>Профиль</span>
        //             </div>
        //         </div>
        //         <div className='basket_logo_div'>
        //             <Image className='basket_logo' width={30} height={25} onClick={() => navigate(BASKET_ROUTE)}  src={basketPng}/>
        //         </div>
        //         <div className='location_logo_div'>
        //             <Image  onClick={() => navigate(LOCATION_ROUTE)} className='location_logo' width={18} height={28}  src={locationLogo}/>
        //         </div>
        //         {user.isAuth ?
        //             <Nav className="ml-auto" style={{color: 'white'}}>
        //                 {user.isAdmin ?
        //                 <Button
        //                 variant={"outline-light"}
        //                 onClick={() => navigate(ADMIN_ROUTE)}
        //                 className='navbar_button'
        //                 >
        //                     Админ панель
        //                 </Button>
        //                 :
        //                 <></>
        //                 }
        //                 <Button
        //                     variant={"outline-light"}
        //                     onClick={() => logOut()}
        //                     className="navbar_button_logout ml-2"
        //                 >
        //                     Выйти
        //                 </Button>
        //             </Nav>
        //             :
        //             <Nav className="ml-auto" style={{color: 'white'}}>
        //                 <Button className='navbar_button' variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
        //             </Nav>
        //         }
        //     </Container>
        // </Navbar>

        // <div class="px-3 py-2 bg-dark text-white">
        // <Container style={{maxWidth: '1370px', margin: '0 auto'}}>
        //     <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        //     <span class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
        //         <div style={{color: 'white'}} className='d-flex user_logo_div'>
        //             <Image onClick={() => navigate(USER_ROUTE)} className='user_logo' width={45} height={45} src={userLogo}/>
        //             <div style={{marginLeft: '5px', fontSize:'14px'}}>
        //                 <span>Пользователь</span><br/>
        //                 <span>Профиль</span>
        //             </div>
        //         </div>
        //     </span>

        //     <ul class="nav">
        //         <li>
        //         <div href="#" class="d-flex flex-column justify-content-center nav-link text-secondary">
        //         <Image className='basket_logo' width={30} height={25} onClick={() => navigate(BASKET_ROUTE)}  src={basketPng}/>
        //             Home
        //         </div>
        //         </li>
        //         <li>
        //         <a href="#" class="nav-link text-white">
        //         <Image className='basket_logo' width={30} height={25} onClick={() => navigate(BASKET_ROUTE)}  src={basketPng}/>
        //             Dashboard
        //         </a>
        //         </li>
        //         <li>
        //         <a href="#" class="nav-link text-white">
        //         <Image className='basket_logo' width={30} height={25} onClick={() => navigate(BASKET_ROUTE)}  src={basketPng}/>
        //             Orders
        //         </a>
        //         </li>
        //         <li>
        //         <a href="#" class="nav-link text-white">
        //             <Image className='basket_logo' width={30} height={25} onClick={() => navigate(BASKET_ROUTE)}  src={basketPng}/>
        //             Products
        //         </a>
        //         </li>
        //     </ul>
        //     </div>
        // </Container>
        // </div>

        <Navbar bg="dark" className='header_div' variant="dark">
            <Container style={{ width: "1120px"}} class="d-flex flex-wrap">
            <ul class="nav">
            <div style={{color: 'white'}} className='d-flex align-items-center'>
                <Image style={{borderRadius: '50%', cursor:'pointer'}} onClick={() => navigate(USER_ROUTE)} width={45} height={45} src={userLogo}/>
                <div style={{marginLeft: '8px'}}>
                    <span style={{fontSize:'16px', fontWeight:'600'}}>{name ? <span>{name}</span>:<span>Пользователь</span>}</span><br/>
                    <span style={{fontSize:'14px'}}>Профиль</span>
                </div>
                <div onClick={() => navigate(BASKET_ROUTE)} style={{marginLeft:'20px', textAlign:'center', marginTop: '20px', cursor:'pointer'}}>
                    <Image width={30} height={25} src={basketPng}/>
                    <p style={{fontSize:'12px'}}>Корзина</p>
                </div>
                <div onClick={() => navigate(LOCATION_ROUTE)} className='location_logo_div' style={{marginLeft:'20px', textAlign:'center', marginTop: '20px', cursor:'pointer'}}>
                    <Image width={18} height={28} src={locationLogo}/>
                    <p style={{fontSize:'12px'}}>Увд.</p>
                </div>
            </div>
            </ul>
            <ul style={{color: 'white'}} class="nav navlink me-auto">
                <li class="nav-item"><span onClick={() => navigate(SHOP_ROUTE)} class="nav-link link-dark px-2 active" aria-current="page">Home</span></li>
                <li class="nav-item"><span onClick={() => navigate(ABOUT_ROUTE)}  class="nav-link link-dark px-2">About</span></li>
                <li class="nav-item"><span class="nav-link link-dark px-2">Pricing</span></li>
                <li style={{marginRight: '15px'}} class="nav-item"><span class="nav-link link-dark px-2">FAQs</span></li>
            {user.isAuth ?
                    <Nav className="ml-auto">
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
            </ul>
        </Container>

        </Navbar>
    
    );
});

export default Head;