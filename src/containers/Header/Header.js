import Title from '../../components/Title/Title'; 
import IconSocial from '../../components/IconSocial/IconSocial'
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