import logo from '../img/Logo.svg'
import Nav from './Nav'

function Header() {
    const headerContainer = {
        display: "flex",
        justifyContent: "center"
    }
    return (
        <header style={headerContainer}>
            <img src={logo} alt="logo" width={147.5} height={40}/>
            <Nav />
        </header>
    )
}

export default Header