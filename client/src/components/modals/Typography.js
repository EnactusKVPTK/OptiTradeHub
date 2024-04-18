import React from 'react'
import Warning from '../Warning'
import Modal from "react-bootstrap/Modal";

const Typography = ({show, onHide}) => {
    return (
        
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Warning/>
        </Modal>
    )
}

export default Typography