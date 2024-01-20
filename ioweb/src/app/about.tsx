import "./styles.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from './i18n';
/*----------------------------------------*/
// import VideoMedia from './MenuContent/VideoMedia';
// import PictureMedia from './MenuContent/PictureMedia';
/*----------------------------------------*/

export default function About() {

  return (
    <div>
        {/* <I18nextProvider i18n={i18n}></I18nextProvider> */}
        <header>
        <Link to="/" className="logo">I/O CLUB</Link>
<ul>
  <li><Link to="/home">主页</Link></li>
  <li><Link to="/community">社区</Link></li>
  <li><Link to="/about">关于</Link></li>
  <li><Link to="/console">控制台</Link></li>
  <li><Link to="/login">登录/注册</Link></li>
</ul>
        </header>
      </div>
  );
}