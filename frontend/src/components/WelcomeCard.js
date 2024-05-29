import React from 'react';

function WelcomeCard() {
  return (
    <div style={{ width: '500px', padding: '1rem', margin: '1rem', backgroundColor: 'lightblue',fontFamily: 'Monospace' }}>
      <h2>Welcome to DataDedo</h2>
      <p style={{fontFamily: 'Arial'}}>
        DataDedo is a powerful data management and visualization platform that empowers you to easily upload, organize, and analyze your data. Whether it's spreadsheets, CSV files, or Excel documents, DataDedo helps you turn your data into valuable insights and stunning visualizations.
      </p>
    </div>
  );
}

export default WelcomeCard;
