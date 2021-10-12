import React from 'react';
import PlaceList from './components/PlaceList';
import './styles.scss';
PlacesFeature.propTypes = {};

function PlacesFeature(props) {
    return (
        <section className="places">
            <div className="places__head">
                <h2 className="places__title">Explore nearby</h2>
                <div className="places__info">10,789 beautiful places to go</div>
            </div>
            <PlaceList />
        </section>
    );
}

export default PlacesFeature;
