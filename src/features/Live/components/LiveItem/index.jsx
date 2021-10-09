import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

LiveItem.propTypes = {
    image: PropTypes.string,
};

function LiveItem({ live }) {
    const { image, title, content, href } = live;

    return (
        <a href={href} alt="Live Item" className="live__item">
            <div className="live__preview">
                <img alt="Liveimage" className="live__image" src={image} />
            </div>
            <div className="live__subtitle">{title}</div>
            <div className="live__content">{content}</div>
        </a>
    );
}

export default LiveItem;
