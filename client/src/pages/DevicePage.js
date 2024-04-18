import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {NavLink, useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import { addBasket, checkBasket } from '../http/basketAPI';
import { check } from '../http/userAPI';
import '../css/index.css'
import { Context } from '..';

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const [email, setEmail] = useState('')
    const {user} = useContext(Context)
    // const [userId, setUserId] = useState('')
    // const [inBasket, setInBasket] = useState('')
    const {id} = useParams()
    // let price = device.price
    // price = price.toLocaleString()

    useEffect(() => {
        if (user.isAuth){
            check().then(data => {
                setEmail(data.email)
            })
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
                        <h2>{device.name}</h2>
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
                            <h2>Описание:</h2>
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
                        <Button className='device_button' onClick={add_basket} variant={"outline-dark"}>Добавить в корзину</Button>
                        <br/>
                        <NavLink style={{fontSize: '16px', marginTop: '32px'}}>Помощь</NavLink>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;
