import React from 'react';

import './style.css'

function InputComent() {
  return (
    <form 
      className="formComents">

      <div className="containerComents">
        <h2>Deixe um comentario sobre o local!</h2>

        <input type="email" name="name" placeholder="Nome" required/>

        <textarea type="text" name="message" placeholder="Mensagem" required/>

        <button type="submit">ENVIAR</button>

      </div>
      
    </form>
  )
}

export default InputComent;