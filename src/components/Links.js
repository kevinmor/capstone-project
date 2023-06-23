import { useState } from "react";
import { Link } from 'react-router-dom'

const Links = ({linkStyles}) => {
    const [homeStyle, setHomeStyle] = useState(false)
    const [aboutStyle, setAboutStyle] = useState(false)
    const [menuStyle, setMenuStyle] = useState(false)
    const [reservationStyle, setReservationStyle] = useState(false)
    const [orderStyle, setOrderStyle] = useState(false)
    const [loginStyle, setLoginStyle] = useState(false)
    return (
        <ul style={linkStyles}> 
            <li
                style={homeStyle ? {textDecoration: "underline"} : {textDecoration: "none"}}
                onMouseEnter={() => setHomeStyle(true)}
                onMouseLeave={() => setHomeStyle(false)}
            >
                <Link to="/">Home</Link>
            </li>
            <li
                style={aboutStyle ? {textDecoration: "underline"} : {textDecoration: "none"}}
                onMouseEnter={() => setAboutStyle(true)}
                onMouseLeave={() => setAboutStyle(false)}
            >
                <Link to="/">About</Link>
            </li>
            <li
                style={menuStyle ? {textDecoration: "underline"} : {textDecoration: "none"}}
                onMouseEnter={() => setMenuStyle(true)}
                onMouseLeave={() => setMenuStyle(false)}                    
            >
                <Link to="/">Menu</Link>
            </li>
            <li
                style={reservationStyle ? {textDecoration: "underline"} : {textDecoration: "none"}}
                onMouseEnter={() => setReservationStyle(true)}
                onMouseLeave={() => setReservationStyle(false)}
            >
                <Link to="/booking-page">Reservations</Link>
            </li>
            <li
                style={orderStyle ? {textDecoration: "underline"} : {textDecoration: "none"}}
                onMouseEnter={() => setOrderStyle(true)}
                onMouseLeave={() => setOrderStyle(false)}
            >
                <Link to="/">Order Online</Link>
            </li>
            <li
                style={loginStyle ? {textDecoration: "underline"} : {textDecoration: "none"}}
                onMouseEnter={() => setLoginStyle(true)}
                onMouseLeave={() => setLoginStyle(false)}
            >
                <Link to="/">Login</Link>
            </li>
        </ul>
    )
}

export default Links