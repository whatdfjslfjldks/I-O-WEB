'use client'
import "./styles.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


 function Community() {

  return (
    <div>
        {/* <I18nextProvider i18n={i18n}></I18nextProvider> */}
        {typeof window !== 'undefined' && (
        <header>
        <Link to="/" className="logo">I/O CLUB</Link>
<ul>
  <li><Link to="/home">主页</Link></li>
  <li><Link to="/community">社区</Link></li>
  <li><Link to="/about">关于</Link></li>
  <li><Link to="/overview">控制台</Link></li>
  <li><Link to="/login">登录/注册</Link></li>
</ul>
        </header>
        )}
            </div>
  );
}
export default Community;