import React, { Component } from 'react';
import '../styles/contact.scss';

export class Contact extends Component {
    render() {
        return (
            <section id="contact" className="contact-container">
                <div className="contact-textarea">
                    <h2>Let's get in touch</h2>

                    <a href="https://www.facebook.com/gabrielle.kamph"><i className="fab fa-facebook"></i></a> 
                    <a href="https://www.linkedin.com/in/gabriellekamph/"><i className="fab fa-linkedin-in"></i></a> 
                    <a href="https://github.com/gabriellekamph"><i className="fab fa-github"></i></a> 
                    <a href="mailto:hello@gabriellekamph.se"><i className="fas fa-at"></i></a> 
                    <a href="tel:+46761822864"><i className="fas fa-mobile-alt"></i></a> 
                </div>
            </section>
        )
    }
}

export default Contact;
