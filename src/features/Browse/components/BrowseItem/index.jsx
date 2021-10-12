import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './styles.scss';

BrowseItem.propTypes = {};

function BrowseItem({ browse }) {
    const { category, image, title, content } = browse;
    return (
        <div className="browse__item">
            <div className="browse__image">
                <img src={image} alt="" />
                <div className="browse__category">{category}</div>
            </div>
            <div className="browse__subtitle">{title}</div>
            <div className="browse__content">
                <FontAwesomeIcon className="browse__icon" icon={faHome} />
                {content}
            </div>
        </div>
    );
}

export default BrowseItem;
