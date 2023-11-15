// # This is the images used in this website

import joker from './images/joker.png';
import ayase from './images/ayaseIcon.jpg';
import insta from './images/instagram.png';
import linkedIn from './images/linkedIinWhite.png';
import spotify from './images/spotify.png';
import discord from './images/discord.png';
import pfp from './images/pfp.jpg';

// ### Important imports
import './App.css';
import React, { useState } from 'react';

// ### Important functions

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

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
            <a href="https://github.com/thisIs-RJP/" className='links'>GitHub</a>
            <a href="" className='links'>CV</a>
          </span>
        </div>
      </ul>
      {/* ### THIS IS THE END OF MY NAVIGATION BAR ------------------------ */}

      <div id="profileProfile">
        <div className='profileBackground'>
          <div className='backgroundHalf'>
          </div>
          <div className='backgroundHalf2'>
          </div>
        </div>

        {/* #### This is the Middle Box */}
        <div className='aboutMe'>
          <div className='meBox'>
            <img src={pfp} id="meIcon" />
            <span id='namePlace2'>RJ Paraiso</span>
            <div id='redLine'></div>
            <div className='profileStuff'>
              Programmer<br></br>Front-End Developer
            </div>

            <div className='socials'>
              <a href="https://www.instagram.com/smoodeazy">
                <img src={insta} className='icons' />
              </a>
              <a href="https://discordapp.com/users/809467129660833843">
                <img src={discord} className='icons' />
              </a>
              <a href="https://www.linkedin.com/in/rj-paraiso-1910a8289/">
                <img src={linkedIn} className='icons' />
              </a>
              <a href="https://open.spotify.com/user/22gub3tiz5dxkdspa5neueafy?si=0b24a7df141044ab&nd=1">
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
                  className={`animated-button ${isHovered2 ? 'hovered' : ''}`}
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                >
                  Websites
                </button>
                {/* <a href=".files/CV_RJ_Paraiso.pdf">My CV</a> */}
              </div>

              <div className='cvButton'>
                <a href="https://github.com/ThisIs-RJP?tab=repositories">
                  <button
                    className={`animated-button ${isHovered3 ? 'hovered' : ''}`}
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                  >
                    Projects
                  </button>
                </a>
                {/* <a href=".files/CV_RJ_Paraiso.pdf">My CV</a> */}
              </div>
            </div>

            <div className='description'>
              Hi!<br></br> My name is RJ.<br></br>
              {/* <div className='container'> */}
              <div className='leftLine'>
                Welcome to my website. Please use the elements
                provided to navigate through it.
                <br></br>

              </div>
              {/* </div> */}

              {/* I am a Computer Science student currently in my 2nd year. */}

              {/* "Lorem ipsum dolor sit amet, consectetur adipiscing elit, */}
              {/* sed do eiusmod tempor incididunt ut labore et dolore magna */}
            </div>
          </div>
        </div>
      </div>
      {/* #### This is the end of the Middle Box */}
      {/* #### This is the start of the first block  */}

      {/* <div id="block1">
        <div id="block1Column">
          <div className='title'>
            <i>About Me</i>
          </div>

          <div className='descUnderTitle'>
            <b>Studying at:</b> Dublin City University<br></br><br></br>
            <b>From</b>: Philippines<br></br><br></br>
            <b>Hobbies</b>: Programming, Creative Writing, Learning New Things
          </div>
        </div>
      </div> */}

      {/* #### This is the end of the first block  */}
      {/* #### This is the start of the footer  */}

      <footer id="footer">
        <div className='contacts'>
          <b>Email</b>: rjparaiso369@gmail.com<br></br>
          <b>Phone</b>: (+353) 089 6108 891
        </div>

        {/* <div className='other'>
          Last Updated:
        </div> */}
      </footer>
      {/* #### This is the end of the footer  */}

      {/* #### Dont touch this div */}
    </div >
  );
}

export default App;
