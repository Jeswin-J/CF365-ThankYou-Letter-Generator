import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import "../../../assets/styles/main.css";

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { generatePDF } from '../../../services/genApi';
import { validateRollNumber } from '../../../utils/formValidator';

const BlurCard = () => {
    const [rollNum, setRollNum] = useState('');
    const [error, setError] = useState('');
    const [support, setSupport] = useState('');

    const handleButtonClick = async () => {
        try {
            const trimmedRoll = rollNum.trim().toUpperCase();
            if (!validateRollNumber(trimmedRoll)) {
                setSupport('');
                setError('Please enter a valid Roll Number!');
                return;
            }

            const inputData = {
                roll_num: trimmedRoll,
            };

            setError('');
            setRollNum('');
            const success = await generatePDF(inputData);

            if(success === -1){
                setError('');
                setSupport('Thank You for your Support!');
            }

        } catch (error) {
            setSupport('');
            setError('Error Generating PDF.');
        }
    };

    return (
        <Card className='blur-card'>
            <Card.Body className='center'>
                <Card.Title className='text-center' style={{fontSize: "28px"}}>Heyy! It's CF365 Celebration!</Card.Title>
                <br/>
                <Card.Text>
                    We've sparked imagination, inspired innovation, and coded a brighter future together! As a small mark of our gratitude, here it is!
                </Card.Text>
                <TextInput value={rollNum} onNameChange={setRollNum} error={error} support={support} />
                <Button onClick={handleButtonClick} />
            </Card.Body>
        </Card>
    );
};

export default BlurCard;
