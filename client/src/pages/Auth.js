import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [error, setError] = useState('')
    const [errorTitle, setErrorTitle] = useState('')
    const [passwordError, setPasswordError] = useState('')
    let rol

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
            if (!isEmailValid(email)){
                setError('Не коректный email')
                setErrorTitle('')
            } else if (password.length <= 3) {
                setPasswordError('пароль должен быть длинее 3 символов')
                setErrorTitle('')
                setError('')
            }
            else {
                setError('')
                setPasswordError('')
                setErrorTitle('')
                if (isLogin) {
                    data = await login(email, password);
                } else {
                    data = await registration(email, password, role);
                    if (role == "ADMIN") {
                        user.setIsAdmin(true)
                    } else {
                        user.setIsAdmin(false)
                    }
                }
                console.log(user.isAdmin)
                user.setUser(user)
                user.setIsAuth(true)
                navigate(SHOP_ROUTE)
            }
        } catch (e) {
            setError('')
            setPasswordError('')
            setErrorTitle('Неверный email или password')
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
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span style={{color: 'red', marginLeft: '5px'}}>{error}</span>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <span style={{color: 'red', marginLeft: '5px'}}>{passwordError}</span>
                    <span style={{color: 'red', marginLeft: '5px'}}>{errorTitle}</span>
                    {isLogin ? 
                    <></>
                    :
                    <Form.Control
                        className='mt-3'
                        placeholder='Выберети роль'
                        value={rol}
                        readOnly='true'
                    />
                    }
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
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
                                <br/>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
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
