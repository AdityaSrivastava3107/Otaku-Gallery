import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const DisplayPictureUpload = () => {

  const navigate = useNavigate();

  const [displayPicture, setDisplayPicture] = useState(null);

  const handleFileChange = (event) => {
    setDisplayPicture(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('displayPicture', displayPicture);
    axios.post('http://localhost:5000/api/dp/uploadDisplayPicture', formData, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth-token')}`,
        'Content-Type': 'multipart/form-data'
      },
    })
      .then((response) => {
        console.log(response.data);
        navigate('/createprofile')
      })
      .catch((error) => {
        console.error(error);
        // handle error
      });
  };
  return (
    <>
    <div className='container prose' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }} >
      <h1>Upload Display Picture</h1>
      </div>
    <div className="container " style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
      <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs mt-24" onChange={handleFileChange}/>
      <button className="btn btn-outline btn-secondary mt-24 ml-2.5" type="submit" onClick={handleSubmit} >Upload</button>
    </div> 
    
      <img src={displayPicture} alt="" />
    </>
  )
}

export default DisplayPictureUpload
