import React from 'react';
import TravelItem from '../TravelItem';
import './styles.scss';
TravelList.propTypes = {};

function TravelList(props) {
    const travels = [
        {
            number: '01',
            colornumber: '#8BC5E5',
            title: 'Find trips that fit a flexible lifestyle',
            content: 'Stacks is a production-ready library of stackable content blocks built in React Native',
        },
        {
            number: '02',
            colornumber: '#92A5EF',
            title: 'Travel with more confidence',
            content: 'Stacks is a production-ready library of stackable content blocks built in React Native',
        },
        {
            number: '03',
            colornumber: '#58C27D',
            title: 'See what’s really included',
            content: 'Stacks is a production-ready library of stackable content blocks built in React Native',
        },
    ];
    return (
        <div className="travel__list">
            {travels.map((item, index) => (
                <TravelItem key={index} item={item} />
            ))}
        </div>
    );
}

export default TravelList;
