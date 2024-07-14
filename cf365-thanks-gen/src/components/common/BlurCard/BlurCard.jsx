import React from 'react';
import { Card } from 'react-bootstrap';
import "../../../assets/styles/main.css";

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const BlurCard = () => {

    return (
        <Card className='blur-card'>
            <Card.Body className='center'>
                <Card.Title className='text-center' style={{fontSize: "28px"}}>Heyy! It's CF365 Celebration!</Card.Title>
                <br/>
                <Card.Text>
                We've sparked imagination, inspired innovation, and coded a brighter future together!  As a small mark of our gratitude, here it is!
                </Card.Text>
                <TextInput/>
                <Button/>
            </Card.Body>
        </Card>
    );
};

export default BlurCard;
