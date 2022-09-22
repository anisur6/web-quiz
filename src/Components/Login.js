import React from 'react';
import Illustration from './Illustration';
import loginImage from '../assets/login.svg';
import './global.css';
import {Container, Spinner } from 'react-bootstrap';
import auth from '../firebase.init';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const navigate = useNavigate();
    const [signInWithGoogle, guser, ] = useSignInWithGoogle(auth);

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

      let signInError;

      if(error){
        signInError = <p>{error.message}</p>
      }

    const { register, handleSubmit, formState: { errors } } = useForm();

    if(guser){
        console.log(guser);
    }

    if(loading){
       return(
        <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
        </Spinner>
       ) 
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
        navigate('/');
    }
   
   


    return (
        <>
        <Container className='mt-3'>
            
        <h1>Login to your account</h1>
        <div className="column">
        <Illustration img={loginImage}/>
        <form className="login form" onSubmit={handleSubmit(onSubmit)}>
            {errors.email?.type === 'required' && "Email is required"}
            <input type="email" {...register("email", { required: true, maxLength: 20 })} placeholder="Enter Email" />
            <input type="password" {...register("password", { required: true, minLength: 5 })} placeholder="Enter password" />
            {errors.password?.type === 'required' && "use more than 6"}
            
            {signInError}
            <button type="submit">
                login
            </button>
            <button className='border-0 bg-info rounded-3 p-2 fw-bold' onClick={() => signInWithGoogle()} >
            Login with Google
            </button>
       
           
           
         
           
        </form>

        </div>
            
        </Container>
        </>
    );
};

export default Login;