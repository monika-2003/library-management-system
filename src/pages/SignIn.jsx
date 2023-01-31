import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css';

function SignIn() {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    function handleInputChange(e) {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    async function handleLogin(e) {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/loginuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            })
        })

        const backendResp = await response.json();
        console.log(backendResp);

        if(backendResp.success) {
            navigate('/home');
            localStorage.setItem('authToken',backendResp.authToken);
            localStorage.setItem('email', credentials.email);
        }

    }
    return (
        <div className='signin-page'>
            <div className='signin-form'>
                <div className='signin-img'>
                    <img src='./assets/signin-img.webp' alt='images of stack of books'/>
                </div>
                <div>
                    <form className='form'>
                        <h3>Sign In</h3>
                        <div className='input-tags'>
                            <input type='email' placeholder='Enter your email id' name='email' value={credentials.email} onChange={handleInputChange}/>
                            <input type='password' placeholder='Enter your password' name='password' value={credentials.password} onChange={handleInputChange}/>
                        </div>
                        <button onClick={handleLogin}>Submit</button>

                        <Link to='/sign-up' className='signup-link'>new user?</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
