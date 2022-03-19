import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Ingredient = ({ name, quantity, unit }) => (
  <li className="ingredient">
    <span className="ingredient-quantity">{quantity} {unit}</span> {name}
  </li>
);

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default Ingredient;
