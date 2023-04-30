import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate() 

    const userLogin = (event, props) => {
        event.preventDefault();

        axios.post('http://localhost:5000/api/authorize/login', { username, password })
            .then((response) => {
                // Handle the response from the backend API
                localStorage.setItem('auth-token', response.data.authtoken);
                navigate('/');
                props.showAlert('Logged in Successfully!')
            })
            .catch((error) => {
                // Handle any errors that occur during the request
                console.error(error);
            });
    }

    const navigateToSignUp = ()=>{
        navigate('/signup');
    }

    return (
        <>
        <div className="container prose" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh', margin: '0 auto' }}>
                <h1>Login To Your Account!</h1>
            </div>
        <div className="container" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',height: '50vh', margin:'0 auto'}}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Username or Email</span>
                </label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <button className="btn btn-outline btn-primary my-3" onClick={userLogin}>Login</button>
                <span className="label-text">Don't have an Account?</span>
                <button className="btn btn-outline btn-primary my-3" onClick={navigateToSignUp}>Sign Up Now!</button>
            </div>
            </div>
        </>
    )
}

export default LoginPage
