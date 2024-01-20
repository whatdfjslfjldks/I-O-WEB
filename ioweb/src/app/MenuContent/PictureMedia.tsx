'use client'
import React, { useState } from 'react';
import "../styles.css"
import { Layout} from 'antd';
import Image from 'next/image'
import CustomSider from './CustomSider';
import Title from './Title';

const { Content } = Layout;
export default function PictureMedia() {
  const [pictureURLs, setPictureURLs] = useState<string[]>([]);

  // 处理文件选择
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const objectURL = URL.createObjectURL(file);
      setPictureURLs((prevURLs: string[]) => [...prevURLs, objectURL]); // 确保prevURLs的类型是string[]数组
    }
  };
  
  

  return (
    <Layout>
      <CustomSider menu='picture'/>
      <Layout>
        <div style={{ position: 'relative' }}>
          <Content> 
          <div className='show-main'>
            <Title menu='picture'/>
    <div className='media-video-container'>
      {/* 文件选择器 */}
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {pictureURLs.length > 0 && (
        <div>
          <h2>选定的图片：</h2>
          <ol>
            {pictureURLs.map((url, index) => (
              <li key={index}>
                {typeof window !== 'undefined' && ( <Image width="400" src={url} alt='picture' />)}
              </li>
            ))}
          </ol>
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
