import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { FiArrowLeft } from "react-icons/fi";
import logo from '../../assets/logo.png';
import pointer from '../../assets/pointer.png';
import shadow from '../../assets/shadow.png'
import apiGov from '../../services/apiGov';
import SelectLayer from '../../components/SelectLayer';
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
        apiGov.get('datastore_search_sql?sql=SELECT%20distinct%20bairro%20from%20"e21b7420-de0f-4130-ac90-c6d5a08f84a2"order%20by%20bairro')
            .then((resp) => {
                const results = resp.data.result.records.map((r) => {return r['bairro']});
                setBairros(results);
                
            })
        apiGov.get('datastore_search_sql?sql=SELECT%20*%20from%20"e21b7420-de0f-4130-ac90-c6d5a08f84a2"')
            .then((resp) => {
                const results = resp.data.result.records;
                setLayerPreservativos(results);
            })
        apiGov.get('datastore_search?resource_id=7f3a2046-1372-4e6f-b269-802bf17ef832&limit=5')
            .then((resp) => {
                const results = resp.data.result.records;
                setLayerTeste(results);
            })
        apiGov.get('datastore_search?resource_id=9aa8298b-8ffb-4801-a7d5-461d44f3ee24&limit=5')
            .then((resp) => {
                const results = resp.data.result.records;
                setLayerPrevencao(results);
            })
        apiGov.get('datastore_search?resource_id=7f3a2046-1372-4e6f-b269-802bf17ef832&limit=5')
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
                    <SelectLayer name="Preservativos" call={(data) => {setPreserv(data.show)}}    />
                    <SelectLayer name="Testagem"         call={(data) => {setTeste(data.show)}}      />
                    <SelectLayer name="Prevenção"         call={(data) => {setPrevencao(data.show)}}  />
                    <SelectLayer name="Tratamento"         call={(data) => {setTratamento(data.show)}} />      
                </section>

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