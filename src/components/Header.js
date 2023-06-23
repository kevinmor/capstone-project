import logo from '../img/Logo.svg'
import Nav from './Nav'

function Header({mobile}) {
    return (
        <header className={mobile ? "grid link-container" : "mobile-container"}>
            <img src={logo} alt="logo" className="logo-style" />
            <Nav mobile={mobile}/>
        </header>
    )
}

export default Header