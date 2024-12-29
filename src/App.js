import React, { useState, useEffect } from "react";
import "./App.css";
import VideoSection from "./videoSection";
import main from "./asset/main.mp4";
import section1 from "./asset/section1.mp4";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="mainSection">
        <VideoSection
          videoSrc={main}
          text="옷을 바꾸고, 상식을 바꾸고, 세계를 바꿔 나간다."
          scrollY={scrollY}
          index={0}
        />
        <VideoSection
          videoSrc={section1}
          text="옷의 힘으로, 우리 사회를 아름답게"
          scrollY={scrollY}
          index={1}
        />
      </div>
    </div>
  );
}

export default App;
