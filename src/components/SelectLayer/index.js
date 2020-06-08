import React, {useState} from 'react';
import './style.css';


const SelectLayer = props => {

    const [show, setShow] = useState(true)


    const {call, name} = props;

    function invertShow(){
        setShow(!show)
        if(call){
            call({name, show})
        }
    }


    return (
        <button className={"OutLine " + (show ? "OutLineStatic": "OutLineClicked")} onClick={invertShow} >
            <div className={"btStyle " + (show? "btStyleStatic" : "btStyleClicked")}>
                <p className={"text " + ( show ? "textStatic" : "textClicked")}>{name}</p>
            </div>
        </button>
    );
}

export default SelectLayer;