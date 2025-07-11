import React from 'react';
import './DownloadApp.css';
import playStore from '../assets/play_store.png';
import appStore from '../assets/app_store.png';

function DownloadApp() {
  return (
    <section className="download-app-section">
      <h2>For Better Experience Download<br />BiteBliss App</h2>
      <div className="download-app-buttons">
        <a href="#"><img src={playStore} alt="Google Play" /></a>
        <a href="#"><img src={appStore} alt="App Store" /></a>
      </div>
    </section>
  );
}

export default DownloadApp; 