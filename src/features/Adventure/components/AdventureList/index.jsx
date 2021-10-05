import React from 'react';
import AdventureItem from '../AdventureItem';
import './styles.scss';

AdventureList.propTypes = {};

function AdventureList({ adventures }) {
    return (
        <div className="adventure__list">
            {adventures.map((adventure, index) => (
                <AdventureItem key={index} adventure={adventure} />
            ))}
        </div>
    );
}

export default AdventureList;
