import React, { Component } from 'react';
import '../styles/navbar.scss';
import { slide as Menu } from "react-burger-menu";
import { HashLink } from 'react-router-hash-link';

export class Navbar extends Component {

    constructor (props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }

    closeMenu () {
        this.setState({menuOpen: false})
    }

    toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    } 

    render () {
        return(
            <div>
            <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} right width={ '100vw' } >
                <HashLink to="#home" onClick={() => this.closeMenu()}>Home</HashLink>
                <HashLink to="#about" onClick={() => this.closeMenu()}>About me</HashLink>
                <HashLink to="#contact" onClick={() => this.closeMenu()}>Contact</HashLink>           
            </Menu>
            </div>
        )
    }
}

export default Navbar;




