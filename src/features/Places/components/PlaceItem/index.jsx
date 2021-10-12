import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

PlaceItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.string,
    count: PropTypes.number,
};

function PlaceItem({ place }) {
    const { image, title, time, count } = place;

    const hanldeClick = (e) => {
        e.preventDefault();
    };

    return (
        <a href="/#" onClick={(e) => hanldeClick(e)} className="places__item">
            <div className="places__image">
                <img src={image} alt="" />
            </div>
            <div className="places__number">{count}</div>
            <div className="places__subtitle">{title}</div>
            <div className="places__time">{time}</div>
        </a>
    );
}

export default PlaceItem;
