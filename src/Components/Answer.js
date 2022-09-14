import React from 'react';
import CheckBox from './CheckBox';
import classes from './style/Answer.module.css'

const Answer = () => {
    return (
        <>
            <div className={classes.answer}>
                <CheckBox className={classes.answer}  text="test answer" />
            </div>
        </>
    );
};

export default Answer;