import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderDetails from '../../components/HeaderDetails'

import fone from '../../assets/fone.png'
import address from '../../assets/address.png'
import name from '../../assets/name.png'
import interrogation from '../../assets/interrogation.png'
import service from '../../assets/service.png'
import time from '../../assets/time.png'

import  Coment  from '../../components/Coment';

import './styles.css'
import InputComent from '../../components/InputComent';
import apiPreserv from '../../services/apiPreserv';

export default function LocationDetails() {

    const location = useLocation();
    
    const [coments, setComents] = useState([]);

    const marker = {
        ...location.state.marker, 
        endereço: location.state.marker.bairro+ ", " + location.state.marker["endereço"]
    }

    useEffect(() => {
        apiPreserv.get('/comments/place/' + location.state.marker._id)
            .then(({ data }) => { 
                setComents(data.comments)
            })
    }, [])
    

    const infos = [
        {icon: name , att: "nome_oficial"},
        {icon: fone, att: "fone"},
        {icon: address, att: "endereço"},
        {icon:time, att: "horario"},
        {icon:service, att: "tipo_servico"},
        {icon: interrogation, att: "como_usar"}, 
    ]

    return (
        <div className={"container"}> 
            <HeaderDetails isInformation={true}/>

            <div className={"informationsContainer"}>
                {
                    infos.map(info => {
                        if(String(marker[info.att]).length > 0){
                            return (
                                <div key={String(info.att)} className={"groupInformation"}>
                                    <img alt="Logo" src={info.icon} className={"caracterLogo"}/>
                                    <p className={"caracterText"}>{marker[info.att]}</p>
                                </div>
                            )
                        }
                        return null;
                    })
                }
            </div> 
                
            <section className="comentsSpace">
                <div>
                    <InputComent/>
                    {
                        !!coments.length && 
                        <h2>Comentarios:</h2>
                    }
                    

                    {
                        coments.map(coment => (
                            <Coment 
                                username={coment.username} 
                                coment={coment.comment}
                            />
                        ))
                    }
                </div>

            </section>
        </div>
    );
}
