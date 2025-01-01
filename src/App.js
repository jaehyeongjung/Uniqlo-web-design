import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import VideoSection from "./videoSection";
import main from "./asset/main.mp4";
import section1 from "./asset/section1.mp4";
import section2 from "./asset/section2.mp4";
import Header from "./Header.js";

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
    <Router>
      <div className="App">
        <Header />
        <div className="mainSection">
          <VideoSection
            videoSrc={main}
            text={
              <>
                <span>옷을 바꾸고, </span>
                <span>상식을 바꾸고, </span>
                <span>세계를 바꿔 나간다.</span>
              </>
            }
            scrollY={scrollY}
            index={0}
          />
          <VideoSection
            videoSrc={section1}
            text={
              <>
                <span>옷의 힘으로, </span>
                <span>우리 사회를 아름답게</span>
              </>
            }
            scrollY={scrollY}
            index={1}
          />
          <VideoSection
            videoSrc={section2}
            text={
              <>
                <span>미래의 스타일을 </span>
                <span>지금, </span>
                <span>경험하다.</span>
              </>
            }
            scrollY={scrollY}
            index={1}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
