import React from 'react';
import Answer from './Answer';
import ProgressBar from './ProgressBar';
import './global.css'
import { Container } from 'react-bootstrap';

const Quiz = () => {
    return (
        <>
        <Container>
        <h1 className='mt-4'>Pick three of your favorite Star Wars Flims</h1>
        <h4>Question can have multiple answers</h4>

        <Answer />
        <ProgressBar />
        </Container>
        
        </>
    );
};

export default Quiz;