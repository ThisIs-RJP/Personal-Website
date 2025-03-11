// # This is the images used in this website

import joker from './images/joker.png';
import ayase from './images/ayaseIcon.jpg';
import insta from './images/instagram.png';
import linkedIn from './images/linkedIinWhite.png';
import spotify from './images/spotify.png';
import discord from './images/discord.png';
import pfp from './images/pfp.jpg';

// ### Important imports
import './Mobile.css';
import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

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
    <div>
        <div className="App">
            {/* ### THIS IS MY NAVIGATION BAR ------------------------ */}
            <div className='fixedWrapper-mobile'>
                <div className="navbar-mobile">
                    <img src={joker} className='icon-mobile' />
                    <div className="nameplace-mobile">
                        <span id="namePlace-mobile"><b>RJ Paraiso</b></span>
                    </div>

                    <div className="details-mobile">
                        <span class="type-mobile"> /&nbsp;DevOps Engineer /&nbsp; Front-end Developer</span>
                    </div>

                    <div className='navBoxBox-mobile'>
                        <div id="moreContents">
                        <Link to="backGroundBlock1" smooth={true} duration={500}>
                            <div>
                            <a href="" className='links'>About Me</a>
                            </div>
                        </Link>

                        <div>
                            <a href="https://github.com/thisIs-RJP/" className='links'>GitHub</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='profile-background-mobile'>
                <div className='backgroundHalf'>
                </div>
                <div className='backgroundHalf2'>
                </div>
            </div>

            <div className="first-block-mobile">
                <div className="profile-card-container-mobile">
                    <div className='me-box-mobile'>
                        <div>
                            <img src={pfp} id="me-icon-mobile" />
                            <br></br>
                            <span id='namePlace2'>RJ Paraiso</span>
                            <div className='profileStuff'>
                                DevOps Engineer<br></br>Front-End Developer
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
                    </div>

                    <div className="profile-info-mobile">
                        <div className='side-text-mobile'>
                            <p1>
                                <i>Welcome</i>
                            </p1>
                            <div className='button-line-mobile'>
                                <a href="https://github.com/thisIs-RJP/">
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
                                </a>
                            </div>

                            <div className='description-mobile'>
                                <div className='left-line-mobile'>
                                    Welcome to my website. 
                                    <br />
                                    Please use the elements
                                    provided to navigate through it.
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="buffer-mobile" />

            <div className='container-container-mobile'>
                <div className="title-block-mobile">
                    <div className='block-one-mobile'>
                        {
                            showTitle
                            &&
                            <div>
                                <div className='container-title-mobile'>
                                    <div className='title-mobile'>
                                        <div className='rotate-title-mobile'>
                                            ABOUT
                                        </div>
                                        <div className='rotate-title-mobile'>
                                            ME
                                        </div>
                                    </div>
                                </div>

                                <div className="description-two-mobile">
                                    <div className="description-two-text-mobile">
                                        <b>RJ Paraiso | DevOps, Platform Service Engineer</b><br /><br />

                                        Hi! My name is RJ and I am currently in my 3rd year of college studying Computer Science.
                                        <br />
                                        <br />
                                        I love programming and learning new things. I particularly like web development, however, I enjoy most things programming related.
                                        <br />
                                        <br />
                                        Feel free to contact me using my contacts below, or using my socials on my card above.
                                        <br />
                                        <br />
                                        <b>Email - </b> rjparaiso369@gmail.com
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                {/* <div className='buffer1'></div> */}
            </div>
        </div >
    </div>
  );
}

export default App;
