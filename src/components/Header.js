import { useState } from "react"
import { Link } from "react-router"
import logo from "url:../../assets/logo.png"

const Header = () => {
    const [authBtn, setAuthBtn] = useState("Login")
    return (<div className="header-section">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <ul className="links">
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">About Us</Link></li>
            <li> <Link to="/contact">Contact Us</Link></li>
            <li> <Link to="/services">Our Services</Link></li>
            <button className="authBtn" onClick={() => {
                authBtn === "Login" ? setAuthBtn("Logout") : setAuthBtn("Login")
            }}>{authBtn}</button>
        </ul>
    </div>)
}

export default Header