import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header className="header">
  <img src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="une hoto de crepe" className="header-image" />
  <div className="header-content">
    <h1 className="header-title">Mon beau titre</h1>
    <p className="header-infos"> mon auteur - difficulté</p>
  </div>
</header>
  )};

export default Header;
