import styles from './Service.module.css'
import Studiotatto from '../../assets/studio_img.png'

function Service () {
    return (
        <div className={styles.service}>
            <div className={styles.service_description}>
                 <h1 className={styles.service_text_description}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” </h1>
            </div>
            <div className={styles.service_img}>
                <img className={styles.service_img_studio} src={Studiotatto} alt='Studio Tattoo'  />
            </div>
        </div>
    );
}

export default Service