import React, { useContext, useEffect, useState } from 'react'
import { check } from '../http/userAPI'
import { Col, Container, Row, Image } from 'react-bootstrap'
import userLogo from '../assets/user.jpg'
import { HELP_ROUTE, LOCATION_ROUTE } from '../utils/consts'
import { NavLink, useNavigate } from 'react-router-dom'
import { Context } from '..'

const User = () => {
    const {user} = useContext(Context)
    const [users, setUsers] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if(user.isAuth){
            check().then(data => setUsers(data))
        }
    }, [])
    console.log(user)
    return (
        <div>
            <Container>
                {user.isAuth ? 
                <Row>
                <Col style={{maxWidth: "30%"}}>
                    <Image className='mt-4 mb-4' width={300} height={300} src={userLogo}/>
                </Col>
                <Col style={{ paddingTop: '20px'}}>
                    <Row className='d-flex flex-column'>
                        <h3>Имя: {users.login}</h3>
                        <span><b>Телефон</b>: {users.phone}</span>
                        <p><b>Email</b>: {users.email}</p>
                        <span><NavLink to={LOCATION_ROUTE}>Местоположение</NavLink></span>
                        <span>
                        <span onClick={() => navigate(HELP_ROUTE)}  style={{fontSize: '16px', marginTop: '32px'}}><span className='help_link' style={{cursor: 'pointer'}}>Помощь</span></span>
                        </span>
                    </Row>
                </Col>
            </Row>
            :
            <p style={{marginTop: '50px', textAlign: 'center'}}>Пожайлутса войдите в свой аккаунт</p>
            }
            </Container>
        </div>
    )
}

export default User