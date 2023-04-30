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
      const token = localStorage.getItem('auth-token');
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'auth-token' : token
      }});
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
  }

  const navToProfile=()=>{
    navigate('/profile')
  }
  

  return (
    <div className='container' style={{marginLeft : '440px', marginTop : '150px'}} >
      <h3 className='container font-bold' style={{marginBottom : '25px', marginLeft: '140px', fontSize : '20px'}}>Upload your Art</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" className="file-input w-full max-w-xs" onChange={handleFileInput} />
        <button className="btn btn-outline btn-secondary" type="submit" onClick={navToProfile} style={{marginLeft : '10px'}}>Upload</button>
      </form>
      <img src={file} alt="" />
      <p>{message}</p>
    </div>
  );
}

export default UploadForm;
