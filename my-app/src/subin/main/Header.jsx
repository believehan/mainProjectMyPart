import React from 'react';
import './Header.css'; 
import './logo/logo.css';


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <span className="fit">FIT</span>
                <span className="me">ME</span>
            <logo/>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Exersize</a></li>
                    <li><a href="#">Tools</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
