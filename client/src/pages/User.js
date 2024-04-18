import React, { useEffect, useState } from 'react'
import { check } from '../http/userAPI'
import { Col, Container, Row, Image } from 'react-bootstrap'
import userLogo from '../assets/user.jpg'
import { LOCATION_ROUTE } from '../utils/consts'
import { NavLink } from 'react-router-dom'

const User = () => {

    const [user, setUser] = useState('')
    useEffect(() => {
        check().then(data => setUser(data))
    }, [])
    console.log(user)
    return (
        <div>
            <Container>
                <Row>
                    <Col style={{maxWidth: "30%"}}>
                        <Image className='mt-4 mb-4' width={300} height={300} src={userLogo}/>
                    </Col>
                    <Col style={{ paddingTop: '20px'}}>
                        <Row className='d-flex flex-column'>
                            <h3>Имя: {user.login}</h3>
                            <span><b>Телефон</b>: +{user.phone}</span>
                            <p><b>Email</b>: {user.email}</p>
                            <span><NavLink to={LOCATION_ROUTE}>Местоположение</NavLink></span>
                            <span><NavLink>Помощь</NavLink></span>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default User