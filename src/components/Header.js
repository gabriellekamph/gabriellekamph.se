import React, { Component } from 'react';
import '../styles/header.scss';
import Zoom from 'react-reveal/Zoom';

export class Header extends Component {
    render() {
        return (
            <section id="home" className="header-container">

                <div className="left">
                <Zoom>

                <h1>Gabrielle Kamph</h1>
                    <h2>Digital creative and front-end developer</h2>

                </Zoom>
                    
                </div>
                <div className="right"></div>
            </section>
        )
    }
}

export default Header;
