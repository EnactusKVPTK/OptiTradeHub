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
    const maxLength = 40

    const truncatedString = truncateString(originalString, maxLength);

    const navigate = useNavigate()
    return (
        <Col md={3} className={"mt-3 device_item"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div device_item_name>{device.name}</div>
                <div className='device_item_description'><p>{truncatedString}</p></div>
                <div className='device_item_price'>{device.price.toLocaleString()} ₸</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
