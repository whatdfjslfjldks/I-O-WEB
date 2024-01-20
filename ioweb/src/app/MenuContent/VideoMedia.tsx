'use client'
import React, { useState } from 'react';
import "../styles.css"
import { Layout} from 'antd';
import CustomSider from './CustomSider';
import Title from './Title';


const {Content } = Layout;
export default function VideoMedia() {
  const [videoURLs, setVideoURLs] = useState<string[]>([]);

  // 处理文件选择
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const objectURL = URL.createObjectURL(file);
      setVideoURLs(prevURLs => [...prevURLs, objectURL]); // 将新的视频 URL 添加到数组中
    }
  };
  

  return (
    <Layout>
     <CustomSider menu='video'/>
      <Layout>
        <div style={{ position: 'relative' }}>
          <Content> 
          <div className='show-main'>
             <Title menu='video'/>
    <div className='media-video-container'>
      {/* 文件选择器 */}
      <input type="file" accept="video/*" onChange={handleFileChange} />

      {/* 显示选定的视频 */}
      {videoURLs.length > 0 && (
        <div>
          <h2>选定的视频：</h2>
          {typeof window !== 'undefined' && (
          <ol>
            {videoURLs.map((url, index) => (
              <li key={index}>
                <video controls width="400" src={url} />
              </li>
            ))}
          </ol>
          )}
        </div>
      )}
    </div>
    </div>
    </Content>
    </div>
    </Layout>
    </Layout>
  );
}
