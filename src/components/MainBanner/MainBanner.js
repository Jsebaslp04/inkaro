import styles from './MainBanner.module.css'
import Banner from '../../assets/main_banner.jpg'

function MainBanner (){
    return (
        <div className={styles.MainBanner}>
            <img className={styles.mainBanner} src={Banner} alt='Main_Banner'  /> 
        </div>      
    );
}

export default MainBanner