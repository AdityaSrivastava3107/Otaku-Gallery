import React from 'react'
import { useNavigate } from 'react-router-dom'
const Profile = () => {

  const navigate = useNavigate();

  const navigateToUploadForm=()=>{
    navigate('/uploadform')
  }

  return (
    <>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1rem' }}>
        <h1 className="header font-bold" style={{fontSize:'25px', marginTop: '5px'}}>Your Profile</h1>
      </div>
      <div className='flow-root'>
        <div className='float-left'>
          <div className="card w-96 bg-base-200 shadow-xl" style={{ height: '30rem', borderRadius: '12px', marginLeft: '25px', marginTop: '60px' }}>
            <div className="avatar" style={{ margin: '0 auto', marginTop: '15px' }}>
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
        <div className="float-center" style={{ marginRight: '200px', marginTop: '25px' }}>
          <div className="h-96 carousel carousel-vertical rounded-box" style={{ height: '40rem' }}>
            <div className="carousel-item h-full">
              <div className="card w-96 bg-base-200 shadow-xl" style={{ width: '35rem', marginLeft: '120px', marginBottom: '25px' }}>
                <div className="card-body">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src="https://i.pinimg.com/originals/bf/b4/b6/bfb4b6bf038b30c42116828d2f539b30.jpg" alt='' />
                    </div>
                  </div>
                  <h2 className="card-title" style={{ marginLeft: '45px', marginTop: '-39px' }}>Username</h2>
                  <p>Description of the post made by the user.</p>
                </div>
                <figure><img src="https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2020/img_20200921_002031_476-1rWaxJScSLehYoCG.jpg" alt="Shoes" /></figure>
              </div>
            </div>
            <div className="carousel-item h-full">
              <div className="card w-96 bg-base-200 shadow-xl" style={{ width: '35rem', marginLeft: '120px', marginBottom: '25px' }}>
                <div className="card-body">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src="https://i.pinimg.com/originals/bf/b4/b6/bfb4b6bf038b30c42116828d2f539b30.jpg" alt='' />
                    </div>
                  </div>
                  <h2 className="card-title" style={{ marginLeft: '45px', marginTop: '-39px' }}>Username</h2>
                  <p>Description of the post made by the user.</p>
                </div>
                <figure><img src="https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2020/img_20200921_002031_476-1rWaxJScSLehYoCG.jpg" alt="Shoes" /></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
