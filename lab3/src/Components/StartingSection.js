import React from 'react';
import '../App.css';
import { Button } from './Button';
import './StartingSection.css';

function StartingSection() {
  return (
    <div className='starting-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Let's Blog !</h1>
      <p>What are you waiting for?</p>
      <div className='starting-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LOGIN
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SIGN UP <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default StartingSection;