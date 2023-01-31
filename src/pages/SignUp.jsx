import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';


function SignUp() {

    const navigate = useNavigate();

    const [fields, setFields] = useState({
        name: '',
        rollno: '',
        email: '',
        password: '',
    })

    function inputChangeHandler(e) {
        setFields({...fields,[e.target.name]: e.target.value});

    }

    async function sendingData (e) {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: fields.name,
                roll_no: fields.rollno,
                email: fields.email,
                password: fields.password,
            })
        })

        const backendResp = await response.json();
        console.log(backendResp);

        navigate('/');
    }


  return (
    <div className='signup-page'>
            <div className='signup-form'>
                <div className='signup-img'>
                    <img src='./assets/signup-img.jpg' alt='images of stack of books'/>
                </div>
                <div>
                    <form className='form'>
                        <h3>Sign Up</h3>
                        <div className='signup-input-tags'>
                            <input type='text' placeholder='Enter your name' name='name' value = {fields.name} onChange={inputChangeHandler}/>
                            <input type='text' placeholder='Enter your Roll No.' name='rollno' value = {fields.rollno} onChange={inputChangeHandler}/>
                            <input type='email' placeholder='Enter your email id' name='email' autoComplete="off" value = {fields.email} onChange={inputChangeHandler}/>
                            <input type='password' placeholder='Create password' name='password' value = {fields.password} onChange={inputChangeHandler}/>
                        </div>
                        <button onClick={sendingData}>Submit</button>

                        <Link to='/' className='signup-link'>already a user?</Link>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default SignUp