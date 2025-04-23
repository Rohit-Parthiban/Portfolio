import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Garden.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Garden</h3>
                            <p>
                                Automatic Simulation Garden
                            </p>
                            <p className="tecnologias">
                                Java
                                <span> -</span> JavaFx
                                <span> -</span> XML
                                
                            </p>

                            <a href="https://github.com/Rohit-Parthiban/AutomatedGarden-Java-Programming" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Score.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Score Board</h3>
                            <p>
                                Real-Time Sports Score Updates
                            </p>
                            <p className="tecnologias">
                                HTML
                                <span> -</span> CSS
                                <span> -</span> Java
                                <span> -</span> SpringBoot
                                <span> -</span> RESTful APIs
                            </p>
                            
                            <a href="https://github.com/Rohit-Parthiban/Real-Time-Sports-Score-Updates" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Rag.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Rag System</h3>
                            <p>
                                Rag System for Email Queries
                            </p>
                            <p className="tecnologias">
                                Python
                                <span> -</span>  LangChain
                                <span> -</span> ChromaDB
                                <span> -</span> LoRA
                                <span> -</span> GPT4All
                                <span> -</span> llama.cpp
                                
                            </p>
                            
                            <a href="https://github.com/Rohit-Parthiban/RAG_System" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Fashion.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Fashion</h3>
                            <p>
                                
                              IBM Smart Fashion Recommender Application
                            </p>
                            <p className="tecnologias">
                                 HTML
                                <span> -</span> CSS
                                <span> -</span> Java
                                <span> -</span> Javascript
                                <span> -</span> Kubernetes
                                <span> -</span> Flask
                                <span> -</span> IBM Cloud
                                <span> -</span> Node.js
                                <span> -</span> React.js
                            </p>
                            
                            <a href="https://github.com/Rohit-Parthiban" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    
                    
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            {/*
            <div className='portafolio-btn'>
                
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
            */}
        </section>

    )
};
export default React.memo(Project);