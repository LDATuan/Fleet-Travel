import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { ReactComponent as StarIcon } from 'assets/icons/star-solid.svg';
TravelPreview.propTypes = {
    avatar: PropTypes.string,
    person: PropTypes.string,
    rate: PropTypes.string,
};

function TravelPreview({ preview }) {
    const { avatar, person, rate, top, left } = preview;
    return (
        <div className="travel__preview" style={{ top: top, left: left }}>
            <img src={avatar} className="travel__avatar" alt="#"></img>
            <div className="travel__rating">
                <div className="travel__person">{person}</div>
                <div className="travel__rate">
                    <StarIcon />
                    <div className="travel__value">{rate}</div>
                </div>
            </div>
        </div>
    );
}

export default TravelPreview;
