import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const VideoSection = ({ videoSrc, text, scrollY, index }) => {
  const [showText, setShowText] = useState(false);
  const textRef = useRef(null);

  // 화면 크기 상태 추가
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 화면 크기 확인
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true); // 모바일 화면일 때
      } else {
        setIsMobile(false); // 모바일 화면이 아닐 때
      }
    };

    handleResize(); // 초기 화면 크기 확인
    window.addEventListener("resize", handleResize); // 화면 크기 변경 시 이벤트 리스너 추가

    return () => window.removeEventListener("resize", handleResize); // 이벤트 리스너 정리
  }, []);

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

  // 모바일 여부에 따른 비디오 높이 계산
  const videoHeight =
    index === 0
      ? Math.max(100 - scrollY / 5, 0)
      : isMobile
        ? Math.min(scrollY / 5 + 100, 100) // 모바일에서는 100vh
        : Math.min(scrollY / 5 + 100, 150); // 나머지에서는 150vh

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
        playsInline // 모바일에서 전체화면 전환을 방지
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
