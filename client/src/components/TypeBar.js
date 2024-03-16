import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <ListGroup>
            {product.type.map(type =>
                <ListGroup.Item 
                    style={{cursor: 'pointer'}}
                    active={type.id === product.selectedType.id}
                    onClick={() => product.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>    
            )}
        </ListGroup>
    )
})

export default TypeBar