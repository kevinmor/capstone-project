import logo from '../img/Logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    const footerItems = {
        listStyleType: "none",
        margin: 0,
        padding: "0",
    }
    return (
        <footer className="grid link-container">
            <img src={logo} alt="logo" className="logo-style"/>
            <div className="footer-container">
                <div>
                    <h4>Doormat Navigation</h4>
                    <ul style={footerItems}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/booking-page">Reservations</Link></li>
                        <li><Link to="/">Order Online</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <ul style={footerItems}>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div>
                    <h4>Social Media Links</h4>
                    <ul style={footerItems}>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer