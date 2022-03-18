import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

// Je peux déstructurer en paramétre direct ! et faire un return automatique !
const Header = ({
  title, thumbnail, difficulty, author,
}) => (
  <header className="header">
    <img src={thumbnail} className="header-image" alt="crepe" />
    <div className="header-content">
      <h1 className="header-title">{title}</h1>
      <p className="header-infos"> {author} - {difficulty}</p>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

export default Header;
