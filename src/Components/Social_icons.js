import React from 'react';
import './Social_icons.css';
import Instagram from './assets/img/instagram.png';
import TikTok from './assets/img/tik-tok.png';
import Whatsapp from './assets/img/whatsapp.png';



function Social_icons () {
    return (
        <div className='header_right'>
            <a href='https://www.instagram.com/inkaro.tatt/'><img className='icons' src={Instagram} alt='Instagram' /></a>
            <a href='https://api.whatsapp.com/send?phone=573112708803&text=%C2%A1Hola!%20Deseo%20cotizar%20un%20tattoo%20%E2%9C%8D%F0%9F%8F%BC%20'><img className='icons' src={Whatsapp} alt='Whatsapp' /></a>
            <a href='https://www.tiktok.com/@inkaro.tatt'><img className='icons' src={TikTok} alt='TikTok' /></a>
        </div>
    )
}

export default Social_icons;