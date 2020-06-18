import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import { AiFillGithub, AiFillInstagram, AiFillBehanceSquare } from 'react-icons/ai'
import logo from '../../assets/logo.png';
import './style.css'

const About = () => {
    const history = useHistory();
    
    return (
        <div className="containerAbout">
            <header className="headerAbout">
                <button className="returnButtonOut returnButtonAbout"  onClick={() => history.goBack()}>
                    <FiArrowLeft className="returnButtonIn"/>
                </button>
                <img src={logo} alt="Preserv" className="logoHeaderAbout"/>
                <h4 className="infoHeaderPreserv">Localize preservativos e serviços gratuitos para você!</h4>
            </header>
            <div className="containerInformations">
                <h5>O PRESERV TEM COMO OBJETIVO PRINCIPAL  LOCALIZAR E EXIBIR PONTOS DE DISTRIBUIÇÃO DE PRESERVATIVOS. TAMBÉM TEM FOCO EM MOSTRAR OS POSTOS DE SAÚDE QUE REALIZAM TESTES E TRATAMENTOS DE DST.</h5>
                
                <hr></hr>

                <h2>DESENVOLVEDORES</h2>
                <h4>ARTHUR ANDRADE</h4>
                <div className="containerRedes">
                    <a href="https://github.com/ArthurTriis1">
                        <AiFillGithub />
                    </a>
                    <a href="https://www.instagram.com/kikikiiing/">
                        <AiFillInstagram/>
                    </a>
                </div>
                <h4>GABRYELLI HELENA</h4>
                <div className="containerRedes">
                    <a href="https://www.behance.net/Gabyzzeta">
                        <AiFillBehanceSquare />
                    </a>
                    <a href="https://www.instagram.com/gabbyzzeta/">
                        <AiFillInstagram/>
                    </a>
                </div>
            </div>
            <form method="post" name="contact" netlify className="containerFeedback">
                <h2>DÚVIDAS OU SUGESTÕES?</h2>
  
                <input type="email" name="email" placeholder="SEU EMAIL"/>

                <textarea type="text" name="message" placeholder="TEXTO" />

                <button type="submit">ENVIAR</button>
            </form>
        </div>
    )
}

export default About;