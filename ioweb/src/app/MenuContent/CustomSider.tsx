'use client'
import React,{useState} from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import "../styles.css"

import overview from '../pic/overview.png';
import energy from '../pic/energy.png';
import history from '../pic/history.png';
import log from '../pic/log.png';
import map from '../pic/map.png';
import media from '../pic/media.png';
import todo from '../pic/todo.png';
import closeMenu from '../pic/closeMenu.png';
import openMenu from '../pic/openMenu.png';
import setting from '../pic/setting.png';
import picture from '../pic/picture.png';
import video from '../pic/video.png';

interface CustomSiderProps {
  menu:string;
}

const CustomSider: React.FC<CustomSiderProps> = ({menu}) => {
  const { Sider } = Layout;
  const [selectedMenu, setSelectedMenu] = useState(menu);
  const [isOpen, setIsOpen] = useState(true);

  const handleMenuClick = (key:string) => {
    setSelectedMenu(key);
  };
  function handleOpenClick() {
    setIsOpen(true);
  }
  function handleCloseClick() {
    setIsOpen(false);
  }
  const { t} = useTranslation();
  
  // function handleArrowClick() {
  //   window.history.back();
  // }

  return (
    <Sider width={isOpen ? 200 : 80} style={{ background: '#fff' }}>
      <h2 style={{ display: 'flex', alignItems: 'center' }}>
        <div onClick={!isOpen ? handleOpenClick : handleCloseClick}>
          {typeof window!=='undefined' &&(<Image src={!isOpen ? openMenu : closeMenu} className='show-menu' alt="Icon" />)}
        </div>
        &nbsp;&nbsp;
        {isOpen && <span>{t('io')}&nbsp;{t("club")}</span>}
      </h2>
      <hr />
     {typeof window !== 'undefined' && (
      <Menu selectedKeys={[selectedMenu]} mode="inline" onClick={(e) => handleMenuClick(e.key)}>
        <Menu.Item className='menu-item' key="overview" icon={<Image src={overview} className='overview' alt='overview' />}>
          <Link to="/overview">{t('overview')}</Link>
        </Menu.Item>
        <Menu.Item className='menu-item' key="energy" icon={<Image src={energy} className='energy' alt='energy' />}>
          <Link to="/energy">{t('energy')}</Link>
        </Menu.Item>
        <Menu.Item className='menu-item' key="map" icon={<Image src={map} className='map' alt='map' />}>
          <Link to="/map">{t('map')}</Link>
        </Menu.Item>
        <Menu.Item className='menu-item' key="log" icon={<Image src={log} className='log' alt='log' />}>
          <Link to="/log">{t('log')}</Link>
        </Menu.Item>
        <Menu.Item className='menu-item' key="history" icon={<Image src={history} className='history' alt='history' />}>
          <Link to="/history">{t('history')}</Link>
        </Menu.Item>
        <Menu.Item className='menu-item' key="media" icon={<Image src={media} alt='media' />}>
          <Link to="/media">{t('media')}</Link>
        </Menu.Item>
        <Menu.Item className='menu-item' key="todo" icon={<Image src={todo} alt='todo' />}>
          <Link to="/todo">{t('todo')}</Link>
        </Menu.Item>
        <Menu.Item className='menu-item' key="setting" icon={<Image src={setting} alt='setting' />}>
          <Link to="/setting">{t('setting')}</Link>
        </Menu.Item>
        {/* <Menu.Item className='menu-item' key="picture" icon={<Image src={picture} alt='picture' />}>
          <Link to="/picture">{t('picture')}</Link>
        </Menu.Item>
        <Menu.Item className='menu-item' key="video" icon={<Image src={video} alt='video' />}>
          <Link to="/video">{t('video')}</Link>
        </Menu.Item> */}
      </Menu>
)}
    </Sider>
  );
};

export default CustomSider;
