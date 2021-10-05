import React from 'react';
import CheckIn from '../Checkin';
import LocationComponent from '../Location';
import Traveler from '../Traveler';
import './styles.scss';

StaysItem.propTypes = {};

function StaysItem(props) {
    return (
        <div className="stays">
            <LocationComponent />
            <CheckIn title="Check in" />
            <CheckIn title="Check out" />
            <Traveler />
        </div>
    );
}

export default StaysItem;
