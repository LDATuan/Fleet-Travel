import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

CheckIn.propTypes = {
    title: PropTypes.string,
};

function CheckIn({ title }) {
    return (
        <div className="checkin">
            <FontAwesomeIcon className="checkin__icon" icon={faCalendar} />
            <div className="checkin__content">
                <div className="checkin__title">{title}</div>
                <div className="checkin__placeholder">Add date</div>
            </div>
        </div>
    );
}

export default CheckIn;
