import axios from 'axios'
import React, {useState, useEffect, useContext} from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { check } from '../http/userAPI'
import { Context } from '..'

const Help = () => {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const {user} = useContext(Context)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (user.isAuth){
            check().then(data => setEmail(data.email))
        } else {
            setError(true)
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/api/email', {
                to: email,
                subject: subject,
                text: message
            })
        } catch (error) {
            console.error('Error sendeing email', error)
        }
    }

    return (
        <Container style={{width: '600px'}}>
            {error ? 
            <h4 style={{marginTop: '50px'}}>Пожайлутса войдите в свой аккаунт</h4>
            :
            <Form onSubmit={handleSubmit} style={{marginTop: '30px'}}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email адрес</label>
                    <Form.Control 
                        type="email"
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label for="setSubject" class="form-label">Тема сообщения</label>
                    <Form.Control 
                        type="text"
                        id="setSubject" 
                        placeholder="Введите тему сообщения..."
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea
                        class="form-control"
                        style={{marginTop: '15px'}}
                        rows="3"
                        id="exampleFormControlTextarea1"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder='Сообщение'
                    />
                </div>
                <Button>Отправить</Button>
            </Form>
            }
        </Container>
    )
}

export default Help