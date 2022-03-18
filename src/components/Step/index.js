import React from 'react';
import './style.scss';

const Step = ({instructions}) => {
  console.log(instructions);

  /* Mais attaention, pour que react soit capable d'identifier si il existe un changement, dans chacun des li, on doit doit donner une prop key, avec un valeur unique */
  return (
    <ul className="steps">
      {instructions.map(item => 
        (
        <li key={item} className="step"> {item} </li>
        )
      )}
    </ul>

)};

export default Step;
