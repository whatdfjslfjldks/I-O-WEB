'use client'
import React, { useState, useEffect } from 'react';
import "./styles.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import moon2 from "./pic/moon2.png"
import Image from 'next/image';

/*----------------------------------------*/
// import VideoMedia from './MenuContent/VideoMedia';
// import PictureMedia from './MenuContent/PictureMedia';
/*----------------------------------------*/

export default function Main() {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const starsStyle = { top: `${scrollValue * 0.25}px` };
  const opacityValue = Math.max(scrollValue / 500, 0); // 500是滚动距离，你可以根据需要调整这个值
  const moonStyle = { top: `${scrollValue * 1.25}px` };

  return (
    <div>
      {/* <I18nextProvider i18n={i18n}></I18nextProvider> */}
      <header>
        {/* <a href="#" className="logo">I/O CLUB </a> */}
        <Link to="/" className="logo">I/O CLUB</Link>
        <ul>
          <li><Link to="/home">主页</Link></li>
          <li><Link to="/community">社区</Link></li>
          <li><Link to="/about">关于</Link></li>
          <li><Link to="/overview">控制台</Link></li>
          <li><Link to="/login">登录/注册</Link></li>
        </ul>
      </header>
      <section>
        {typeof window !== 'undefined' && (
          <Image src={moon2} className="moon" style={moonStyle} alt='moon' />
        )}
        {/* <Image src={cloud} className="cloud" style={cloudStyle} alt='cloud'/> */}
        <h2 className="txt">I/O CLUB</h2>
        <a href="#" className="btn">进入</a>
      </section>
      {/* <div className="content">
  <p>这里放置一些介绍宣传的内容（图片，文字等等等）</p>
</div> */}
    </div>
  );
}

