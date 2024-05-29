import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaSignOutAlt } from 'react-icons/fa'; // Import icons

function TopBar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', fontFamily: 'Monospace', height: '60px' }}>
      <h1 style={{ fontSize: '24px', margin: 0 }}>DataDedo</h1>
      <div>
        <Link to="/dashboard" style={{ color: 'white', marginRight: '10px' }}>
          <FaHome style={{ fontSize: '32px' }} /> 
        </Link>
        <Link to="/profile" style={{ color: 'white', marginRight: '10px' }}>
          <FaUser style={{ fontSize: '32px' }} /> 
        </Link>
        <Link to="/" style={{ color: 'white' }}>
          <FaSignOutAlt style={{ fontSize: '32px' }} /> 
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
