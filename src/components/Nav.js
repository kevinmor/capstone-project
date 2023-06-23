import Links from './Links'


const Nav= ({mobile}) => {
    const menuItems = {
        listStyleType: "none",
        display: "flex",
        flexDirection: !mobile && "column",
        justifyContent: mobile ? "space-between" : "center",
        alignItems: "center"
    }

    return (
        <nav className={ mobile ? "nav-container" : "mobile-nav"}>
            <Links linkStyles={menuItems}/>
        </nav>
    )
}

export default Nav