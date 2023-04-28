import React from 'react'

const Profile = () => {
  return (
    <>
      <div className="container my-2">
        <h1 style={{ textAlign: 'center', alignSelf: 'center' }}>Your Profile</h1>
      </div>
      <div className="avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '25vh' }}>
        <div className="w-24 rounded-full">
          <img src="https://i.pinimg.com/originals/bf/b4/b6/bfb4b6bf038b30c42116828d2f539b30.jpg" alt="" />
        </div>
      </div>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
        <div className="card w-96 bg-info-content shadow-xl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
          <div className="card-body">
            <h2 className="card-title">Name</h2>
            <p>Aditya Srivastava</p>
            <h2 className="card-title">Bio</h2>
            <p>Your Bio djbbfeb,ehbf fefmgegfmygef fgEGfggefgafygeygf fhef.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
