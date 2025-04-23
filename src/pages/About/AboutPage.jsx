import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/RohitResume.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/Rohit.jpg';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />
              
              <a href={cv} target="_blank" rel="noopener noreferrer" download="RohitResume.pdf" className="btn-codigo cv buttonDownload">
                  <FormattedMessage
                      id='btn-cv'
                      defaultMessage='Download Resume'
                  />
              </a>
            </div>
            <div className="sobre-mi-info">
              
              <p>
                <FormattedMessage
                  id='about-info-1'
                  defaultMessage="I am a dedicated Software Engineer with a strong academic foundation and a proven track record in developing high-performance, scalable systems. With robust expertise in Java, Python, and JavaScript, I specialize in building microservices and distributed applications that excel in real-time performance and fault tolerance. My Master's in Computer Science from Santa Clara University, combined with a Bachelor's in Information Technology, has equipped me with a deep understanding of both theoretical concepts and practical solutions. Through rigorous coursework and challenging projects, I have honed my analytical skills and technical acumen, laying the groundwork for innovative problem-solving in modern software development."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage='In the industry, I have applied my skills in dynamic, collaborative environments, contributing to projects ranging from real-time sports score updates to interactive simulation systems and advanced AI-driven pipelines. My hands-on experience with cloud platforms such as AWS, Azure, and IBM Cloud has enabled me to design and deploy robust, scalable solutions that prioritize system reliability and efficiency. I thrive in agile settings where teamwork and continuous learning are paramount, and I am passionate about writing clean, maintainable code that meets complex technical challenges head-on.'
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="I am always eager to explore and stay abreast of emerging topics and trends in the industry, particularly in the fields of artificial intelligence and machine learning. Continuously learning through self-driven projects, research, and collaboration, I aim to integrate these cutting-edge technologies into my work, ensuring that my solutions not only meet current needs but also anticipate future innovations. This proactive approach keeps me at the forefront of technological advancements, ready to leverage new tools and methodologies to drive excellence in every project."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>

          </div>

          
        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;