import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <header className='header'>
            <div className='wrapper'>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;
