import React from 'react';
import Illustration from './Illustration';
import './global.css'
import signupimage from '../assets/signup.svg';
import { Container, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';



const Signup = () => {

  const navigate = useNavigate();
   

   
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

      let signInError;

      if(error || updateerror){
        signInError = <p>{error?.message || updateerror?.message}</p>
      }

    const { register, handleSubmit, formState: { errors } } = useForm();

    

    if(loading || updating){
       return(
        <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
        </Spinner>
       ) 
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName : data.name});
        navigate('/')
    }
   


 

 







    return (
        <>
        <Container className='mt-2'>

        <h1>Create an Account</h1>

        <div className="column">
        <Illustration img={signupimage}/>
        <form className="login form" onSubmit={handleSubmit(onSubmit)}>
            {errors.name?.type === 'required' && "name is required"}
            <input type="name" {...register("name", { required: true, maxLength: 15 })} placeholder="Enter Full Name" />
            {errors.email?.type === 'required' && "Email is required"}
            <input type="email" {...register("email", { required: true, maxLength: 20 })} placeholder="Enter Email" />
            {errors.password?.type === 'required' && "use more than 6"}
            <input type="password" {...register("password", { required: true, minLength: 5 })} placeholder="Enter password" />
            <input type="password" {...register("passwordconfirm", { required: true, minLength: 5 })} placeholder="Confirm Password password" />
            
            {signInError}
            <button type="submit">
                Sign Up
            </button>
       
       
           
           
         
           
        </form>
        </div>
            
        </Container>
        </>
    );
};

export default Signup;