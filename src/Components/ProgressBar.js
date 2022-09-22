import React from 'react';
import { Link } from 'react-router-dom';
import './global.css'

const ProgressBar = () => {
    return (
        <>
        <div className="progressBar">
          <div className="backButton">
          <span class="material-icons-outlined"> arrow_back </span>
          </div>
          <div className="rangeArea">
            <div className="tooltip">24% Cimplete!</div>
            <div className="rangeBody">
              <div className="progress" style={{width : '20%'}}></div>
            </div>
          </div>
          <Link to="/result" className='text-decoration-none'>
            <button className="button next">
              <span>Next Question</span>
              <span class="material-icons-outlined"> --- </span>
            </button>
          </Link>
        </div>
        </>
    );
};

export default ProgressBar;