import React, { Component } from 'react';
import '../styles/header.scss';

export class Header extends Component {
    render() {
        return (
            <section id="home" className="header-container">
                <h2>Gabrielle Kamph</h2>
                <h1>Digital creative and front-end developer</h1>
            </section>
        )
    }
}

export default Header;
