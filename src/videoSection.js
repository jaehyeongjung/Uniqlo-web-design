import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const VideoSection = ({ videoSrc, text, scrollY, index, totalSections }) => {
  const [showText, setShowText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const textRef = useRef(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setShowText(entry.isIntersecting));
      },
      { threshold: 0.6 }
    );

    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  const videoHeight = isMobile
    ? Math.min(scrollY / 5 + 100, 100)
    : index === 0
      ? Math.max(100 - scrollY / 5, 0)
      : Math.min(scrollY / 5 + 100, 150);

  let translateY = 0;
  const transitionPoint = window.innerHeight * 0.77;
  const transitionOffset = transitionPoint / 3;

  if (index === 0) {
    translateY = scrollY / 3;
  } else if (index === totalSections - 1) {
    translateY = -scrollY / 3;
  } else {
    if (scrollY < transitionPoint) {
      translateY = -scrollY / 3;
    } else {
      translateY = (scrollY - transitionPoint) / 3 - transitionOffset;
    }
  }

  return (
    <div className="videoWrapper">
      <video
        className={
          index === 0
            ? "topVideo"
            : index === totalSections - 1
              ? "bottomVideo"
              : "middleVideo"
        }
        style={{
          height: `${videoHeight}vh`,
          transform: `translateY(${translateY}px)`,
        }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div
        className={`videoText ${showText ? "fadeIn" : ""}`}
        ref={textRef}
        style={{
          transform: `translate(-50%, -50%) translateY(${translateY}px)`, //비디오 동기화
        }}
      >
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
  totalSections: PropTypes.number.isRequired,
};

export default VideoSection;
