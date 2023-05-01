import React, { useState } from 'react'
import axios from 'axios';

const DisplayPictureUpload = () => {
    const [displayPicture, setDisplayPicture] = useState('');

  const handleChange = (event) => {
    setDisplayPicture(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put('http://localhost:5000/displayprofile/displaypicture', { displayPicture });
      console.log(response.data.message);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };
  return (
    <>
    <div className='container prose' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }} >
      <h1>Upload Display Picture</h1>
      </div>
    <div className="container " style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
      <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs mt-24" onChange={handleChange}/>
      <button className="btn btn-outline btn-secondary mt-24 ml-2.5" type="submit" onClick={handleSubmit} >Upload</button>
    </div> 
    
      <img src={displayPicture} alt="" />
    </>
  )
}

export default DisplayPictureUpload
