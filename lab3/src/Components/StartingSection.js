import React from 'react';
import '../App.css';
import './StartingSection.css';
import { Link } from 'react-router-dom';
import Session from 'react-session-api'

function StartingSection() {

  return (
    <>
    <div className='starting-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted></video>
      <h1>Let's Blog !</h1>
      <div className='starting-btns'>
      <Link to='/blogs/create'>
      <button className='btn'>
        Create a new blog
      </button>
    </Link>
      </div>
    </div>

    </>
  );
}

export default StartingSection;