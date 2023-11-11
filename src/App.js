// # This is the images used in this website

import joker from './images/joker.png';
import ayase from './images/ayaseIcon.jpg';
import insta from './images/instagram.png';
import linkedIn from './images/linkedIinWhite.png';
import spotify from './images/spotify.png';
import discord from './images/discord.png';

// ### Important imports
import './App.css';
import React, { useState } from 'react';

// ### Important functions

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="App">

      {/* ### THIS IS MY NAVIGATION BAR ------------------------ */}
      <ul id="navigationBar">
        <img src={joker} className='icon' />
        <span id="namePlace"><b>RJ Paraiso</b></span>
        <span id="type"> /&nbsp;&nbsp; Programmer /&nbsp;&nbsp; Front-end Developer</span>

        <div id='contents'>
          <span id="moreContents">
            <a href="" className='links'>About Me</a>
            <a href="" className='links'>GitHub</a>
            <a href="" className='links'>CV</a>
          </span>
        </div>
      </ul>
      {/* ### THIS IS THE END OF MY NAVIGATION BAR ------------------------ */}
      <div className='profileBackground'>
        <div className='backgroundHalf'>
        </div>
        <div className='backgroundHalf2'>
        </div>
      </div>

      {/* #### This is the Middle Box */}
      <div className='aboutMe'>
        <div className='meBox'>
          <img src={ayase} id="meIcon" />
          <span id='namePlace2'>RJ Paraiso</span>
          <div id='redLine'></div>
          <div className='profileStuff'>
            Programmer<br></br>Front-End Developer
          </div>

          <div className='socials'>
            <a href="">
              <img src={insta} className='icons' />
            </a>
            <a href="">
              <img src={discord} className='icons' />
            </a>
            <a href="">
              <img src={linkedIn} className='icons' />
            </a>
            <a href="">
              <img src={spotify} className='icons' />
            </a>
          </div>

        </div>

        {/* ### This is the first box */}

        <div className='sideText'>
          <h1>
            <i>Welcome</i>
          </h1>
          <div className='buttonLine'>
            <div className='cvButton'>
              <button
                className={`animated-button ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                My CV
              </button>
              {/* <a href=".files/CV_RJ_Paraiso.pdf">My CV</a> */}
            </div>

            <div className='cvButton'>
              <button
                className={`animated-button ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Websites
              </button>
              {/* <a href=".files/CV_RJ_Paraiso.pdf">My CV</a> */}
            </div>

            <div className='cvButton'>
              <button
                className={`animated-button ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Projects
              </button>
              {/* <a href=".files/CV_RJ_Paraiso.pdf">My CV</a> */}
            </div>
          </div>

          <div className='description'>
            Hi!<br></br> My name is RJ.<br></br> Please find your way around my website using the elements provided.
          </div>
        </div>
      </div>
      {/* #### This is the end of the Middle Box */}

      {/* #### Dont touch this div */}
    </div>
  );
}

export default App;
