import React from 'react';

import './style.css';

const Coment = ({username, coment}) => {
  return (
  <div className="comentContainer">
      <h4>{username}</h4>
      <p>{coment}</p>
  </div>
  )
}

export default Coment;