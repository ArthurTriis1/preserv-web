import React from 'react';
import './style.css';
import logoPreserv from '../../assets/logo.png';
import { useHistory } from 'react-router-dom';


const Home = () => {

    const history = useHistory();


    return (
        <div className="containerHome">
            <div className="home">
                <div className="buttons">
                    <div className="btOut ">
                        <button onClick={() => {history.push('/map')}} className="btIn btHome">IR</button>
                    </div>
                    <div className="btOut">
                        <button onClick={() => {history.push('/map')}} className="btIn">SOBRE</button>
                    </div>
                    <div className="btOut">
                        <button onClick={() => {history.push('/map')}} className="btIn">AJUDA</button>
                    </div>
                </div>
                <div className="infosContainer">
                    <h1 className="infoTitle">Localize preservativos e serviços gratuitos para você!</h1>
                    {/* <h4 className="infoText">Ajudando a encontrar pontos de distribuição de preservativos, prevenção e tratadmentos de ISTS</h4> */}
                </div>
                <img src={logoPreserv} alt="Preserv" className="logoPreserv"/>
            </div>
        </div>
    )
}

export default Home