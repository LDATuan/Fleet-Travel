import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ReactComponent as Logo } from 'assets/img/logodark.svg';
import Button from 'components/Button/Button';
import './styles.scss';
import TypeTravel from './TypeTravel/TypeTravel';

Header.propTypes = {};

function Header(props) {
    return (
        <header className="header">
            <a className="header__logo" href="index.html">
                <Logo />
            </a>
            <div className="header__marker"></div>
            <TypeTravel />
            <div className="header__left">
                <span className="header__support">Support</span>
                <span className="header__language">
                    <FontAwesomeIcon icon={faGlobe} className="header__iconlanguage" />
                    Language
                </span>
                <Button content="List your property" />
                <FontAwesomeIcon className="header__notification" icon={faBell} />
                <div className="header__user">
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </header>
    );
}

export default Header;
