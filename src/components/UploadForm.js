import React from 'react'
import { useState } from 'react';
const UploadForm = (props) => {
    const [file, setFile] = useState(null);

    function handleFileChange(event) {
      setFile(event.target.files[0]);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      props.onUpload(file);
    }
  return (
    <form onSubmit={handleSubmit}>
    <input type="file" onChange={handleFileChange} />
    <button type="submit">Upload</button>
  </form>
  )
}

export default UploadForm
