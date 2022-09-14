import React from 'react';

const CheckBox = ({text,className, ...rest}) => {
    return (
        <>
            <label>
              <input type="checkbox" {...rest} />
              <span>{text}</span>
            </label>
        </>
    );
};

export default CheckBox;