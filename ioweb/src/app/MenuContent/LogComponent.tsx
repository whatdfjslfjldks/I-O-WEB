import React from 'react';
import { Layout} from 'antd';
import "../styles.css"
import CustomSider from './CustomSider';
import Title from './Title';

const {Content } = Layout;

export default function LogComponent() {
  return (
    <Layout>
      <CustomSider menu='log'/>
      <Layout>
        <div style={{ position: 'relative' }}>
          <Content>
            <div className='show-main'>
            <Title menu='log'/>
              <div className='show-main'>
                这是日志界面
              </div>
            </div>
          </Content>
        </div>
      </Layout>
    </Layout>
  );
};



