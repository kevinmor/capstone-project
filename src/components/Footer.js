import logo from '../img/Logo.svg'
import { Link } from 'react-router-dom'

function Footer() {
    const footerContainer = {
        display: "flex",
        justifyContent: "center",
        gap: "2em"
    }
    return (
        <footer style={footerContainer}>
            <img src={logo} alt="logo" width={147.5} height={40}/>
            <div>
                <span>Doormat Navigation</span>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><Link to="/">Order Online</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>
            </div>
            <div>
                <span>Contact</span>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
            <span>Social Media Links</span>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
            </ul>
            </div>
        </footer>
    )
}

export default Footer