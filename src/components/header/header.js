import React from 'react';
import './header.css';

import logo from '../../assets/logo.png';

const Header = () => (
    <div className='header'>
        <a className='logo-container' href={'https://ramonak.io'}>
            <img src={logo} alt='Logo' />
        </a>
    </div>
);

export default Header;