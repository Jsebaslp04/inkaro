import styles from './MainBanner.module.css'

function MainBanner({ image, alt }) {
    return (
        <div className={styles.MainBanner}>
            <img className={styles.MainBanner_img} src={image} alt={alt} />
        </div>
    );
}

export default MainBanner