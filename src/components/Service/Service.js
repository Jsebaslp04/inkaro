import styles from './Service.module.css'
import Studiotatto from '../../assets/studio_img.png'

function Service () {
    return (
        <div className={styles.container}>
            <div className={styles.container_description}>
                 <h1 className={styles.letter_description}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” </h1>
            </div>
            <div className={styles.container_img}>
                <img className={styles.container_img_studio} src={Studiotatto} alt='Studio Tattoo'  />
            </div>
        </div>
    );
}

export default Service