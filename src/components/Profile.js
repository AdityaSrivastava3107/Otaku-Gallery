import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel';
import OtherUsers from './OtherUsers';
import ProfileCard from './ProfileCard';
const Profile = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [displayPicture, setDisplayPicture] = useState('');
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/displayprofile/profile', { headers: { 'Authorization': `Bearer ${localStorage.getItem('auth-token')}` } });
        const { displayName, displayBio, displayPicture } = res.data.data;
        setName(displayName);
        setBio(displayBio);
        setDisplayPicture(displayPicture);
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchProfile();
  }, []);
  
  return (
    <>
      <div className="container prose" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '7vh', margin: '0 auto' }}>
        <h1>Your Profile</h1>
      </div>
      <div className='grid-cols-4 grid'>
        <ProfileCard name={name} bio={bio} displayPicture={displayPicture}/>
        <div className='col-span-2 h-1'>
          <div style={{ marginTop: '25px' }}>
            <Carousel displayPicture={displayPicture}/>
          </div>
        </div>
        <div className='mt-7' >
           <OtherUsers />
        </div>
      </div>
    </>
  )
}

export default Profile
