import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {NavLink, useNavigate, useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import { addBasket, checkBasket } from '../http/basketAPI';
import { check } from '../http/userAPI';
import '../css/index.css'
import { Context } from '..';
import { HELP_ROUTE } from '../utils/consts';

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const [email, setEmail] = useState('')
    const {user} = useContext(Context)
    // const [userId, setUserId] = useState('')
    // const [inBasket, setInBasket] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    // let price = device.price
    // price = price.toLocaleString()

    useEffect(() => {
        if (user.isAuth){
            check().then(data => {
                setEmail(data.email)
            })
        } else {
            setError(true)
        }
    }, [])

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    const add_basket = () => {
        addBasket(email, device.name).then(data => {})
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column">
                        <h3>{device.name}</h3>
                        <div className='device_rating'>
                            Рейтинг:
                            <span
                                className="d-flex align-items-center justify-content-center"
                                style={{background: `url(${bigStar}) no-repeat center center`, width:34, height: 34, backgroundSize: 'cover', fontSize:14}}
                            >
                                {device.rating}
                            </span>
                            
                        </div>
                        <div className='description'>
                            <h3>Описание:</h3>
                            <p>{device.description}</p>
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column device_card"
                        style={{maxWidth: 270, minHeight: 200, fontSize: 32, border: '2px solid lightgray'}}
                    >
                        <h4>В корзину</h4>
                        <h4 className='device_price'>От: <spqn>{device.price}</spqn> ₸</h4>
                        {error ? 
                        <span style={{fontSize: '16px', marginTop:'10px', color: 'red'}}>Пожайлуста авторизуйтесь чтобы делать заказы</span>
                        : 
                        <Button className='device_button' onClick={add_basket} variant={"outline-dark"}>Добавить в корзину</Button>
                        }
                        <br/>
                        <div onClick={() => navigate(HELP_ROUTE)}  style={{fontSize: '16px', marginTop: '32px'}}><p className='help_link' style={{cursor: 'pointer'}}>Помощь</p></div>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h4>Характеристики</h4>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
            <Row className="d-flex flex-column m-3">
                <h4>Коментарии</h4>
                <Form>
                    <Form.Control 
                        type="text"
                        className="input_comments"
                        placeholder='Добавить коментарий...'
                    /> 
                </Form>
                <div class="alert alert-warning mt-2" style={{marginLeft: '-30px', maxWidth:'130%'}} role="alert">
                    <h4 class="alert-heading">Уважаемые клиенты,</h4>
                    <p>Мы приносим извинения за неудобства, но в данный момент <b>функция комментирования временно недоступна.</b> Мы работаем над решением этой проблемы и постараемся восстановить возможность оставлять комментарии как можно скорее. Пожалуйста, оставайтесь на связи и следите за обновлениями.</p>
                    <p>Благодарим за ваше понимание и терпение.</p>
                    <p>С уважением,<br/>
                    Команда OptiTradeHub!</p>
                </div>
            </Row>
        </Container>
    );
};

export default DevicePage;
