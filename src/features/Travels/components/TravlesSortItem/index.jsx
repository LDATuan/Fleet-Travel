import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

TravelsSortItem.propTypes = {
    title: PropTypes.string,
    href: PropTypes.string,
    isActive: PropTypes.bool,
};

function TravelsSortItem({ sortitem, onclick }) {
    const { title, href, isActive } = sortitem;
    const handleClick1 = (e) => {
        e.preventDefault();
        onclick(sortitem);
    };
    return (
        <a
            href={href}
            onClick={(e) => handleClick1(e)}
            className={`travels__sortitem ${isActive && 'travels__sortitem--active'}`}
        >
            <FontAwesomeIcon
                icon={faDollarSign}
                className={`travels__icon ${isActive && 'travels__icon--active'}`}
            />
            {title}
        </a>
    );
}

export default TravelsSortItem;
