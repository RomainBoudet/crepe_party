import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
/* Mais attention, pour que react soit capable d'identifier si il existe un changement,
dans chacun des li, on doit doit donner une prop key, avec un valeur unique */

const Step = ({ instructions }) => (
  <ul className="steps">
    {instructions.map((item) => (
      <li key={item} className="step"> {item} </li>
    ))}
  </ul>
);

Step.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Step;
