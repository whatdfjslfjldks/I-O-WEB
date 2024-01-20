import React from 'react';
import { Layout} from 'antd';
import {Link } from 'react-router-dom';
import video from "../pic/video.png"
import picture from "../pic/picture.png"
import { useTranslation } from 'react-i18next';
import "../styles.css"
import Image from 'next/image'
import CustomSider from './CustomSider';
import Title from './Title';

const {Content } = Layout;

export default function MediaComponent() {
  const {t} = useTranslation();
  return (
    <Layout>
      <CustomSider menu='media'/>
      <Layout>
        <div style={{ position: 'relative' }}>
          <Content>
            <div className='show-main'>
          <Title menu='media'/>
              <div className="media-container">
                <Link to="/media/video" className="media-box">
                {typeof window !== 'undefined' && (
                  <Image src={video}
                  alt='video'
                    style={{ width: "160px" }} />
                )}
                  <span style={{ fontSize: "28px", marginTop: "30px", color: "black" }}><b>{t("video")}</b></span>
                </Link>
                <Link to="/media/picture" className="media-box">
                {typeof window !== 'undefined' && (
                  <Image src={picture}
                  alt='picture'
                    style={{ width: "160px" }} />
                )}
                  <span style={{ fontSize: "28px", marginTop: "30px", color: 'black' }}><b>{t("picture")}</b></span>
                </Link>
              </div>
            </div>
          </Content>
        </div>
      </Layout>
    </Layout>
  );
};



