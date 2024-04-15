import React, { useEffect } from 'react'
import { check } from '../http/userAPI'
import { Col, Container, Row, Image } from 'react-bootstrap'
import userLogo from '../assets/user.jpg'

const User = () => {
    useEffect(() => {
        check().then(data => console.log(data))
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Image className='mt-4 mb-4' width={300} height={300} src={userLogo}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default User