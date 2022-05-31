import React from 'react';
import '../App.css';
import './StartingSection.css';

function StartingSection() {
  return (
    <>
    <div className='starting-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted></video>
      <h1>Let's Blog !</h1>
      <div className='starting-btns'>
      </div>
    </div>
    </>
  );
}

export default StartingSection;