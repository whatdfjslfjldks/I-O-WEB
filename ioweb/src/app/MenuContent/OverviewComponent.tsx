import React from 'react';
import { Layout } from 'antd';
import "../styles.css"
import CustomSider from './CustomSider';
import Title from './Title';


const { Content } = Layout;

export default function OverviewComponent() {
  return (
    <Layout className='layout'>
      <CustomSider menu='overview'/>
      <Layout>
        <div style={{ position: 'relative' }}>
          <Content>
            <div className='show-main'>
              <Title menu='overview'/>
              <div className='show-main'>
                这是概览界面
              </div>
            </div>
          </Content>
        </div>
      </Layout>
    </Layout>
  );
};



