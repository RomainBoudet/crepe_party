import React from 'react';
import './style.scss';

// Je peux déstructurer en paramétre direct ! et faire un return automatique !
const Header = ({title, thumbnail, difficulty, author}) => 
   (
    <header className="header">
  <img src={thumbnail} className="header-image" />
  <div className="header-content">
    <h1 className="header-title">{title}</h1>
    <p className="header-infos"> {author} - {difficulty}</p>
  </div>
</header>
  );

export default Header;
