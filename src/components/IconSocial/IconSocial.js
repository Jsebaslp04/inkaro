import './IconSocial.css'
import Instagram from '../../assets/instagram.png'
import Whatsapp from '../../assets/whatsapp.png'
import TikTok from '../../assets/tik-tok.png'

function IconSocial (){
    return (
        <div className='IconSocial'>
            <a href='https://www.instagram.com/inkaro.tatt/'>
            <img className='IconSocial_img' src={Instagram} alt='Instagram'  />
            </a>

            <a href='https://api.whatsapp.com/send?phone=573112708803&text=%C2%A1Hola!%20Deseo%20cotizar%20un%20tattoo%20%E2%9C%8D%F0%9F%8F%BC%20'>
            <img className='IconSocial_img' src={Whatsapp} alt='Whatsapp' />
            </a>

            <a href='https://www.tiktok.com/@inkaro.tatt'>
            <img className='IconSocial_img' src={TikTok} alt='TikTok' />
            </a>
        </div>      
    );
}

export default IconSocial


