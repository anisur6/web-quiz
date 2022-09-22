import React from 'react';
import { Link } from 'react-router-dom';
import './global.css'
import Quiz from './Quiz';

const Videos = () => {
    return (
        <>
           
        <div className="videos">

      

        <Link  to="/quiz" className='text-decoration-none'>
            <div className="video">
              <img src="https://img.freepik.com/free-vector/digital-online-education-concept-blank-space-laptop_255625-422.jpg?size=626&ext=jpg&ga=GA1.2.634800036.1662466014" alt="" />
              <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
              <div className="qmeta">
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
              </div>
            </div>
        </Link>
      

        <Link  to="/quiz"  className='text-decoration-none'>
            <div className="video">
              <img src="https://img.freepik.com/free-vector/digital-online-education-concept-blank-space-laptop_255625-422.jpg?size=626&ext=jpg&ga=GA1.2.634800036.1662466014" alt="" />
              <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
              <div className="qmeta">
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
              </div>
            </div>
            </Link>


            <Link  to="/quiz"  className='text-decoration-none'>
            <div className="video">
              <img src="https://img.freepik.com/free-vector/digital-online-education-concept-blank-space-laptop_255625-422.jpg?size=626&ext=jpg&ga=GA1.2.634800036.1662466014" alt="" />
              <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
              <div className="qmeta">
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
              </div>
            </div>
            </Link>

            <Link  to="/quiz"  className='text-decoration-none'>
            <div className="video">
              <img src="https://img.freepik.com/free-vector/digital-online-education-concept-blank-space-laptop_255625-422.jpg?size=626&ext=jpg&ga=GA1.2.634800036.1662466014" alt="" />
              <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
              <div className="qmeta">
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
              </div>
            </div>
            </Link>
        </div>
        </>
    );
};

export default Videos;