import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './buy.css';

const Buy = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const buy = (event) => {
        event.preventDefault();
        console.log(name, message);
    }

    return (
        <div className='buy'>
            <Form onSubmit={buy}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter name"
                        value={name}
                        onChange={(event) => setName(event.target.value)} 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)} 
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Buy
                </Button>
            </Form>
        </div>
    );
}

export default Buy;