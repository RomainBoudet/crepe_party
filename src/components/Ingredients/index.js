import React from 'react';
import './style.scss';

const Ingredients = () => {
  return (
    <div className="ingredients">
      <ul>
        <li className="ingredient">
          <span className="ingredient-quantity">5g</span> de sel
        </li>
        <li className="ingredient">
          <span className="ingredient-quantity">2g</span> de farine
        </li>
        <li className="ingredient">
          <span className="ingredient-quantity">0.3l</span> d'huile d'olive
        </li>
        <li className="ingredient">
          <span className="ingredient-quantity">3200 ml</span> de lait
        </li>
      </ul>
    </div>
  );
};

export default Ingredients;
