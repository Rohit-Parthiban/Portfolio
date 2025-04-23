import React from 'react';
import '../../pages/Service/ServicesPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Service = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Professional Experience & Certifications'
            />
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-laptop"></i>
                <h3>
                    <FormattedMessage
                        id='design'
                        defaultMessage='Software Application Developer'
                    />
                </h3>
                <h3>
                    <FormattedMessage
                        id='design'
                        defaultMessage='Part-Time'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='SCU Frugal Innovation Hub'
                    />
                </p>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Developing a bilingual educational Science-based application focusing on the solar system and space to enhance English and Spanish language skills. Implementing fun gamification features with progress tracking to increase student engagement. Further Utilizing Flutter and GitHub for full-stack development and project management.'
                    />
                </p>
                
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-laptop"></i>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='Application Developer'
                    />
                </h3>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='Part-Time'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development'
                        defaultMessage='Ecopez Technologies Private Limited'
                    />
                </p>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage=' Collaborated with the Product Leaders to design and develop a software application for the School talks. Coordinated with developing team to build an Application to create a School Students Community and engaged with school
                        students and managing staff for improvements in the application and enhancing user interaction smoothly. Technologies used: Java, JavaScript, HTML, CSS'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-laptop"></i>
                <h3>
                    <FormattedMessage
                        id='marketing'
                        defaultMessage='Backend Application Developer'
                    />
                </h3>
                <h3>
                    <FormattedMessage
                        id='marketing'
                        defaultMessage='Intern'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='marketing-info'
                        defaultMessage='Arihant Gyp ply & lam'
                    />
                </p>
                <p>
                    <FormattedMessage
                        id='marketing-info'
                        defaultMessage=' Worked as a Developer on Customer Relationship Management(CRM) to manage the sales lifecycle. Developed services to support the sales memo use case and deployed the application in Amazon Elastic Cloud instances. Scaled the service in AWS through Auto scaling and Load Balancing. Technologies used: HTML, CSS, Java, JavaScript, AWS'
                    />
                </p>
            </div>
            
            
            
        </div>
        <div className='portafolio-btn'>
            <Link to="/service">
                <ButtomGet/>
            </Link>
        </div>
    </section>
);

export default React.memo(Service);