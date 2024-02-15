import React, { useEffect } from 'react';
import { Menu } from "antd"
import { MenuProps } from 'antd';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface TitleMenuProps {
    menu: string
}

export default function TitleMenu(TitleMenuProps: TitleMenuProps) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const items: MenuProps['items'] = ['home', 'community', 'console', 'about', 'login'].map((key) => ({
        key,
        label: t(key),
        // label:`${key}`
    }));
    const handleMenuClick = (info: any) => {
        navigate(`/${info.key}`)
    }

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap');
            .io-club {
                font-family: 'Protest Revolution', sans-serif;
            }
        `;
        document.head.appendChild(style);
    }, []);

    return (
        <div className="flex items-center justify-center">
            <div className="text-white io-club text-xl">I/O CLUB</div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[TitleMenuProps.menu]}
                items={items}
                disabledOverflow={true}
                style={{ marginLeft: 100, flex: 1, minWidth: 0 }}
                onClick={(info) => handleMenuClick(info)}
            />
        </div>
    );
}
