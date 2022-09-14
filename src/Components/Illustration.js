import React from 'react';
import './global.css'


const Illustration = ({img}) => {
    return (
        <>
            <div className="illustration">
            <img src={img} alt="" />
          </div>
        </>
    );
};

export default Illustration;