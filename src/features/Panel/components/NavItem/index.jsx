import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

NavItem.propTypes = {
    isActive: PropTypes.bool,
    content: PropTypes.string.isRequired,
    onclick: PropTypes.func,
};

function NavItem({ isActive, content, onclick }) {
    return (
        <div className="navitem">
            <a onClick={onclick} className={`navitem__link${isActive ? ' active' : ''}`} href="/#">
                {content}
            </a>
        </div>
    );
}

export default NavItem;
