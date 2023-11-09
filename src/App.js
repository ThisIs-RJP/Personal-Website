// # This is the images used in this website

import joker from './images/joker.png';
import ayase from './images/ayaseIcon.jpg';

// ### Important imports
import './App.css';

function App() {
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
      <div className='aboutMe'>
        <div className='meBox'>
          <img src={ayase} id="meIcon" />
          <span id='namePlace2'>RJ Paraiso</span>
          <div id='redLine'></div>
          <div className='profileStuff'>
            Programmer<br></br>Front-End Developer

          </div>
        </div>

      </div>

      {/* #### Dont touch this div */}
    </div>
  );
}

export default App;
