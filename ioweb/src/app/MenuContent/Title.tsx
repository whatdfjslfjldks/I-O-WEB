import React from "react";
import { useTranslation } from 'react-i18next';
import "../styles.css"

interface TitleProps{
    menu:string;
}
const Title: React.FC<TitleProps>=({menu})=>{
    const {t} = useTranslation();
    return(
        <div>
       <div
                className='title'>
                <h1 style={{ fontSize: '32px', color: 'black', textAlign: 'left', lineHeight: '50px', margin: 0, paddingLeft: '24px' }}>
                  {<span>{t(menu)}</span>}
                </h1>
              </div>
    </div>
    )
};
export default Title;