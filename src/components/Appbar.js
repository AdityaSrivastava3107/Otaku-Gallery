import React from 'react'
import { Link } from 'react-router-dom'
import Notifications from './Notifications'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/authContext';
import { useContext } from 'react';

const Appbar = () => {
    const { setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        console.log('a')
        try {
            const res = await axios.post('http://localhost:5000/api/authorize/logout',{} ,{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
                }
            });
            console.log(res)
            if(res.status!==200){
                throw res.statusText
            }
            setIsLoggedIn(false)
            localStorage.removeItem('auth-token');
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/home'}>Homepage</Link></li>
                            <li><Link to={'/shop'}>Shop</Link></li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link className="btn btn-ghost normal-case text-xl" to={'/'}>Otaku Gallery</Link>
                </div>
                <div className="navbar-end">
                    <div className="form-control h-10 mr-3">
                        <input type="text" placeholder="Search" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <button tabIndex={0} className="btn btn-ghost btn-circle mr-2">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <div><Notifications /></div>

                        </ul>
                    </div>
                    {/* <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button> */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.pinimg.com/originals/bf/b4/b6/bfb4b6bf038b30c42116828d2f539b30.jpg" alt="DP" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/profile'}>Profile</Link></li>
                            <li><Link to={'/login'}>Login</Link></li>
                            <li><Link to={'/signup'}>Sign Up</Link></li>
                            <li><Link onClick={handleLogout}>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appbar
