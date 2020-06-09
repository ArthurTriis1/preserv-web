import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import logo from '../../assets/logo.png';
import './style.css'


const HeaderPreserv = () => {
    return (
        <header className="headerMap">
            <Link className="returnButtonOut" to="/">
                <FiArrowLeft className="returnButtonIn"/>
            </Link>
            <img src={logo} alt="Preserv" className="logoHeaderMap"/>
        </header>
    )
}

export default HeaderPreserv;

