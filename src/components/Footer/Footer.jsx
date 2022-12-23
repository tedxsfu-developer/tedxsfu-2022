import * as React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = (props) => {
    return (
        <footer className='fade-slide-in'>
            <section id="social-media">
                <p className="main-font">Stay up to date</p>
                <SocialMedia/>
            </section>
            <p id='license'>This independent TEDx event is operated under license from TED</p>
        </footer>
    );
};

export default Footer;