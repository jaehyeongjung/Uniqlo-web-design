import React, { useState, useEffect } from 'react';
import main from './asset/main.mp4';
import section1 from './asset/section1.mp4';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topVideoHeight = Math.max(100 - scrollY / 5, 0);
  const bottomVideoHeight = Math.min(scrollY / 5 + 100, 200);

  return (
    <div className="App">
      <div className="mainSection">
        <div className="videoWrapper">
          <video
            className="topVideo"
            style={{
              height: `${topVideoHeight}vh`,
              transform: `translateY(${scrollY / 3}px)`,
            }}
            autoPlay
            muted
            loop
          >
            <source src={main} type="video/mp4" />
          </video>
          <div className="videoText">This is the top video text</div>
        </div>

        <div className="videoWrapper">
          <video
            className="bottomVideo"
            style={{
              height: `${bottomVideoHeight}vh`,
              transform: `translateY(-${scrollY / 3}px)`,
            }}
            autoPlay
            muted
            loop
          >
            <source src={section1} type="video/mp4" />
          </video>
          <div className="videoText">This is the bottom video text</div>
        </div>
        <div className='main_1_container'>
            <div className='main_1'>

            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
