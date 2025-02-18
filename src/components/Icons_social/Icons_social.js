import './Icons_social.css'
import Instagram from '../../assets/instagram.png'
import Whatsapp from '../../assets/whatsapp.png'
import TikTok from '../../assets/tik-tok.png'



function IconSocial (){
    return (
        <div className='Icons_social_media'>
            <a href='https://www.instagram.com/inkaro.tatt/'>
            <img className='icons' src={Instagram}  />
            </a>

            <a href='https://api.whatsapp.com/send?phone=573112708803&text=%C2%A1Hola!%20Deseo%20cotizar%20un%20tattoo%20%E2%9C%8D%F0%9F%8F%BC%20'>
            <img className='icons' src={Whatsapp}  />
            </a>

            <a href='https://www.tiktok.com/@inkaro.tatt'>
            <img className='icons' src={TikTok}  />
            </a>
        </div>      
    );
}

export default IconSocial


