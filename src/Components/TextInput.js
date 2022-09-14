import React from 'react';
import './global.css';


const TextInput = ({type, placeholder}) => {
    return (
        <>
            <div className="textInput">
              <input type={type} placeholder={placeholder} />
            </div>
        </>
    );
};

export default TextInput;