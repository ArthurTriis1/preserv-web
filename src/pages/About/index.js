import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import logo from '../../assets/logo.png';
import { AiFillGithub, AiFillInstagram, AiFillBehanceSquare } from 'react-icons/ai'
import './style.css'
import apiGov from '../../services/apiGov';

const About = () => {
    const history = useHistory();
    const [form, setForm] = useState({
        email: '',
        message: ''
    })

    const formChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value }) 
    };


    const handleSubmit = e => {
        e.preventDefault();
        apiGov.post('sendmail', form)
        .then(resp => {
            console.log(resp)
            alert("success")
        })
        .catch(err => {
            console.log(err)
            alert("error")
        })
  
      };
    
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
            
            <form 
                className="containerFeedback"
                onSubmit={handleSubmit}>
                
                <h2>DÚVIDAS OU SUGESTÕES?</h2>
  
                <input type="email" name="name" placeholder="SEU EMAIL" onChange={formChange}/>

                <textarea type="text" name="message" placeholder="TEXTO" onChange={formChange}/>

                <button type="submit">ENVIAR</button>
            </form>
        </div>
    )
}

export default About;