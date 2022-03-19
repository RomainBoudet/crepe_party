import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient';

// ingredients est un tableau d'objet, contenant chacun 4 clés.

const Ingredients = ({ ingredients }) => (
  <div className="ingredients">
    <ul>
      {ingredients.map((item) => (
        <Ingredient
          key={item.id}
          {...item}
        />
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
