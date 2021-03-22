import React, {  useState } from 'react';

import './style.css'

function InputComent({ submit }) {

  const [form, setForm] = useState({
    username: "",
    comment: ""
  })

  const formChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value }) 
  };

  const handleSubmit = e => {
    e.preventDefault();
    submit && submit(form);
    setForm({
      username: "",
      comment: ""
    })
  };

  return (
    <form 
      className="formComents" 
      onSubmit={(e) => handleSubmit(e)}
      >

      <div className="containerComents">
        <h2>Deixe um comentario sobre o local!</h2>

        <input 
          type="text" 
          name="username" 
          placeholder="Nome" 
          value={form.username}
          required 
          onChange={formChange}
        />

        <textarea 
          type="text" 
          name="comment" 
          placeholder="Mensagem" 
          value={form.comment}
          required 
          onChange={formChange}
        />

        <button type="submit">ENVIAR</button>

      </div>
      
    </form>
  )
}

export default InputComent;