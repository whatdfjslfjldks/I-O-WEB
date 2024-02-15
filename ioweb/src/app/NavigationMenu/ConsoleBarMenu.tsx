import { Menu } from "antd";
import {Layout,theme} from 'antd';
import { useNavigate } from "react-router-dom";
import * as Icons from '@ant-design/icons';
import React from 'react';
import { useTranslation } from "react-i18next";

interface ConsoleBarMenuProps {
    menu?: string;
}

const {Sider}=Layout;


export default function ConsoleBarMenu(ConsoleBarMenuProps: ConsoleBarMenuProps) {
    const navigate = useNavigate();
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    
    const { t } = useTranslation();
    const labelName = ['overview', 'energy', 'map', 'log', 'history','media', 'todo', 'setting'];
    const Icon = [Icons.AppstoreOutlined, Icons.RocketOutlined, Icons.GlobalOutlined, Icons.PaperClipOutlined, Icons.ClockCircleOutlined,Icons.UploadOutlined, Icons.DatabaseOutlined, Icons.SettingOutlined];

    function handleMenuClick(info: any) {
        navigate("/"+info.keyPath[0]);
    }
    

    return (
        <Sider width='200' style={{ background: colorBgContainer }}>

        <Menu
            mode="inline"
            defaultSelectedKeys={[ConsoleBarMenuProps.menu!]}
            defaultOpenKeys={['overview']}
            theme="dark"
            onClick={(info) => handleMenuClick(info)}
            style={{ height: '100%', borderRight: 0 }}
        >
            {labelName.map((label, index) => (
                <Menu.Item key={label} style={{ margin: '0 0 20px 0' }}>
                    {React.createElement(Icon[index], { style: { fontSize: '20px' } })}
                    <span style={{ fontSize: '16px' }}>
                        {t(label)}
                    </span>
                </Menu.Item>
            ))}
        </Menu>
        </Sider>
    );
}
