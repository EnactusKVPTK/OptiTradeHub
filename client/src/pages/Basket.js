import React, { useContext, useState, useEffect } from 'react';
import { getBasket } from '../http/basketAPI';
import { Context } from '..';
import { check } from '../http/userAPI';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';
import Typography from '../components/modals/Typography';


const Basket = () => {
    const [devices, setDevices] = useState([])
    const [typographyVisible, setTypographyVisible] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        check().then(data => getBasket(data.email).then( data => setDevices(data.basketDevices)))
    }, [])

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength - 3) + '...'
        } else {
            return str
        }
    }
    return (
        <Container>
            <Row>
            <Col >
            {devices.map(device => 
            <div style={{borderBottom: '1px solid #4d4d4d', paddingTop: '5px', paddingBottom: '5px'}} className={"mt-2 d-flex"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.device.id)}>
                <Image style={{}} width={120} height={115} src={process.env.REACT_APP_API_URL + device.device.img}/>
                {console.log(device.device.img)}
                    <div style={{marginLeft:'30px', width: '100%'}}>
                        <h3 style={{fontSize: '20px'}}>{device.device.name}</h3>     
                        <div style={{marginTop:'10px'}} className='device_item_description'><p>{truncateString(device.device.description, 50)}</p></div>
                    </div>
                    <div style={{fontSize: '16px', float:'right', width: '100px'}}>{device.device.price.toLocaleString()} ₸</div>
            </div>)}
            </Col>
            <Col md={3}>
                <div style={{width: '300px',marginTop:'10px', marginLeft:'10px'}}>
                    <Button onClick={() => setTypographyVisible(true)} style={{ padding: '12px 43px'}}>Перейти к оформлению</Button>
                    <Typography show={typographyVisible} onHide={() => setTypographyVisible(false)}/>
                    <p style={{color:'#888', marginTop:'3px', fontSize:'14px'}}>Cпособы и доставки можно выбрать при оформлении заказа</p>
                    <span><NavLink>Помощь</NavLink></span>
                </div>
            </Col>
            </Row>
        </Container>
    );
};

export default Basket;
