import React from 'react';
import '../../pages/Contact/ContactPage.css'
/* TypedJs */
import Typical from 'react-typical';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Contact = () => (

    <section className="contactos" id="contactos">

        <h2 className="heading">
            <FormattedMessage
                id='contact'
                defaultMessage='Contact'
            />
        </h2>
        <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
            <FormattedMessage
                id='contact-info'
                defaultMessage='Contact me by: '
            />
            <Typical
                className="site-contacto"
                loop={Infinity}
                wrapper="b"
                steps={[
                    'Gmail', 1500,
                    'WhatsApp', 1500,
                    
                    'Linkedin', 1500,
                    'Github', 1500,
                ]}
            />

        </h3>

        <div className="icons">
            <a href="mailto:rohitparthi2001@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fas fa-envelope"></span>
                </div>
                <div className="text">
                    Gmail
                </div>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-whatsapp"></span>
                </div>
                <div className="text">
                    Whatsapp
                </div>
            </a>
            
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-instagram"></span>
                </div>
                <div className="text">
                    Instagram
                </div>
            </a>
            
            <a href="https://www.linkedin.com/in/rohit-parthiban/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-linkedin-in"></span>
                </div>
                <div className="text">
                    Linkedin
                </div>
            </a>
            <a href="https://github.com/Rohit-Parthiban" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-github-square"></span>
                </div>
                <div className="text">
                    GitHub
                </div>
            </a>
        </div>
    </section>
);

export default React.memo(Contact);