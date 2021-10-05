import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

TravelItem.propTypes = {
    number: PropTypes.string,
    colornumber: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
};

function TravelItem({ item }) {
    const { number, colornumber, title, content } = item;
    return (
        <div className="travel__item">
            <div className="travel__number" style={{ backgroundColor: colornumber }}>
                {number}
            </div>
            <div className="travel__subtitle">{title}</div>
            <div className="travel__content">{content}</div>
        </div>
    );
}

export default TravelItem;
