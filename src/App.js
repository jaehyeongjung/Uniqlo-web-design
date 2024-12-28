import React, { useState, useEffect, useRef } from 'react';
import main from './asset/main.mp4';
import section1 from './asset/section1.mp4';
import './App.css';
import Icon from './asset/a.png';
import background from './asset/uniqlo.webp';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const videoTextRef = useRef([]);
  const [showText, setShowText] = useState([false, false]); // 각 비디오 텍스트의 표시 여부

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // IntersectionObserver로 화면에 보일 때 애니메이션 적용
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // 텍스트가 화면에 보일 때마다 애니메이션을 트리거
          setShowText((prevState) => {
            const newState = [...prevState];
            newState[index] = true; // 해당 index의 텍스트를 보이게 설정
            return newState;
          });
        } else {
          // 요소가 다시 보이지 않으면 애니메이션을 리셋
          setShowText((prevState) => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
          });
        }
      });
    }, { threshold: 0.6 }); // 50% 이상 보일 때 트리거

    // videoText 요소에 대해 observer 설정
    videoTextRef.current.forEach((el) => {
      observer.observe(el);
    });

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
          <div className="videoText_header">UNIQLO</div>
          <img src={Icon} className="icon" alt="Icon" />
          <div
            className={`videoText ${showText[0] ? 'fadeIn' : ''}`}
            ref={(el) => videoTextRef.current[0] = el}
          >
            옷을 바꾸고, 상식을 바꾸고, 세계를 바꿔 나간다.
          </div>
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
          <div
            className={`videoText ${showText[1] ? 'fadeIn' : ''}`}
            ref={(el) => videoTextRef.current[1] = el}
          >
            옷의 힘으로, 우리 사회를 아름답게
          </div>
        </div>
        <div className='list'>
            <img src={background} className="background" alt="back"/>
            <div className='listHeader'>
              <p 
              className="listText">best</p>
            </div>
            <div className='lists'>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
