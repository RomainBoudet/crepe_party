import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

// ingredients est un tableau d'objet, contenant chacun 4 clés.

const Ingredients = ({ ingredients }) => (
  <div className="ingredients">
    <ul>
      {ingredients.map((item) => (
        <li className="ingredient" key={item.id}>
          <span className="ingredient-quantity">{item.quantity}{item.unit}</span> {item.name}
        </li>
      ))}
    </ul>
  </div>
);

Ingredients.propTypes = {

  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Ingredients;
