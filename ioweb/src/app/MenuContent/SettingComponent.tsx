'use client'
import React, { useState, useEffect } from 'react';
import {Layout } from 'antd';
import "../styles.css"
import { useTranslation } from 'react-i18next';
import CustomSider from './CustomSider';
import Title from './Title';



const { Sider, Content } = Layout;

export default function SettingComponent() {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('简体中文');

    const [value, setValue] = useState("default");

  
    const [selectedOption, setSelectedOption] = useState('');

    // 存储当前语言选项
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language'));

    useEffect(() => {
        // 根据当前语言选项更新选项
        switch (currentLanguage) {
            case 'en':
                setSelectedOption('English');
                break;
            case 'ja':
                setSelectedOption('日本語');
                break;
            case 'zhHant':
                setSelectedOption('繁體中文');
                break;
            case 'zh':
                setSelectedOption('简体中文');
                break;
            case 'fr':
                setSelectedOption('Français');
                break;
            case 'ko':
                setSelectedOption('한국어');
                break;
            case 'mars':
                setSelectedOption('吙❤緈雯');
                break;
            default:
                setSelectedOption('简体中文');
        }
    }, [currentLanguage]);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        let newLanguage = '';

        // 根据选项设置新的语言
        switch (selectedValue) {
            case '简体中文':
                newLanguage = 'zh';
                break;
            case 'English':
                newLanguage = 'en';
                break;
            case '日本語':
                newLanguage = 'ja';
                break;
            case '繁體中文':
                newLanguage = 'zhHant';
                break;
            case 'Français':
                newLanguage = 'fr';
                break;
            case '한국어':
                newLanguage = 'ko';
                break;
            case '吙❤緈雯':
                newLanguage = 'mars';
                break;
            default:
                newLanguage = 'zh';
        }

        // 如果选择的语言和当前语言不一致，则更新语言设置
        if (newLanguage !== currentLanguage) {
            localStorage.setItem('language', newLanguage);
            setCurrentLanguage(newLanguage);
            i18n.changeLanguage(newLanguage);
        }
    };
    return (
        <Layout className='layout'>
         <CustomSider menu='setting' />
            <Layout>
                <div style={{ position: 'relative' }}>
                    <Content>
                        <div className='show-main'>
                           <Title menu='setting'/>
                                    <div className='set-box'>
                                        <p>{t('language')}:</p>
                                        <select value={selectedOption} onChange={handleSelectChange} defaultValue={selectedLanguage}>
                                            <option>简体中文</option>
                                            <option>繁體中文</option>
                                            <option>吙❤緈雯</option>
                                            <option>English</option>
                                            <option>日本語</option>
                                            <option>Français</option>
                                            <option>한국어</option>
                                        </select>
                                    </div>
                                    <p style={{ textAlign: 'center', fontSize: '56px' }}>背景添加点交互式内容</p>
                                </div>
                    </Content>
                </div>
            </Layout>
        </Layout>
    );
};



