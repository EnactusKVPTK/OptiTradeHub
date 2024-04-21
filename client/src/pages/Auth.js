import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {registration, login, check} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Agreement from '../components/Agreement';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [name, setName] = useState()
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    const [agreementVisible, setAgreementVisible] = useState('')
    const [myCheckbox, setMySheckbox] = useState(false)
    let rol

    const handleCheckboxChange = () => {
        setMySheckbox(!myCheckbox)
    }

    const phonePattern = /^((\+7)|8)?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/;

    if (role == 'ADMIN'){
        rol = 'Поставшик'
    } else {
        rol = 'Покупатель'
    }

    const isEmailValid = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                if(!isEmailValid(email)){
                    setError('Не коректный email')
                    return
                } else {
                    data = await login(email, password)
                    user.setIsAuth(true)
                    
                }
            } else {
                if(!isEmailValid(email)){
                    setError('Не коректный email')
                    return
                } else if (password.length < 6) {
                    setError('Пароль должен быть длинее 6 символов')
                    return
                } else if (!name) {
                    setError('Заполните свой login')
                    return
                } else if (!phonePattern.test(phone)) {
                    setError('Не коректный телефон')
                    return
                } else if (!myCheckbox) {
                    setError('Вы должны принять политику конфиденциальности')
                    return
                } else {
                    data = await registration(name, phone, email, password, role);
                    user.setIsAuth(true)
                }
            }
            if (role == "ADMIN") {
                user.setIsAdmin(true)
            } else {
                user.setIsAdmin(false)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    console.log(role)

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <span style={{color: 'red', marginLeft: '5px'}}>{error}</span>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    {isLogin ? 
                    <></>
                    :
                    <>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваше имя..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш номер телефона..."
                        value={phone} 
                        onChange={e => setPhone(e.target.value)}
                        required
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Выберети роль'
                        value={rol}
                        readOnly='true'
                    />
                    </>
                    }
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div style={{marginBottom:'10px'}}>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                <Row>
                                    <Button
                                        style={{marginLeft: '15px'}}
                                        onClick={() => setRole('ADMIN')}
                                    >
                                        Поставшик
                                    </Button>
                                    <Button 
                                        style={{marginLeft: '10px'}}
                                        onClick={() => setRole('USER')}
                                    >
                                        Покупатель
                                    </Button>
                                </Row>
                                <div style={{marginTop: '10px', marginLeft:'20px', cursor: 'pointer'}}>
                                    <Form.Check checked={myCheckbox} onChange={handleCheckboxChange} type="checkbox"/>
                                    <span onClick={() => {setAgreementVisible(true)}}>Политика конфиденциальности</span>
                                </div>
                                <Agreement show={agreementVisible} onHide={() => setAgreementVisible(false)} />
                                <br/>
                                <div style={{marginBottom:'10px'}}>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink></div>
                            </div>
                        }
                        
                    </Row>
                    <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
