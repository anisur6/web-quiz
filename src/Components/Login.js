import React from 'react';
import Illustration from './Illustration';
import loginImage from '../assets/login.svg'
import Form from './Form';
import './global.css';
import TextInput from './TextInput';
import Button from './Button';


const Login = () => {
    return (
        <>
        <h1>Login to your account</h1>
        <div className="column">
        <Illustration img={loginImage}/>
        <Form className="login form" >
            <TextInput type="email" placeholder="Enter Email" />
            <TextInput type="password" placeholder="Enter password" />
            <Button>Login</Button>
        </Form>
        </div>
            
        </>
    );
};

export default Login;