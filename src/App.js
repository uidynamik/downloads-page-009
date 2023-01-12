import React from 'react';
import './style.css';
import { DownloadCard } from './DownloadCard/DownloadCard';
import {
  Windows,
  AppleLogo,
  LinuxLogo,
  AndroidLogo,
} from './DownloadCard/Icons';

export default function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Downloads</h1>
        <p>
          Download is available for all platforms. Click to download for the
          platform you use
        </p>
      </div>
      <div className="downloads-section">
        <DownloadCard name="Windows" icon={<Windows />} />
        <DownloadCard name="macOS" icon={<AppleLogo />} />
        <DownloadCard name="GNU/Linux" icon={<LinuxLogo />} />
        <DownloadCard name="iOS" icon={<AppleLogo />} />
        <DownloadCard name="Android" icon={<AndroidLogo />} />
      </div>
    </div>
  );
}
