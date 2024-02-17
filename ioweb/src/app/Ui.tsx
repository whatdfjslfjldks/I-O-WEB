import React,{useState } from 'react';
import {Layout,theme } from 'antd';
import TitleMenu from './NavigationMenu/TitleMenu';



const { Header, Content} = Layout;

interface ConsoleUiProps{
  SelectedTitleMenu:string;
  ConsoleContent?:React.ReactNode; 
}

export default function ConsoleUi(ConsoleUiProps: ConsoleUiProps){
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
<Layout className="flex h-screen">
      <Header className='flex items-center'>
<TitleMenu menu={ConsoleUiProps.SelectedTitleMenu}/>
      </Header>
      <Layout>


        <Layout style={{backgroundColor:"", padding: '0 0 0' }}>
          <Content
            style={{
              padding: 0,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
     {ConsoleUiProps.ConsoleContent}
          </Content>
        </Layout>

        
      </Layout>
    </Layout>
  );
};

