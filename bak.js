        <div className="profileCard">
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

              {/* ### This is the first box */}

              <div className='sideText'>
                <h1>
                  <i>Welcome</i>
                </h1>
                <div className='buttonLine'>
                  {/* <div className='cvButton'>
                    <button
                      className={`animated-button ${isHovered ? 'hovered' : ''}`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      My CV
                    </button>
                  </div> */}

                  {/* <div className='cvButton'>
                    <button
                      className={`animated-button ${isHovered2 ? 'hovered' : ''}`}
                      onMouseEnter={() => setIsHovered2(true)}
                      onMouseLeave={() => setIsHovered2(false)}
                    >
                      Websites
                    </button>
                  </div> */}

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
        </div>