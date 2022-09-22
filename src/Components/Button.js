import React from 'react';
import './global.css'

const Button = ({children, className, ...rest}) => {
    return (
        <>
            <button className="button" {...rest}>
              <span>{children}</span>
            </button>
        </>
    );
};

export default Button;