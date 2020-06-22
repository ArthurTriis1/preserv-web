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

                <h2>Guardar camisinha na carteira estraga?</h2>
                <Info information="Depende do tempo que você guarda. Todos os preservativos têm data de validade. Evite colocar perto de objetos pontiagudos ou que possam danificar a embalagem. Não exponha ao calor, umidade ou luzes fortes."/>

                <h2>Usar uma camisinha por cima da outra protege mais?</h2>
                <Info information="Não, porque o atrito entre os preservativos estimula rasgos e fissuras."/>

                <h2>Existem tamanhos diferentes de camisinha?</h2>
                <Info information="As camisinhas são altamente elásticas, mas o que muda é a largura do produto e não comprimento."/>

                <h2>É possível usar camisinha debaixo d'água?</h2>
                <Info information="Sim, mas é importante que coloque antes de entrar na água. Lembre que se a água conter cloro, óleo, sabão ou espuma para banho, pode afetar o látex."/>

                <h2>Pessoas com alergia a látex podem usar camisinha?</h2>
                <Info information="Existem preservativos no mercado que são feitas de silicone. Até mesmo a camisinha feminina é de um material pouco alergênico. O ideal é buscar as melhores alternativas para você."/>

                <h2>Posso usar lubrificantes com camisinha?</h2>
                <Info information="Sim, mas desde que o lubrificante seja à base de água ou silicone. Os que são à base de óleo, como óleo de bebê ou vaselina, podem reduzir a firmeza do látex."/>

                <h2>A camisinha diminui o prazer?</h2>
                <Info information="Algumas pessoas acham que interfere na sensação, mas no mercado existem camisinhas ultra finas e outras opções que estimulam o prazer do casal. Vale a pena pesquisar a melhor opção para você."/>
            
            
            </div>
        </div>
    )
}

export default Help;