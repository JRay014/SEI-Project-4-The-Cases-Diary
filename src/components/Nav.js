import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <h2>Organize:</h2>
            <ul className='nav-links'>
                <li>home</li>
                <li>show</li>
                <li>L</li>
            </ul>
        </nav>
    );
}

export default Nav;