import React from 'react'
import { Container } from 'react-bootstrap'

const MobileMessage = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh'}}>
            <div>
                <div class="alert alert-warning" role="alert">
                    <h3>Добро пожаловать на наш OptiTradeHub!</h3>
                    <p>Приветствуем вас на нашем сайте. Мы усердно трудимся над улучшением пользовательского опыта и приносим извинения за возможные неудобства при просмотре на мобильных устройствах.</p>
                    <p>Пожалуйста, имейте в виду, что сайт оптимизирован для просмотра на компьютерах и планшетах. Если вы пользуетесь мобильным устройством, необходимо включить опцию <b>"Версия на ПК"</b> для просмотра.</p>
                    <p>Благодарим за ваше понимание и интерес к нашему ресурсу. Если у вас возникли вопросы или замечания, не стесняйтесь обращаться. Мы всегда готовы помочь!</p>
                    <p>С наилучшими пожеланиями,<br/>
                    <p></p>Команда OptiTradeHub</p>
                </div> 
            </div>
        </Container>
    )
}

export default MobileMessage