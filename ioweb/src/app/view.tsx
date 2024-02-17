import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./globals.css";

import Login from './login';
import Register from './register';
import FindPass from "./findPass";

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Main from './main';
import Home from './home';
import Community from './community';
import About from './about';
import Console from './console';
/*----------------------------------------*/
import OverviewComponent from './MenuContent/OverviewComponent';
import EnergyComponent from './MenuContent/EnergyComponent';
import MapComponent from './MenuContent/MapComponent';
import LogComponent from './MenuContent/LogComponent';
import HistoryComponent from './MenuContent/HistoryComponent';
import MediaComponent from './MenuContent/MediaComponent';
import TodoComponent from './MenuContent/TodoComponent';
import SettingComponent from './MenuContent/SettingComponent';
import ClientEnvWrap from './utils/clientEnvWrap';
/*----------------------------------------*/
import ConsoleUi from './MenuContent/ConsoleUi';

export default function View() {
  return (
    <div>
   <ClientEnvWrap>
        <I18nextProvider i18n={i18n}>
          <Router>
            <Routes>
              {/* 默认界面 */}
              <Route path="/" element={<OverviewComponent />} />
              {/* 主页 */}
              <Route path="/home" element={<Home />} />
              {/* 社区 */}
              <Route path="/community" element={<Community />} />
              {/* 关于 */}
              <Route path="/about" element={<About />} />
              {/* 控制台 */}
              <Route path="/console" element={<OverviewComponent />} />
              {/* 登录 */}
              <Route path="/login" element={<Login />} />
              {/* 注册 */}
              <Route path="/register" element={<Register />} />
              {/* 找回密码 */}
              <Route path="/findpass" element={<FindPass />} />
              {/* 概览 */}
              <Route path='/overview' element={<OverviewComponent />} />
              {/* 能源 */}
              <Route path='/energy' element={<EnergyComponent />} />
              {/* 地图 */}
              <Route path='/map' element={<MapComponent />} />
              {/* 日志 */}
              <Route path='/log' element={<LogComponent />} />
              {/* 历史 */}
              <Route path='/history' element={<HistoryComponent />} />
              {/* 媒体 */}
              <Route path='/media' element={<MediaComponent />} />
              {/* 待办事项 */}
              <Route path='/todo' element={<TodoComponent />} />
              {/* 设置 */}
              <Route path='/setting' element={<SettingComponent />} />
  
            </Routes>
          </Router>
        </I18nextProvider>
    </ClientEnvWrap>
    </div>
  );
} 