import React from 'react';
import './global.css';


const TextInput = ({type, placeholder, ...rest}) => {
    return (
        <>
            <div className="textInput">
              <input type={type} {...rest} placeholder={placeholder} />
            </div>
        </>
    );
};

export default TextInput;