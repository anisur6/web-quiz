import React from 'react';
import './global.css'

const Form = ({children, ...rest}) => {
    return (
        <>
          <form className="form" {...rest}>
           {children}
            </form>  
        </>
    );
};

export default Form;