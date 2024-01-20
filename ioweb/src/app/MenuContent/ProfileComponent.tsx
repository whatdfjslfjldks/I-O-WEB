import React from 'react';
import {Layout} from 'antd';
import "../styles.css"
import CustomSider from './CustomSider';
import Title from './Title';


const { Content } = Layout;

export default function ProfileComponent() {
  
  return (
    <Layout className='layout'>
     <CustomSider menu='profile'/>
      <Layout>
        <div style={{ position: 'relative' }}>
          <Content>
            <div className='show-main'>
             <Title menu='profile'/>
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



