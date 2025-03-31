import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar2 = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleclickbutton = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header>
            <div className="container">
                <div className="grid navbar-menu">
                    <div className="logo">
                        <a href="#">Things to do </a>
                    </div>
                    <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                        <ul >
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="toggle-buttton">
                        <button onClick={handleclickbutton}><GiHamburgerMenu /></button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar2;