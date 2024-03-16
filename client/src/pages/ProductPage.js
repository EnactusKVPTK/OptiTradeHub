import React from "react";
import {Col, Image, Container, Row, Card, Button} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const ProductPage = () => {
    const product = {id: 1, name: "Iphone 12", price: 25000, rating: 5, img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpriceintanzania.com%2Fwp-content%2Fuploads%2F2020%2F10%2FApple-iPhone-12-Pro.jpg&f=1&nofb=1&ipt=0d1abe60601dd1e88ed197472a3c8c46c2d033600997415b2a7ba0c4ce5be281&ipo=images"}
    const description = [
        {id: 1, title: 'operation memory', description: '5gb'},
        {id: 2, title: 'camera', description: '12 mp'},
        {id: 3, title: 'operation memory', description: '5gb'},
        {id: 4, title: 'camera', description: '12 mp'},
    ]
    return (
        <div>
            <Container className="mt-3">
                <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={product.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{product.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {product.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center  justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {product.price} тенге</h3>
                        <Button variant={"outline-dark"}>Add to bascket</Button>
                    </Card>
                </Col>
                </Row>
                <Row className="d-flex flex-column m-3">
                <h1>Description</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
            </Container>
        </div>
    )
}

export default ProductPage