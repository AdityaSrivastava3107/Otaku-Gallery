import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate() 

    const userLogin = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/api/authorize/login', { email, password })
            .then((response) => {
                // Handle the response from the backend API
                localStorage.setItem('auth-token', response.data.authtoken);
                navigate('/');
            })
            .catch((error) => {
                // Handle any errors that occur during the request
                console.error(error);
            });
    }
    return (
        <>
        <div className="container" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',height: '60vh'}}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Username or Email</span>
                </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <button className="btn btn-outline btn-primary my-3" onClick={userLogin}>Login</button>
            </div>
            </div>
        </>
    )
}

export default LoginPage
