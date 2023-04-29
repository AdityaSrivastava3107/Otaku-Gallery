import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:5000/api/authorize/createuser', {
            name: name,
            username: username,
            password: password
        })
            .then((response) => {
                // Handle the response from the backend API
                localStorage.setItem('auth-token', response.data.authtoken);
                navigate('/createprofile');
            })
            .catch((error) => {
                // Handle any errors that occur during the request
                console.log(error);
            });
    }
  return (
    <div>
       <>
       <div className="container" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',height: '10vh'}}>
        <h1>Create Your Account!</h1>
       </div>
        <div className="container" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',height: '60vh'}}>
            <form className="form-control w-full max-w-xs" onSubmit={handleSubmit}>
            <label className="label">
                    <span className="label-text">Your Name?</span>
                </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Username</span>
                </label>
                <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <button className="btn btn-outline btn-primary my-3" type="submit" >Sign Up</button>
            </form>
            </div>
        </>
    </div>
  )
}

export default SignUp
