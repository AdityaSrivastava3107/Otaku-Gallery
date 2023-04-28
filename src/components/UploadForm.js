import React, { useState } from 'react';
import axios from 'axios';

function UploadForm(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');

  async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleFileInput(event) {
    setSelectedFile(event.target.files[0]);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await uploadFile(selectedFile);
  }

  return (
    <div>
      <h3>Upload your Image</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={handleFileInput} />
        <button className="btn btn-outline btn-secondary" type="submit">Upload</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default UploadForm;
