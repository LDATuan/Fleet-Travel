import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

AdventureItem.propTypes = {
    title: PropTypes.string,
    place: PropTypes.string,
};

function AdventureItem({ adventure }) {
    const { image, title, place } = adventure;
    return (
        <div className="adventure__item">
            <div className="adventure__img">
                <img src={image} alt="" />
            </div>
            <div className="adventure__detail">
                <div className="adventure__subtitle">{title}</div>
                <a className="adventure__place" href="/#">
                    {place}
                </a>
            </div>
        </div>
    );
}

export default AdventureItem;
