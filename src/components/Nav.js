import { Link } from 'react-router-dom'

const Nav= () => {
    const menuItems = {
        listStyleType: "none",
        display: "flex",
        justifyContent: "space-between",
        color: "red",
        alignItems: "center"
    }
    return (
        <nav className="nav-container">
            <ul style={menuItems} className="greenText"> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/booking-page">Reservations</Link></li>
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav