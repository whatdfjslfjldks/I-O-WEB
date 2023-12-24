import "./styles.css";
import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import pic from "./pic/640.png";
import moon from "./pic/moon.png"
import moon2 from "./pic/moon2.png"
import mountain from "./pic/mountain.png"
import just_mountain from "./pic/just_mountain.png"
import cloud from "./pic/cloud.png"

import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from './i18n';
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
  const cloudStyle = { opacity: opacityValue };

  return (
    <div>
        {/* <I18nextProvider i18n={i18n}></I18nextProvider> */}
        <header>
          <a href="#" className="logo">I/O CLUB </a>
<ul>
  <li>
    <a href="#" className="active">主页</a>
  </li>
  <li><a href="#">社区</a></li>
  <li><a href="#">关于</a></li>
  <li><a href="#">控制台</a></li>
  <li><a href="#">登录/注册</a></li>
</ul>
        </header>
<section>
  <img src={moon2} className="moon" style={moonStyle}></img>
  <img src={cloud} className="cloud" style={cloudStyle}></img>
  <h2 className="txt">I/O CLUB</h2>
  <a href="#" className="btn">进入</a>
</section>
<div className="content">
  <p>这里放置一些介绍宣传的内容（图片，文字等等等）</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
  <p>21321321312312321sdfsdfsdf233</p>
</div>
      </div>
  );
}