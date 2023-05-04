import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UploadForm(props) {
  const [post, setPost] = useState(null);
  const [description, setDescription] = useState('');
  const navigate = useNavigate()
  const handleFileChange = (event) => {
    setPost(event.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post', post);
    formData.append('description', description);
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth-token')}`,
        'Content-Type': 'multipart/form-data'
      }
    };

    try {
      const response = await axios.post('http://localhost:5000/api/upload/uploadPost',formData, config);
      console.log(response.data);
      navigate('/profile')
    } catch (error) {
      console.error(error);
    }
  }





  return (
    <>
      <div className='container prose' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }} >
        <h1>Upload your Art</h1>
      </div>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15vh', margin: '0 auto' }}>
        <textarea className="textarea textarea-primary w-80" placeholder="Description" onChange={(e) => setDescription(e.target.value)} ></textarea>
      </div>
      <div className="container " style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
        <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs mt-8" onChange={handleFileChange} />
        <button className="btn btn-outline btn-secondary mt-8 ml-2.5"  onClick={handleSubmit} type="submit"  >Upload</button>
      </div>
    </>

  );
}

export default UploadForm;
