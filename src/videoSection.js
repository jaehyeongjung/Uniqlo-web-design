import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const VideoSection = ({ videoSrc, text, scrollY, index }) => {
  const [showText, setShowText] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowText(true);
          } else {
            setShowText(false);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const videoHeight =
    index === 0
      ? Math.max(100 - scrollY / 5, 0)
      : Math.min(scrollY / 5 + 100, 200);
  const translateY = index === 0 ? scrollY / 3 : -scrollY / 3;

  return (
    <div className="videoWrapper">
      <video
        className={index === 0 ? "topVideo" : "bottomVideo"}
        style={{
          height: `${videoHeight}vh`,
          transform: `translateY(${translateY}px)`,
        }}
        autoPlay
        muted
        loop
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className={`videoText ${showText ? "fadeIn" : ""}`} ref={textRef}>
        {text}
      </div>
    </div>
  );
};

VideoSection.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
  scrollY: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default VideoSection;
