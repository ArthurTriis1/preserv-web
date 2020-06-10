import React, { useState, useEffect, useRef } from 'react';
import { Map, TileLayer, Marker} from 'react-leaflet'
import pointer from '../../assets/pointer.png';
import shadow from '../../assets/shadow.png'
import apiGov from '../../services/apiGov';
import SelectLayer from '../../components/SelectLayer';
import SelectBairros from '../../components/SelectBairros';
import HeaderPreserv from '../../components/HeaderPreserv';

import { useHistory } from 'react-router-dom';
import L from 'leaflet';

import './style.css'

const MapPage = () => {

    const history = useHistory();

    const [position, setPosition] = useState([-8.063169, -34.871139]);
    const zoom = 15;

    const mapEl = useRef(null)

    const pointerIcon = new L.Icon({
        iconUrl: pointer,
        shadowUrl: shadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    })

    //#region Estados
    // const [loading, setLoading] = useState(true);
    // const [dropped, setDropped] = useState(false);
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

    useEffect(() => {
        let preservState = localStorage.getItem("preservState");
        preservState = JSON.parse(preservState)
        if(preservState){
            setPosition(preservState.position);
            setTeste(preservState.teste);
            setTratamento(preservState.tratamento)
            setPreserv(preservState.preserv)
            setPrevencao(preservState.prevencao)
        }
    }, [])

    const saveMapState = (e) =>{
        const state = {
            position: mapEl.current.props.center,
            teste: teste || false,
            preserv : preserv || false,
            prevencao: prevencao || false,
            tratamento: tratamento || false
        };
        localStorage.setItem("preservState", JSON.stringify(state))
    }


    const plotMap = (layer) =>{
        return (layer.map(marker => (
            <Marker
                position={[Number(marker.latitude), Number(marker.longitude)]}
                key={String(marker._id)}
                icon={pointerIcon}
                onClick={(e) => {
                    saveMapState(e)
                    history.push({ 
                        pathname: "/details", state: { marker } 
                    })
                }}
                >
                {/* <Popup className="popup">
                    <h3 className="popupText">{marker.nome_oficial}</h3>
                    <Link to={{ pathname: "/details", state: { marker } }}>
                        <h4 className="popupLink">Detalhes</h4>
                    </Link>
                </Popup> */}
            </Marker>)
        ))
    }

    return (
        <>
            <HeaderPreserv/>

            <div className="containerMap">
                <section className="containerOptions">
                    <SelectLayer name="Preservativos"          call={(data) => {setPreserv(data.show)}}   initialShow={!preserv} />
                    <SelectLayer name="Teste de DST"            call={(data) => {setTeste(data.show)}} initialShow={!teste}/>
                    <SelectLayer name="Prevenção de urgência"   call={(data) => {setPrevencao(data.show)}}  initialShow={!prevencao}/>
                    <SelectLayer name="Tratamento de DST"       call={(data) => {setTratamento(data.show)}} initialShow={!tratamento}/>      
                </section>

                 <div className={`inputsLocal`}>
                 
                    <SelectBairros 
                        bairros={bairros} 
                        // stateChange={(callback => setDropped(callback))}
                        callGo={(data) => setPosition(data)}
                    />
                </div>


                <Map
                    ref={mapEl}
                    animate={false}
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