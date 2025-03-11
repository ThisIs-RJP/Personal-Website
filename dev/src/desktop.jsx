// # This is the images used in this website

import joker from './images/joker.png';
import ayase from './images/ayaseIcon.jpg';
import insta from './images/instagram.png';
import linkedIn from './images/linkedIinWhite.png';
import spotify from './images/spotify.png';
import discord from './images/discord.png';
import pfp from './images/pfp.jpg';
import Burger from './images/burger.jpg';

// ### Important imports
import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

// ### Important functions

function App() {
  return (
    <div class="desktop-main">
      <div class="main-box">

        {/* ########################### LEFT BOX CONFIGURATION ########################### */}

        <div class="left-box">
          <div class="left-box-gap"></div>

          <div class="tab-box">
            <img src={Burger} />
          </div>

          <div class="left-box-content-box">
            <div class="left-box-content-box-gap"></div>

            <div class="left-box-title-box">
              <div style={{marginLeft: "5%"}}>
                RJ <br />
                Paraiso
              </div>
            </div>

            <div class="left-box-photo-box">
              <img src={pfp} />
            </div>

            <div class="left-box-content-box-gap">
              <div class="red-line"></div>
            </div>

            <div class="left-box-short-desc-box">
              <div>

                Hi! My name is RJ Paraiso. Click on the tabs above for information
                about me.

              </div>
            </div>


          </div>
        </div>

        {/* ########################### LEFT BOX CONFIGURATION ########################### */}


        <div className='right-box'>
        </div>
        
      </div>
    </div>
  );
}

export default App;
