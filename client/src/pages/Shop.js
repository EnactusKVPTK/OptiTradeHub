import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import TypeBar from "../components/TypeBar";
import ProductList from "../components/ProductList";

const Shop = () => {
    return (
        <Container className="mt-2">
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>

                <Col md={9}>
                    <ProductList/>
                </Col>
            </Row>
        </Container>
    )
}

export default Shop