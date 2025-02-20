
import styles from './Header.module.css'
import Title from '../../components/Title/Title'; 
import IconSocial from '../../components/IconSocial/IconSocial'


function Header() {
    return <>
        <nav className={styles.header}>
            <Title name_page="Tattoo Studio" />
            <IconSocial />
        </nav>
    </>
}

export default Header;