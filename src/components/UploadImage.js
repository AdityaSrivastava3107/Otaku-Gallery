import React from 'react'
import UploadForm from './UploadForm'
import { useState } from 'react';
import axios from 'axios';


const UploadImage = (file) => {
    const [message, setMessage] = useState('');
    
    const formData = new FormData();
    formData.append('image', file);

    axios.post('http://localhost:5000/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => setMessage(response.data))
      .catch(error => console.log(error));
  return (
    <div>
      <h1>File Upload</h1>
      <p>{message}</p>
      <UploadForm onUpload={UploadImage} />
    </div>
  )
}

export default UploadImage
