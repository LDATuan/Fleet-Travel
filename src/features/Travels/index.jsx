import Button from 'components/Button/Button';
import CustomSelect from 'components/Select';
import React from 'react';
import TravelsList from './components/TravelsList';
import TravelsSort from './components/TravelsSort';
import './styles.scss';
TravelsFeature.propTypes = {};

function TravelsFeature(props) {
    const options = ['Recently Added', 'Long Added'];

    return (
        <section className="travels">
            <div className="travels__head">
                <div className="travels__title">Go somewhere</div>
                <div className="travels__info">Let’s go on an adventure</div>
            </div>
            <div className="travels__sorting">
                <TravelsSort />
                <div className="travels__select">
                    <CustomSelect options={options} />
                </div>
            </div>
            <TravelsList />
            <div className="travels__btn">
                <Button content="View all" />
            </div>
        </section>
    );
}

export default TravelsFeature;
