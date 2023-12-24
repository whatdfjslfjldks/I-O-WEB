import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './Login';
// import Register from './Register';
// import FindPass from "./FindPass";

import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Main from './Mainpage';
/*----------------------------------------*/
// import OverviewComponent from './MenuContent/OverviewComponent';
// import EnergyComponent from './MenuContent/EnergyComponent';
// import MapComponent from './MenuContent/MapComponent';
// import LogComponent from './MenuContent/LogComponent';
// import HistoryComponent from './MenuContent/HistoryComponent';
// import HomeComponent from './MenuContent/HomeComponent';
// import MediaComponent from './MenuContent/MediaComponent';
// import TodoComponent from './MenuContent/TodoComponent';
// import VideoMedia from './MenuContent/VideoMedia';
// import PictureMedia from './MenuContent/PictureMedia';
// import SettingComponent from './MenuContent/SettingComponent';
// import ProfileComponent from './MenuContent/ProfileComponent';
// import Test from './test';
// import VideoMedia from './MenuContent/VideoMedia';
// import PictureMedia from './MenuContent/PictureMedia';
/*----------------------------------------*/

export default function App() {
  return (
    <div>
        <I18nextProvider i18n={i18n}>
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </Router>
          </I18nextProvider>

      </div>
    // <I18nextProvider i18n={i18n}>
    //   <div>
    //     <ComponentA />
    //     <ComponentB />
    //   </div>
    // </I18nextProvider>
  );
}