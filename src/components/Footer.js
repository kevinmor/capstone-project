import logo from '../img/Logo.svg'

function Footer() {
    return (
        <footer>
            <img src={logo} alt="logo" />
            <span>Doormat Navigation</span>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            <span>Contact</span>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <span>Social Media Links</span>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
            </ul>
        </footer>
    )
}

export default Footer