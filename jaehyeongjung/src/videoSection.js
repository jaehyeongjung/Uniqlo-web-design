import React, { useState, useEffect } from 'react';
import './App.css';

function VideoSection({ videoSource, videoText }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const videoHeight = Math.max(100 - scrollY / 5, 0);
  
  return (
    <div className="videoWrapper">
      <video
        className="video"
        style={{
          height: `${videoHeight}vh`,
          transform: `translateY(${scrollY / 3}px)`,
        }}
        autoPlay
        muted
        loop
      >
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className="videoText">{videoText}</div>
    </div>
  );
}

export default VideoSection;
