import React from "react";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row"
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}    
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Sign In" : "Registration"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Input login"
                    />
                    <Form.Control 
                        className="mt-3"
                        placeholder="Input email"
                    />
                    <Form.Control 
                        className="mt-3"
                        placeholder="Input password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ? <div>
                            No account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                        </div>
                        :
                        <div>
                            Have an account? <NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
                        </div>
                        }
                        <Button 
                            variant={"outline-success"}
                        >
                            {isLogin ? "Sign In" : "Registration"}
                        </Button>
                    </Row>
                </Form> 
            </Card>
        </Container>
    )
}

export default Auth