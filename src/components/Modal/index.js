import React from 'react';
import { IoMdClose } from 'react-icons/io'
import './style.css'

function Modal({text, close, title}) {
  return (
        <div className="containerFadeModal">
            <div className="modalSquare">
                <h1>{title}</h1>
                <h3>{text}</h3>
            </div>
            <IoMdClose className="btClose" onClick={close}/>
        </div>
  )
}

export default Modal;