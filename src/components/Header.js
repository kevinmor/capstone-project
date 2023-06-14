import logo from '../img/Logo.svg'
import Nav from './Nav'

function Header() {
    return (
        <header className="grid link-container">
            <img src={logo} alt="logo" className="logo-style" />
            <Nav />
        </header>
    )
}

export default Header