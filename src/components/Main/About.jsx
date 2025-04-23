import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage='My name is Rohit Parthiban and I am a Software Engineer.'
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id='my-description'
                        defaultMessage='Results-driven Software Engineer skilled in Java, Python, and JavaScript, passionate about creating scalable, high-performance systems. Expert in building microservices, real-time applications, and interactive simulations using AWS, Azure, and IBM Cloud. Leveraging academic excellence from Santa Clara University and hands-on industry experience, I deliver reliable, maintainable code in collaborative environments. '
                    />
                </p>
                <ul>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='years'
                                    defaultMessage='Age: '
                                />
                            </span>
                              23
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                Hobbies:{" "}
                            </span>
                                Cricket, Football, Hiking and Programming
                        </p>
                    </li>
                    <li>
                        <p><span>Email:</span> rohitparthi2001@gmail.com</p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='From:'
                                />
                            </span>
                             San Jose, California, United States
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="RohitResume.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download Resume'
                        />
                    </a>
                    <div className='mas-info-btn'>
                    <Link to="/about">
                        <ButtomGet/>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>skills</h3>
                <h4>Programming Languages</h4>
                <div className="skill">
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="Js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
          
                        <h5>Java</h5>
                    </div>
                    <div>
                        
                       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
          
                        <h5>Python</h5>
                    </div>
                    
                    <div>
                        
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
          
                        <h5>C++</h5>
                    </div>
                    <div>
                        
                        
                         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
          
          
                        <h5>C</h5>
                    </div>
                    
                </div>
                <h4>Databases</h4>
                <div className="skill">
                    <div>
                        
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" />
          
                        <h5>Oracle</h5>
                    </div>
                   
                    <div>
                        <img alt="mysql" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                        <h5>MySQL</h5>
                    </div>
                    <div>
                        <img alt="mongodb" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h5>MongodDB</h5>
                    </div>
                </div>
                <h4>
                    <FormattedMessage
                        id='tools'
                        defaultMessage='Tools & Frameworks'
                    />
                </h4>
                <div className="skill">
                    <div>
                        <img alt="figma" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" title="figma" />
                        <h5>Figma</h5>
                    </div>
                    
                    <div>
                        <img alt="Visual Studio Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" title="Visual Studio Code" />
                        <h5>VS Code</h5></div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="git" />
                        <h5>Git</h5>
                    </div>
                    <div>
                        <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <h5>NodeJs</h5>
                    </div>
                    <div>
                        
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          
                        <h5>ReactJS</h5>
                    </div>
                    <div>
                        
                       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
          
          
                        <h5>GitHub</h5>
                    </div>
                    <div>
                        
                       
                        
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" />
          
          
          
                        <h5>Intellij</h5>
                    </div>
                </div>
            
                <h4> Cloud Platforms</h4>
                <div className="skill">
                
                     <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
          
          
                    <h5>AWS</h5>
                    </div>
                   
                    <div>
                       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-plain-wordmark.svg" />
          
                        <h5>Azure</h5>
                    </div>
                    
                </div>
                    

                
            </div>
        </div>
    </section>
);

export default React.memo(About);