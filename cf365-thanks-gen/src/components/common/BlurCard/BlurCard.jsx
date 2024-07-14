import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import "../../../assets/styles/main.css";

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { generatePDF } from '../../../services/genApi';

const BlurCard = () => {
    const [name, setName] = useState('');

    const handleNameChange = (value) => {
        setName(value); 
    };

    const handleButtonClick = async () => {
        try {
            const inputData = {
                name: name.trim(), 
            };

            await generatePDF(inputData);
            
            setName('');

        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <Card className='blur-card'>
            <Card.Body className='center'>
                <Card.Title className='text-center' style={{fontSize: "28px"}}>Heyy! It's CF365 Celebration!</Card.Title>
                <br/>
                <Card.Text>
                We've sparked imagination, inspired innovation, and coded a brighter future together!  As a small mark of our gratitude, here it is!
                </Card.Text>
                <TextInput onNameChange={handleNameChange}/>
                <Button onClick={handleButtonClick} />
            </Card.Body>
        </Card>
    );
};

export default BlurCard;
