import React from 'react';
import { Layout} from 'antd';
import "../styles.css"
import CustomSider from './CustomSider';
import Title from './Title';

const {Content } = Layout;

export default function HistoryComponent() {
  return (
    <Layout>
      <CustomSider menu='history' />
      <Layout>
        <div style={{ position: 'relative' }}>
          <Content>
            <div className='show-main'>
             <Title menu='history'/>
              <div className='show-main'>
                这是历史界面
              </div>
            </div>
          </Content>
        </div>
      </Layout>
    </Layout>
  );
};



