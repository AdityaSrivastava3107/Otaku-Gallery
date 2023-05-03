import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UploadForm(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate()
  async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
        }
      });
      setMessage(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const [file, setFile] = useState();
  function handleFileInput(event) {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files);
    setFile(URL.createObjectURL(event.target.files[0]));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await uploadFile(selectedFile);
    navigate('/profile')
  }




  return (
    <>
    <div className='container prose' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }} >
      <h1>Upload your Art</h1>
      </div>
    <div className="container " style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
      <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs mt-24" onChange={handleFileInput}/>
      <button className="btn btn-outline btn-secondary mt-24 ml-2.5" type="submit" onClick={handleSubmit} >Upload</button>
    </div> 
    
      <img src={file} alt="" />
      <p>{message}</p>
    </>
    
  );
}

export default UploadForm;
