import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiX, FiArrowLeft } from "react-icons/fi";
import logo from '../../assets/logo.png';
import information from '../../assets/information.png'
import './style.css'


const HeaderDetails = props => {

    const { isInformation } = props;

    const history = useHistory();

    return (
        <header className="headerMap">
            <button className="returnButtonOut"  onClick={() => history.goBack()}>
                {
                    isInformation ? 
                    <FiX className="returnButtonIn"/> :
                    <FiArrowLeft className="returnButtonIn"/>

                }
            </button>
            {
                isInformation &&
                <img src={information} alt="Preserv" className="logoHeaderMap"/>
            }
            <img src={logo} alt="Preserv" className="logoHeaderMap"/>
        </header>
    )
}

export default HeaderDetails;

