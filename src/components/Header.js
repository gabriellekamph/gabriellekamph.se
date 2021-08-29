import React, { Component } from 'react';
import '../styles/header.scss';

export class Header extends Component {
    render() {
        return (
            <section id="home" className="header-container">

                <div className="left">
                    <h1>Gabrielle Kamph</h1>
                    <h2>Digital creative and front-end developer</h2>
                </div>
                <div className="right"></div>
            </section>
        )
    }
}

export default Header;
