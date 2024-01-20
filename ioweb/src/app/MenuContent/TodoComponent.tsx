import React from 'react';
import { Layout } from 'antd';
import "../styles.css"
import CustomSider from './CustomSider';
import Title from './Title';




const {Content } = Layout;

export default function TodoComponent() {


  return (
    <Layout className='layout'>
      <CustomSider menu='todo'/>
      <Layout>
        <div style={{ position: 'relative' }}>
          <Content>
            <div className='show-main'>
            <Title menu='todo'/>
              {/* ------------------------- */}
       </div>
          </Content>
        </div>
      </Layout>
    </Layout>
  );
};

