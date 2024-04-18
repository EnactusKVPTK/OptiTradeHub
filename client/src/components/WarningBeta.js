import React from 'react'
import { Container } from 'react-bootstrap'

const WarningBeta = () => {
    return (
        <div>
            <Container>
                <div class="alert alert-warning mt-2" style={{marginLeft: '-30px', maxWidth:'130%'}} role="alert">
                    <h4 class="alert-heading">Сайт находится в бета тестировании!</h4>
                    <p>С искренней благодарностью за ваше терпение и понимание! Мы в OptiTradeHub глубоко ценим вашу поддержку в этот период развития нашего проекта. Хотя <b>наш сайт все еще находится в бета-версии</b>, ваша обратная связь и отзывы неоценимы для нас.</p>
                    <p>Приносим искренние извинения за любые неудобства, с которыми вы могли столкнуться. Наша команда работает не покладая рук, чтобы создать для вас неповторимый опыт использования OptiTradeHub.</p>
                    <p>Еще раз, большое спасибо за ваше терпение, понимание и поддержку!</p>
                </div>
            </Container>
        </div>
    )
}

export default WarningBeta