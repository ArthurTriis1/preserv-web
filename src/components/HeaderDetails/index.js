import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiX } from "react-icons/fi";
import logo from '../../assets/logo.png';
import information from '../../assets/information.png'
import './style.css'


const HeaderDetails = () => {

    const history = useHistory();

    return (
        <header className="headerMap">
            <button className="returnButtonOut"  onClick={() => history.goBack()}>
                <FiX className="returnButtonIn"/>
            </button>
            <img src={information} alt="Preserv" className="logoHeaderMap"/>
            <img src={logo} alt="Preserv" className="logoHeaderMap"/>
        </header>
    )
}

export default HeaderDetails;

