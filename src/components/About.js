import React, { Component } from 'react';
import '../styles/about.scss';

class About extends Component {
    render() {
        return (
                <section id="about" className="about-container">
                
                    <div className="about-left-area"> 
                        <h2 className="heading">About me</h2>
                    </div>

                    <div className="about-right-area">   

                        {/* <HoverImage src={gabs} hoverSrc={gabs} className="img" />  */}
                        <p className="about-text">
                            I’m Gabrielle Kamph, a 32 year old digital creative and front-end developer based in Stockholm, Sweden. <br/><br/>
                            I’m currently studying the front-end developer program at <a href="https://medieinstitutet.se/utbildningar/front-end-developer/">Medieinstitutet</a> to get cutting-edge knowledge in the field, graduating fall 2022. <br/><br/>
                            I have extensive experience within digital marketing and a broad palette of skills alongside web development such as inbound marketing, copywriting, project management, marketing automation and graphic design. <br /><br/>
                            My career in marketing so far includes a wide range of roles, from generalist to specialist on both the agency and client side, which has given me great knowledge and humility to bring into future roles within tech.<br/><br/>
                            I look forward to further expand my tech stack which currently contains HTML, CSS/SASS, JavaScript, React, Node.js, mongoDB and of course Git and GitHub (<a href="https://github.com/gabriellekamph/">feel free to check out my projects so far</a>).
                        </p> 
                    </div>
               
                </section>
        )
    }
}

export default About;
