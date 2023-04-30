import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel';
import OtherUsers from './OtherUsers';
const Profile = () => {

  const navigate = useNavigate();

  const navigateToUploadForm=()=>{
    navigate('/uploadform')
  }

  return (
    <>
      <div className="container prose" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '7vh', margin:'0 auto' }}>
        <h1>Your Profile</h1>
      </div>
      <div className='grid-cols-4 grid'>
        <div >
          <div className="card w-96 bg-base-200 shadow-xl" style={{ height: '30rem', borderRadius: '12px', marginLeft:'10px' }}>
            <div className="avatar online" style={{ margin: '0 auto', marginTop: '15px' }}>
              <div className="w-24 mask mask-squircle">
                <img src="https://i.pinimg.com/originals/bf/b4/b6/bfb4b6bf038b30c42116828d2f539b30.jpg" alt='' />
              </div>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold">Aditya Srivastava</h2>
              <p style={{ marginTop: '20px' }}>My name is Aditya, I am an artist and this is my Otaku Gallery Bio!</p>
              <div className="container" style={{ marginBottom: '60px' }}>
                <div className="badge badge-primary" style={{ marginRight: '10px' }}>Fine Art</div>
                <div className="badge badge-primary">Illustrations</div>
                <div className="badge badge-primary" style={{ marginLeft: '10px' }}>Sketching</div>
              </div>
              <button className="btn btn-outline btn-primary" style={{ marginBottom: '10px' }} onClick={navigateToUploadForm}>Add Art</button>
              <button className="btn btn-sm btn-outline btn-primary">Edit Profile</button>
            </div>
          </div>
        </div>
        <div className='col-span-2'>
          <div style={{ marginTop: '25px' }}>
         <Carousel/>
         </div>
        </div>
        <div className='' >
          <OtherUsers/>
        </div>
      </div>
    </>
  )
}

export default Profile
