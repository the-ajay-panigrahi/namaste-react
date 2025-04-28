import { useState } from "react"
import logo from "url:../../assets/logo.png"

const Header = () => {
    const [authBtn, setAuthBtn] = useState("Login")
    return (<div className="header-section">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <ul className="links">
            <li> <a href="#">Home</a></li>
            <li> <a href="#">About Us</a></li>
            <li> <a href="#">Contact Us</a></li>
            <li> <a href="#">Our Services</a></li>
            <button className="authBtn" onClick={() => {
                authBtn === "Login" ? setAuthBtn("Logout") : setAuthBtn("Login")
            }}>{authBtn}</button>
        </ul>
    </div>)
}

export default Header