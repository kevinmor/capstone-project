import logo from '../img/Logo.svg'
import Links from './Links'

const Footer = ({mobile}) => {
    const footerItems = {
        listStyleType: "none",
        margin: 0,
        padding: "0",
        fontFamily: "'Karla', sans-serif",
        fontSize: "14pt",
        fontWeight: "400"
    }
    return (
        <footer className={mobile ? "grid link-container" : "mobile-container"}>
            <img src={logo} alt="logo" className="logo-style"/>
            <div className="footer-container">
                <div>
                    <h4>Doormat Navigation</h4>
                    <Links linkStyles={footerItems}/>
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
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
            <span style={{textAlign: "center", color: "#495e57", gridRow: "2", gridColumn: "span 12"}}>© 2023 Little Lemon</span>
        </footer>
    )
}

export default Footer