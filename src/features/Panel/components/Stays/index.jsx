import React from 'react';
import PropTypes from 'prop-types';
import LocationComponent from '../Location';
import './styles.scss';

StaysItem.propTypes = {};

function StaysItem(props) {
    return (
        <div className="stays">
            <LocationComponent />
        </div>
    );
}

export default StaysItem;
