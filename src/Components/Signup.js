import React from 'react';
import Form from './Form';
import Illustration from './Illustration';
import TextInput from './TextInput';
import './global.css'
import Button from './Button';
import CheckBox from './CheckBox';
import signupimage from '../assets/signup.svg';


const Signup = () => {
    return (
        <>
        <h1>Create an Account</h1>

        <div className="column">
        <Illustration img={signupimage}/>
        <Form className="signup" >
        <TextInput type="text" placeholder="Enter your name" />
        <TextInput type="email" placeholder="Enter your Email" />
        <TextInput type="password" placeholder="Enter password" />
        <TextInput type="password" placeholder="Confirm Password" />
        <CheckBox text="I agree to the Terms & Conditions"/>
        <Button><span>Sign Up</span></Button>
        </Form>
        </div>
            
        </>
    );
};

export default Signup;