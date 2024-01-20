import React from 'react';
import { Layout} from 'antd';
import "../styles.css"
import CustomSider from './CustomSider';
import Title from './Title';
/*----------------------------------------*/

const {Content } = Layout;
export default function EnergyComponent() {

  return (
    <Layout>
       <CustomSider menu='energy'/>
      <Layout>
        <div style={{ position: 'relative' }}>
          <Content>
          <div className='show-main'>
          <Title menu='energy'/>
          <div className='show-main'>
              这是能源界面
            </div>
            </div>
          </Content>
        </div>
      </Layout>
    </Layout>
  );
};



