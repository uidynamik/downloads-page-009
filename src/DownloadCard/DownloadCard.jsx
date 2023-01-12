import React from 'react';
import './DownloadCard.css';

export const DownloadCard = ({ icon, name }) => {
  return (
    <div className="download-card">
      <div className="platform-icon">{icon}</div>
      <div className="platform-name">{name}</div>
      <button className="download-btn">Download</button>
    </div>
  );
};
