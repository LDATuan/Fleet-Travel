import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

WorkItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string,
};

function WorkItem({ work }) {
    const { image, title, info } = work;
    return (
        <div className="work__item">
            <img src={image} alt="#" />
            <div className="work__subtitle">{title}</div>
            <div className="work__subinfo">{info}</div>
        </div>
    );
}

export default WorkItem;
