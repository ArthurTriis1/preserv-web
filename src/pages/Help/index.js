import React from 'react'
import { FiArrowLeft } from "react-icons/fi";
import logo from '../../assets/logo.png';
import './style.css'
import { useHistory } from 'react-router-dom';
import  Info  from '../../components/Info';


const Help = () => {

    const history = useHistory();

    return (
        <div className="containerAbout">
            <header className="headerAbout headerHelp">
                <button className="returnButtonOut returnButtonAbout"  onClick={() => history.goBack()}>
                    <FiArrowLeft className="returnButtonIn"/>
                </button>
                <img src={logo} alt="Preserv" className="logoHeaderAbout"/>
            </header>

            <div className="infoContatinerHelp">
                <h2>A CAMISINHA É EFICIENTE?</h2>
                <Info information="OS PRESERVATIVOS OFERECEM ATÉ 99% DE SEGURANÇA. VALE LEMBRAR QUE COLOCAR E RETIRAR DO JEITO CERTO TAMBÉM AJUDA NA EFICIÊNCIA DO PRODUTO."/>

                <h2>QUAL O JEITO CERTO PARA COLOCAR A CAMISINHA?</h2>
                <Info information="PARA O PRESERVATIVO MASCULINO: SEGURE O PRODUTO PELA PONTA E TIRE O AR ACUMULADO NELE. AINDA SEGURANDO, DESENROLE O MATERIAL POR TODO O PÊNIS. PARA O PRESERVATIVO FEMININO: APERTE A ARGOLA MENOR COM O POLEGAR E O INDICADOR. COLOQUE DENTRO DA VAGINA COM CUIDADO. A ARGOLA MAIOR DEVE FICAR PARA FORA DA VAGINA."/>

                <h2>Como saber se camisinha furou?</h2>
                <Info information="ENCHA O PRESERVATIVO COM ÁGUA OU AR E CHEQUE SE não existe vazamentos"/>
            </div>
        </div>
    )
}

export default Help;