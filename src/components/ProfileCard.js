import React from 'react'
import { useNavigate} from 'react-router-dom';
const ProfileCard = ({ name, bio, displayPicture }) => {

    
    const navigate = useNavigate();

    const navigateToUploadForm = () => {
        navigate('/uploadform')
    }

    const navigateToEditProfile = () => {
        navigate('/createprofile')
    }

    return (
        <>
            <div className='mt-7' >
                <div className="card w-96 bg-base-200 shadow-xl" style={{ height: '30rem', borderRadius: '12px', marginLeft: '10px' }}>
                    <div className="avatar online" style={{ margin: '0 auto', marginTop: '15px' }}>
                        <div className="w-24 mask mask-squircle">
                        <img src={`data:image/jpeg;base64,${displayPicture}`} alt='' />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">{name}</h2>
                        <p style={{ marginTop: '20px' }}>{bio}</p>
                        <div className="container" style={{ marginBottom: '60px' }}>
                            <div className="badge badge-primary" style={{ marginRight: '10px' }}>Fine Art</div>
                            <div className="badge badge-primary">Illustrations</div>
                            <div className="badge badge-primary" style={{ marginLeft: '10px' }}>Sketching</div>
                        </div>
                        <button className="btn btn-outline btn-primary" style={{ marginBottom: '10px' }} onClick={navigateToUploadForm}>Add Art</button>
                        <button className="btn btn-sm btn-outline btn-primary" onClick={navigateToEditProfile}>Edit Profile</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard
