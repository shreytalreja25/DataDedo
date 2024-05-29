import React, { useState } from 'react';

function DataUploadCard() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  return (
    <div style={{ width: '500px', padding: '1rem', margin: '1rem', backgroundColor: 'lightblue' }}>
      <h2>Data Upload</h2>
      <div
        className="upload-area"
        style={{
          width: '100px',
          height: '100px',
          border: '2px dashed #ccc',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          margin: '0 auto', // Add this line to center the upload area horizontally
          backgroundColor: 'white', // Set background color to white
        }}
      >
        <input
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileUpload}
          multiple
        />
        <span
          style={{ fontSize: '24px', color: 'lightblue' }} // Set color to white
          onClick={() => document.querySelector('input[type="file"]').click()} // Trigger file input click
        >
          +
        </span>
      </div>
      <p style={{ textAlign: 'center' }}>
        Drag and drop CSV or XLS files here or click the plus sign to upload.
      </p>
      {selectedFiles.length > 0 && (
        <div>
          <h3>Selected Files:</h3>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DataUploadCard;
