import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import star from '../assets/star.png'
import {useNavigate} from 'react-router-dom'
import { PRODUCT_ROUTE } from '../utils/consts';

const ProductItem = ({product}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={'mt-3'} onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={product.img} />
                <div className=' mt-1 d-flex justify-content-between align-items-center'>
                    <div>{product.name}</div>
                    <div>
                        <div className='d-flex align-items-center'>
                            {product.rating}
                            <Image width={20} height={20} src={star}/>
                        </div>
                    </div>
                </div>
            </Card>
        </Col>
    )
};

export default ProductItem