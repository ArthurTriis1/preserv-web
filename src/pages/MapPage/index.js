import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'
import { FiArrowLeft } from "react-icons/fi";
import logo from '../../assets/logo.png';
import pointer from '../../assets/pointer.png';
import shadow from '../../assets/shadow.png'
import apiGov from '../../services/apiGov';
import SelectLayer from '../../components/SelectLayer';
import SelectBairros from '../../components/SelectBairros';
import { useParams, Link } from 'react-router-dom';
import L from 'leaflet';

import './style.css'

const MapPage = () => {
    const [position, setPosition] = useState([-8.063169, -34.871139]);
    const [zoom, setZoom] = useState(15);

    const pointerIcon = new L.Icon({
        iconUrl: pointer,
        shadowUrl: shadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    })

    //#region Estados
    const [loading, setLoading] = useState(true);
    const [dropped, setDropped] = useState(false);
    const [bairros, setBairros] = useState([]);

    const [layerPreservativos, setLayerPreservativos] = useState([]);
    const [preserv, setPreserv] = useState(false)

    const [layerTeste, setLayerTeste] = useState([]);
    const [teste, setTeste] = useState(false)
    
    const [layerPrevencao, setLayerPrevencao] = useState([]);
    const [prevencao, setPrevencao] = useState(false)

    const [layerTratamento, setLayerTratamento] = useState([]);
    const [tratamento, setTratamento] = useState(false)
    //#endregion

    useEffect(()=>{
        apiGov.get('bairros')
            .then((resp) => {
                const results = resp.data.result.records.map((r) => {return r['bairro']});
                setBairros(results);
                
            })
        apiGov.get('preservativos')
            .then((resp) => {
                const results = resp.data.result.records;
                setLayerPreservativos(results);
            })
        apiGov.get('testes')
            .then((resp) => {
                const results = resp.data.result.records;
                setLayerTeste(results);
            })
        apiGov.get('prevencao')
            .then((resp) => {
                const results = resp.data.result.records;
                setLayerPrevencao(results);
            })
        apiGov.get('tratamento')
        .then((resp) => {
            const results = resp.data.result.records;
            setLayerTratamento(results);
        })
    },[]);

    function plotMap(layer){
        return (layer.map(marker => (
            <Marker
                position={[Number(marker.latitude), Number(marker.longitude)]}
                key={String(marker._id)}
                icon={pointerIcon}
                onClick={() =>{}}
                >
                <Popup className="popup">
                    <h3 className="popupText">{marker.nome_oficial}</h3>
                    <Link><h4 className="popupLink">Detalhes</h4></Link>
                </Popup>
                
            </Marker>)
        ))
    }

    return (
        <>
            <header className="headerMap">
                <Link className="returnButtonOut" to="/">
                    <FiArrowLeft className="returnButtonIn"/>
                </Link>
                <img src={logo} alt="Preserv" className="logoHeader"/>
            </header>

            <div className="containerMap">
                <section className="containerOptions">
                    <SelectLayer name="Preservativos"           call={(data) => {setPreserv(data.show)}}    />
                    <SelectLayer name="Teste de IST"            call={(data) => {setTeste(data.show)}}      />
                    <SelectLayer name="Prevenção de urgência"   call={(data) => {setPrevencao(data.show)}}  />
                    <SelectLayer name="Tratamento de IST"       call={(data) => {setTratamento(data.show)}} />      
                </section>

                 <div className={`inputsLocal`}>
                 
                    <SelectBairros 
                        bairros={bairros} 
                        stateChange={(callback => setDropped(callback))}
                        callGo={(data) => setPosition(data)}
                    />
                </div>


                <Map 
                    center={position} 
                    zoom={zoom} 
                    style={{ height: "100vh", width: "100%"}}
                    >
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Layer de Preservativos */}
                    {preserv && plotMap(layerPreservativos)}

                    {/* Layer de Testes */}
                    {teste && plotMap(layerTeste)}

                    {/* Layer de Prevencao */}
                    {prevencao && plotMap(layerPrevencao)}

                    {/* Layer de Tratamento */}
                    {tratamento && plotMap(layerTratamento)}
                </Map>

                
            </div>
        </>
    )
}

export default MapPage;