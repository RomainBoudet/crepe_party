import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Footer = ({ date }) => (
  <footer className="footer">
    © Romain Boudet - {date}
  </footer>
);

Footer.propTypes = {
  date: PropTypes.number.isRequired,
};

export default Footer;
