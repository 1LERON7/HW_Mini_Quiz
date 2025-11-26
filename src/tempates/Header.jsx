import { useState } from "react";
import { NavLink } from "react-router";

function Header() {
    
return (
    <header>
        <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/massage">MASSAGE</NavLink>
            <NavLink to="/gallery">GALLERY</NavLink>
            <NavLink to="/quiz">QUIZ</NavLink>
        </nav>
    </header>
);
}

export default Header;
