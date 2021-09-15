import React from 'react';
import PropTypes from 'prop-types';
import { IMG_URL } from '../../constants/imgconstant';
import './styles.scss';
import TypeTravel from './TypeTravel/TypeTravel';

Header.propTypes = {};

function Header(props) {
  return (
    <div className="header">
      <a className="header__logo" href="index.html">
        <img className="header__logo" src={IMG_URL + './assets/logo-dark.svg'} alt="Home" />
      </a>
      <div className="header__marker"></div>
      <TypeTravel />
    </div>
  );
}

export default Header;
