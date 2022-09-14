import React from 'react';
import classes from './style/Analysis.module.css'
import './global.css';
import Question from './Question';
import { Container } from 'react-bootstrap';

const Analysis = () => {
    return (
        <>
        <Container>

        <div className={classes.analysis}>
          <h1>Question Analysis</h1>
          <h4>You answerd 5 out of 10 questions correctly</h4>

        <Question />

          
        </div>
        </Container>
        </>
    );
};

export default Analysis;