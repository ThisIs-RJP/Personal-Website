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
import React, { useState, useEffect } from 'react';

// ### Important functions

function App() {

  // #### Important variables
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);


  // #### For scrolling
  const [showTitle, setTitle] = useState(false);
  // const [height, setHeight] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, [])

  const listenToScroll = () => { // does 
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // setHeight(winScroll);
    if (winScroll > 100 && !showTitle) {
      setTitle(true);
    }
  };


  // #### Website code
  return (
    <div className="App">
      {/* ### THIS IS MY NAVIGATION BAR ------------------------ */}

      <div className='fixedWrapper'>
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
      </div>

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
          {/* <div className='sideName'>
              RJ Paraiso
            </div> */}
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
              </div>

              <div className='cvButton'>
                <button
                  className={`animated-button ${isHovered2 ? 'hovered' : ''}`}
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                >
                  Websites
                </button>
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
              </div>
            </div>

            <div className='description'>
              {/* Hi!<br></br> My name is RJ.<br></br> */}
              <div className='leftLine'>
                Welcome to my website. Please use the elements
                provided to navigate through it.
                <br></br>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* #### This is the end of the Middle Box */}

      <div className='buffer1'></div>
      {/* #### This is the start of the first block  */}
      <div className='backGroundBlock1'>
        <div className='block1'>

          {showTitle
            &&
            <div className='containerTitle'>
              <div className='title'>
                <div className='rotateTitle'>
                  ABOUT
                </div>
                <div className='rotateTitle'>
                  ME
                </div>
              </div>

              <div className='vertRedLine'>
                &nbsp;
              </div>

              <div className='descriptionBesideTitle'>
                <b>Hi!</b><br></br>My name is RJ Paraiso. I was born in the Philippines but I moved here to
                Ireland a long time ago. I'm currently in my 2nd year in DCU studying Computer
                Science. I love programming, web development and solving complex problems.
                <br></br> I enjoy learning new things and always looking for ways to
                challenge myself. 
                {/* "Lorem ipsum d>olor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum." */}
              </div>
            </div>
          }
        </div>

      </div>

      {/* #### This is the end of the first block  */}
      {/* #### This is the start of the footer  */}

      <footer id="footer">
        <div className='contacts'>
          <b>Email</b>: rjparaiso369@gmail.com<br></br>
          <b>Phone</b>: (+353)...
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
