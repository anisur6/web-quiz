import React from 'react';
import Answer from './Answer';
import clasess from './style/Question.module.css'

const Question = () => {
    return (
        <>
            <div className={clasess.question}>
            <div className={clasess.qtitle}>
              <span className="material-icons-outlined"> help_outline </span>
              Here goes the question from Learn with Sumit?
            </div>
            <Answer />
          </div>
        </>
    );
};

export default Question;