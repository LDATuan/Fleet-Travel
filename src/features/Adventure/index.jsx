import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import { imgAdventure } from 'configs';
import React from 'react';
import AdventureList from './components/AdventureList';
import './styles.scss';

AdventureFeature.propTypes = {};

function AdventureFeature(props) {
    const adventures = [
        {
            image: imgAdventure.adventure1,
            title: 'Luxury resort at the sea',
            place: '9,326 places',
        },
        {
            image: imgAdventure.adventure2,
            title: 'Camping amidst the wild',
            place: '12,326 places',
        },
        {
            image: imgAdventure.adventure3,
            title: 'Luxury resort at the sea',
            place: '5.326 places',
        },
    ];

    return (
        <div className="adventure">
            <div className="adventure__head">
                <h2 className="adventure__title">Let’s go on an adventure</h2>
                <div className="adventure__info">Find and book a great experience.</div>
            </div>

            <AdventureList adventures={adventures} />
            <div className="adventure__button">
                <button className="btn__arrow btn__prev">
                    <ArrowIcon />
                </button>
                <button className="btn__arrow btn__next">
                    <ArrowIcon />
                </button>
            </div>
        </div>
    );
}

export default AdventureFeature;
