import Title from '../../components/Title/Title'; 
import IconSocial from '../../components/Icons_social/Icons_social'
import './Header.css'

function Header() {
    return <>
        <nav className='header'>
            <Title name_page="Tattoo Studio" />
            <IconSocial />
        </nav>
    </>
}

export default Header;