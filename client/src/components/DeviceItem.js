import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import '../css/index.css'


const DeviceItem = ({device}) => {
    
    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength - 3) + '...'
        } else {
            return str
        }
    }

    const originalString = device.description
    const maxLength = 200

    const truncatedString = truncateString(originalString, maxLength);

    const navigate = useNavigate()
    return (
        <Col md={12} className={"mt-2 device_item d-flex"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Image style={{}} width={190} height={175} src={process.env.REACT_APP_API_URL + device.img}/>
                <div style={{marginLeft:'15px'}}>
                    <h3 style={{fontSize: '22px'}}>{device.name}</h3>
                    <span style={{color: 'red', fontWeight:'600', fontSize:'14px'}}>ВНИМАНИЕ ТОВАР/УСЛУГА ЯВЛЯЕТСЯ ТЕСТОВЫМ!</span>
                    <div className="d-flex align-items">
                        <div>Рейтинг: {device.rating}</div>
                        {/* <Image width={18} height={18} src={star}/> */}
                    </div>
                    <div style={{fontSize: '18px'}} className='device_item_price'>{device.price.toLocaleString()} ₸</div>
                    <div style={{marginTop:'10px'}} className='device_item_description'><p>{truncatedString}</p></div>
                </div>
                <Card style={{ cursor: 'pointer', display:'flex'}} border={"light"} className='device_item_content d-flex'>
            </Card>
        </Col>
    );
};

export default DeviceItem;
